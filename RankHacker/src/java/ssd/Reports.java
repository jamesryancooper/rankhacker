/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.util.*;
import java.sql.*;

/**
 *
 * @author Hari
 */
public class Reports
{
    public static ResultSet getMozLinkAnalysisReport(String projectID, String linkID)
    {
        ResultSet data = null;
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        String query = "select * from mozurlmetricsresults where projectid='"+projectID+"' and linkid='"+linkID+"'";
        
        try
        {
            stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            data = stmt.executeQuery(query);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return data;
    }
    
    public static ResultSet getAhrefsLinkAnalysisReport(String projectID, String linkID)
    {
        ResultSet data = null;
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        String query = "select * from ahrefsresults where projectid='"+projectID+"' and linkid='"+linkID+"'";
        
        try
        {
            stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
            data = stmt.executeQuery(query);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return data;
    }
}
