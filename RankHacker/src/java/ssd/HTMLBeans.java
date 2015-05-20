/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.sql.*;

/**
 *
 * @author Hari
 */
public class HTMLBeans
{
    public static String outputBanner(boolean validLogin)
    {
        String output = "<div id=\"bannercontainer\" class=\"banner\" style=\"background-color:#4C4C4C;height:285;\">\n"
            + "<table width=\"99%\" border=\"0\" cellpadding=\"5\" cellspacing=\"5\">\n" +
"            <tr valign=\"middle\">\n" +
"                <td align=\"right\" width=\"60%\" class=\"bannertext\" style=\"cursor:pointer;\" onclick=\"document.location='begin.jsp';\">LinkRocket</td>\n" +
"            </tr>\n" +
"        </table></div>";

        return output;
    }
    
    public static int getCognitiveResultsCount(String projectID, String linkID)
    {
        int count = 0;
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        try
        {
            String query = "select count(*) as c from cognitiveresults where projectid="+projectID+" and linkid="+linkID;
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                count = rs.getInt("c");
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
        
        return count;
    }
    
    public static int getMozResultsCount(String projectID, String linkID)
    {
        int count = 0;
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        try
        {
            String query = "select count(*) as c from mozurlmetricsresults where projectid="+projectID+" and linkid="+linkID;
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                count = rs.getInt("c");
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
        
        return count;
    }
    
    public static String getColumnDescription(String[][] descriptionsMap, String colName)
    {
        String desc = "";
        
        for(int i=0; i<descriptionsMap.length; i++)
        {
            if(descriptionsMap[i][0].equals(colName))
            {
                desc = descriptionsMap[i][1];
                break;
            }
        }
        
        return desc;
    }
    
    public static int getAhrefsResultsCount(String projectID, String linkID)
    {
        int count = 0;
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        try
        {
            String query = "select count(*) as c from ahrefsresults where projectid="+projectID+" and linkid="+linkID;
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                count = rs.getInt("c");
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
        
        return count;
    }
}
