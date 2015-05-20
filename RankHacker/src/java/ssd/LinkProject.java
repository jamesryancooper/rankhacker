/*
 * To change this license header, choose License Headers in LinkProject Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.net.*;
import java.io.*;
import java.util.*;
import java.sql.*;

/**
 *
 * @author Hari
 */
public class LinkProject
{
    public static long[] createProject(String username, String website, String keyword, String geoRegion)
    {
        long[] projectData = new long[2];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        website = Util.addSlashes(website);
        keyword = Util.addSlashes(keyword);
        geoRegion = Util.addSlashes(geoRegion);
        
        try
        {
            String query = "insert into projects(username,rundatetime,website,keyword,georegion) values('"+username+"',getdate(),'"+website+"','"+keyword+"','"+geoRegion+"')";
            stmt = conn.createStatement();
            stmt.execute(query, Statement.RETURN_GENERATED_KEYS);
            rs = stmt.getGeneratedKeys();
            while(rs.next())
            {
                projectData[0] = rs.getLong(1);
            }
            
            Stopwatch timer = new Stopwatch();
            timer.start();
            LinkProject.getGeoRankerInfo(projectData[0], keyword, geoRegion);
            timer.stop();
            projectData[1] = (long)timer.getElapsedTime();
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return projectData;
    }
    
    public static long setGeoRankerReportID(long projectID, String geoRankerReportID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        try
        {
            String query = "update projects set georankerreportid="+geoRankerReportID+" where id="+projectID;
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
        
        return projectID;
    }
    
    public static void getGeoRankerInfo(long projectID, String keywords, String regions)
    {
        try
        {
            GeoRanker g = new GeoRanker();
            
            //Session ID = 0
            //Report ID = 1
            String[] reportParams = g.requestReport(keywords, regions);
            
            //Update the project table with the report ID in case we need it
            LinkProject.setGeoRankerReportID(projectID,reportParams[1]);
            
            //Try 12 times, every 2.5 seconds (30 seconds total)
            /*for(int i=0; i<12; i++)
            {
                if(g.checkReportReady(reportParams[0], reportParams[1]))
                {
                    g.processReport(projectID,reportParams[0], reportParams[1]);
                    return;
                }
                else
                {
                    Thread.sleep(2500);
                }
            }*/
            
            //Alternative code to keep trying until it's ready
            boolean completed = false;
            do
            {
                if(g.checkReportReady(reportParams[0], reportParams[1]))
                {
                    g.processReport(projectID,reportParams[0], reportParams[1]);
                    completed = true;
                }
                else
                {
                    Thread.sleep(2500);
                }
            }
            while(!completed);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static ResultSet getGeoRankerCompetitors(String projectID)
    {
        ResultSet rs = null;
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        String query = "select * from georankerresults where projectid="+projectID+" order by positionrank asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return rs;
    }
    
    public static String[] getProjectInfo(String projectID)
    {
        String[] info = new String[3];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        String query = "select * from projects where id="+projectID;
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                info[0] = rs.getString("website");
                info[1] = rs.getString("keyword");
                info[2] = rs.getString("georegion");
                
            }
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return info;
    }
    
    public static String[] getLinkInfo(String projectID, String linkID)
    {
        String[] info = new String[2];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        String query = "";
        
        if(linkID.equals("0"))
        {
            query = "select top 1 a.website as title,b.ufq as url from projects a,mozurlmetricsresults b where a.id="+projectID+" and a.id=b.projectid and b.linkid="+linkID;
        }
        else
        {
            query = "select * from georankerresults where projectid="+projectID+" and id="+linkID;
        }
        
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                info[0] = rs.getString("title");
                info[1] = rs.getString("url");
            }
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return info;
    }
}
