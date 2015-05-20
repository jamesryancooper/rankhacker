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
public class Ahrefs
{
    private static final String targetURL = Config.ahrefsHost();
    private static final String token = Config.ahrefsToken();
    private static final String charset = Config.systemCharset();
    
    public static void processBacklinks(long projectID, long linkID, String siteName)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        String[] jsonKeys = Ahrefs.getMetricsArray();
        String importQuery = "insert into ahrefsresults(projectid,linkid,createdatetime,url_from,url_to,ahrefs_rank,domain_rating,ip_from,links_internal,links_external,page_size,encoding,title,first_seen,last_visited,prev_visited,sitewide,original,link_type,redirect,nofollow,alt,anchor,text_pre,text_post)" + 
                            " values";
        
        /** OVERRIDE TO ahrefs.com FOR TESTING -- REMOVE WHEN TAKING LIVE!! **/
        siteName = "http://www.ahrefs.com";
        
        siteName = siteName.replaceAll("https://","");
        siteName = siteName.replaceAll("http://","");
        siteName = siteName.replaceAll("www.","");
        
        try
        {
            stmt = conn.createStatement();
            
            siteName = URLEncoder.encode(siteName,charset);
            
            String command = "backlinks";
            String query = "token="+token+"&target="+siteName+"&limit=50&output=json&from="+command+"&mode=domain";
            
//System.out.println(targetURL+query);
            
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            
//System.out.println(j.toString());
            
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                
                if(k.equalsIgnoreCase("REFPAGES"))
                {
                    JSONArray links = j.getJSONArray(k);
                    
                    for(int linkCounter=0; linkCounter<links.length(); linkCounter++)
                    {
                        String importStubString = "";
                        String val = "";
                        JSONObject data = links.getJSONObject(linkCounter);
                        
                        for(int arrayCounter = 0; arrayCounter <jsonKeys.length; arrayCounter++)
                        {
                            try
                            {
                                val = data.get(jsonKeys[arrayCounter]).toString();
                            }
                            catch(org.json.JSONException jex)
                            {
                                val = "NULL";
                            }

                            if(arrayCounter==2 || arrayCounter==3 || arrayCounter==5 || arrayCounter==6 || arrayCounter==7 || arrayCounter==16  || val.equals("NULL"))
                            {
                                //No strings
                            }
                            else if(arrayCounter==10 || arrayCounter==11 || arrayCounter==12)
                            {
                                //Datetime -- need to remove the Zulu designation for t-sql compatibility
                                val = val.replaceAll("Z","");
                                val = "'"+val+"'";
                            }
                            else
                            {
                                val = "'"+Util.addSlashes(val)+"'";
                            }

                            if(arrayCounter == 0)
                            {
                                importStubString = "("+projectID+","+linkID+",getdate(),"+val;
                            }
                            else
                            {
                                importStubString += ","+val;
                            }
                        }
                        importStubString += ")";

                        if(linkCounter == 0)
                        {
                            importQuery += importStubString;
                        }
                        else
                        {
                            importQuery += ","+importStubString;
                        }
                    }
                    stmt.execute(importQuery);
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static String[] getMetricsArray()
    {
        String[] jsonKeys = {"url_from","url_to","ahrefs_rank","domain_rating","ip_from","links_internal","links_external","page_size","encoding","title","first_seen","last_visited","prev_visited","sitewide","original","link_type","redirect","nofollow","alt","anchor","text_pre","text_post"};
        return jsonKeys;
    }
    
    public static String[][] getMetricDescriptions()
    {
        String[][] descriptions = new String[150][2];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        String query = "select * from ahrefsmetricinfo";
        
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
