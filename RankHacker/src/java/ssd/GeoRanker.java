/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.net.*;
import java.io.*;
import java.util.*;
import org.json.*;
import java.sql.*;

/**
 *
 * @author Hari
 */
public class GeoRanker
{
    private static final String targetURL = Config.geoRankerHost();
    private static final String username = Config.geoRankerUsername();
    private static final String apiKey = Config.geoRankerKey();
    private static final String charset = Config.systemCharset();
    
    public static String getSessionID()
    {
        String sessionID = "";
        
        String command = "api/login.json?";
        String[][] keyValuePairs = new String[2][2];
        
        keyValuePairs[0][0] = "email";
        keyValuePairs[0][1] = username;
        keyValuePairs[1][0] = "apikey";
        keyValuePairs[1][1] = apiKey;        
        
        String query = URLProvider.encodeParams(keyValuePairs);
        
        try
        {
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+command+query));
            sessionID = (String)j.get("session");
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return sessionID;
    }
    
    public static String[] requestReport(String keywords, String regions)
    {
        String[] returnData = new String[2];
        //0 = sessionID
        //1 = reportID
        
        String sessionID = GeoRanker.getSessionID();
        returnData[0] = sessionID;
        
        String[][] keyValuePairs = new String[2][2];
        
        keyValuePairs[0][0] = "email";
        keyValuePairs[0][1] = username;
        keyValuePairs[1][0] = "session";
        keyValuePairs[1][1] = sessionID;        
        String query = URLProvider.encodeParams(keyValuePairs);
        
        String command = "report/new.json?";
        
        JSONObject jsonData = new JSONObject();
        
        try
        {
            jsonData.put("type","1stpage");
            jsonData.put("totalresults","10");
            jsonData.put("countries",new JSONArray("[\"US\"]"));
            jsonData.put("maxcities","1");
            jsonData.put("keywords",new JSONArray("[\""+keywords+"\"]"));
            jsonData.put("regions",new JSONArray("[\""+regions+"\"]"));
            
            String postData = jsonData.toString();
            byte[] postDataByte = postData.getBytes(charset);
            
            JSONObject j = new JSONObject(JSONUtils.excutePost(targetURL+command+query, postDataByte));
            returnData[1] = (String)j.get("id");
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return returnData;
    }
    
    public static boolean checkReportReady(String sessionID, String reportID)
    {
        boolean ready = false;
        String[][] keyValuePairs = new String[2][2];
        
        keyValuePairs[0][0] = "email";
        keyValuePairs[0][1] = username;
        keyValuePairs[1][0] = "session";
        keyValuePairs[1][1] = sessionID;        
        String query = URLProvider.encodeParams(keyValuePairs);
        
        String command = "report/"+reportID+".json?";
        
        try
        {
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+command+query));
            String isPending = (String)j.get("is_pending");
            if(isPending.equals("0"))
            {
                ready = true;
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return ready;
    }
    
    public static void processReport(long projectID, String sessionID, String reportID)
    {
        String[][] keyValuePairs = new String[2][2];
        
        keyValuePairs[0][0] = "email";
        keyValuePairs[0][1] = username;
        keyValuePairs[1][0] = "session";
        keyValuePairs[1][1] = sessionID;        
        String query = URLProvider.encodeParams(keyValuePairs);
        
        String command = "report/firstpage/"+reportID+".json?";
        
        try
        {
            JSONArray report = new JSONArray(JSONUtils.readURL(targetURL+command+query));
            JSONObject obj = report.getJSONObject(0);
            JSONArray rankData = (JSONArray)obj.get("data");
            
            //Open a database connection and prepare the import statement
            String importQuery = "insert into georankerresults(projectid,createdatetime,positionrank,title,url,selected,reportid) values("+projectID+",getdate(),?,?,?,0,"+reportID+")";
            Connection conn = Database.getSQLServerConnection();
            PreparedStatement pstmt = conn.prepareStatement(importQuery);
            
            int position = 0;
            String title = "";
            String url = "";
            
            //Parse and load to database
            for(int i=0;i<rankData.length(); i++)
            {
                position = rankData.getJSONObject(i).getInt("position");
                title = rankData.getJSONObject(i).getString("title");
                url = rankData.getJSONObject(i).getString("url");
                
                pstmt.setInt(1, position);
                pstmt.setString(2, title);
                pstmt.setString(3, url);
                pstmt.execute();
                /*System.out.println("Position: " + rankData.getJSONObject(i).getInt("position"));
                System.out.println("Title: " + rankData.getJSONObject(i).getString("title"));
                System.out.println("URL: " + rankData.getJSONObject(i).getString("url"));
                System.out.println("---------------------------------------------------");*/
            }
            
            pstmt.close();
            conn.close();
            pstmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void markResultSelected(String linkID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        try
        {
            String query = "update georankerresults set selected=1 where id="+linkID;
            stmt = conn.createStatement();
            stmt.execute(query);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void debugReport(String sessionID, String reportID)
    {
        String[][] keyValuePairs = new String[2][2];
        
        keyValuePairs[0][0] = "email";
        keyValuePairs[0][1] = username;
        keyValuePairs[1][0] = "session";
        keyValuePairs[1][1] = sessionID;        
        String query = URLProvider.encodeParams(keyValuePairs);
        
        String command = "report/firstpage/"+reportID+".json?";
        
        try
        {
            JSONArray report = new JSONArray(JSONUtils.readURL(targetURL+command+query));
            
            System.out.println(report.toString());
            
            /*JSONObject obj = report.getJSONObject(0);
            JSONArray rankData = (JSONArray)obj.get("data");
            
            //Open a database connection and prepare the import statement
            String importQuery = "insert into georankerresults(projectid,createdatetime,positionrank,title,url,selected,reportid) values("+projectID+",getdate(),?,?,?,0,"+reportID+")";
            Connection conn = Database.getSQLServerConnection();
            PreparedStatement pstmt = conn.prepareStatement(importQuery);
            
            int position = 0;
            String title = "";
            String url = "";
            
            //Parse and load to database
            for(int i=0;i<rankData.length(); i++)
            {
                position = rankData.getJSONObject(i).getInt("position");
                title = rankData.getJSONObject(i).getString("title");
                url = rankData.getJSONObject(i).getString("url");
                
                pstmt.setInt(1, position);
                pstmt.setString(2, title);
                pstmt.setString(3, url);
                pstmt.execute();
            }
            
            pstmt.close();
            conn.close();
            pstmt = null;
            conn = null;*/
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
}
