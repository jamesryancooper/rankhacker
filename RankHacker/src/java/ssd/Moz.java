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
public class Moz
{
    private static final String targetURL = Config.mozHost();
    private static final String accessID = Config.mozAccessID();
    private static final String secretKey = Config.mozSecretKey();
    private static final String charset = Config.systemCharset();
    
    public static void requestReport(long projectID, long linkID, String analyzeURL)
    {
        String endpoint = "url-metrics/";
        String cols = "182537205867084873";
        
        try
        {
            //Remove the http pre-processor string
            analyzeURL = analyzeURL.replace("http://","");
            
            MozAuthenticator m = new MozAuthenticator();
            m.setAccessID(accessID);
            m.setSecretKey(secretKey);
            m.setExpiresInterval(300L);
        
            String signature = m.getAuthenticationStr();
        
            analyzeURL = URLEncoder.encode(analyzeURL,charset);
            String fullRequest = targetURL+endpoint+analyzeURL+"?Cols="+cols+"&"+signature;

            JSONObject j = new JSONObject(JSONUtils.readURL(fullRequest));
            
            //System.out.println(j.toString());
            //System.exit(0);
            
            Moz.importJSONResults(projectID, linkID, j);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void importJSONResults(long projectID, long linkID, JSONObject j)
    {
        String[] jsonKeys = Moz.getMetricsArray();
        String importQuery = "insert into mozurlmetricsresults(projectid,linkid,createdatetime,ut,uu,ufq,upl,ueid,feid,peid,ujid,uifq,uipl,uid,fid,pid,umrp,umrr,fmrp,fmrr,pmrp,pmrr,utrp,utrr,ftrp,ftrr,ptrp,ptrr,uemrp,uemrr,fejp,fejr,pejp,pejr,fjp,fjr,pjp,pjr,us,fuid,puid,fipl,upa,pda,ued,fed,ped,pib,ulc) VALUES("+projectID+","+linkID+",getdate()";
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
                
        try
        {
            stmt = conn.createStatement();
            
            String val = null;
            for(int i=0; i<jsonKeys.length; i++)
            {
                try
                {
                    val = j.get(jsonKeys[i]).toString();
                }
                catch(org.json.JSONException jex)
                {
                    val = "NULL";
                }
                
                if(i<=3 && !val.equals("NULL"))
                {
                    val = "'"+Util.addSlashes(val)+"'";
                }
                
                importQuery += ","+val;
            }
            importQuery += ")";
            
            stmt.execute(importQuery);
            //System.out.println(importQuery);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static String[] getMetricsArray()
    {
        String[] jsonKeys = {"ut","uu","ufq","upl","ueid","feid","peid","ujid","uifq","uipl","uid","fid","pid","umrp","umrr","fmrp","fmrr","pmrp","pmrr","utrp","utrr","ftrp","ftrr","ptrp","ptrr","uemrp","uemrr","fejp","fejr","pejp","pejr","fjp","fjr","pjp","pjr","us","fuid","puid","fipl","upa","pda","ued","fed","ped","pib","ulc"};
        return jsonKeys;
    }
    
    public static String[][] getMetricDescriptions()
    {
        String[][] descriptions = new String[150][2];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        String query = "select * from mozmetricinfo";
        
        int i = 0;
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                descriptions[i][0] = rs.getString("metric");
                descriptions[i][1] = rs.getString("description");
                i++;
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return descriptions;
    }
}
