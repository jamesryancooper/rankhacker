/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ssd;

import java.sql.*;

/**
 *
 * @author Hari Patel
 */
public class Database
{
    public static Connection getSQLServerConnection()
    {
        Connection conn = null;

        String connectionString = Config.sqlServerConnectionString();
        String username = Config.sqlServerUsername();
        String password = Config.sqlServerPassword();
        
        try
        {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver").newInstance();
            conn = DriverManager.getConnection(connectionString, username, password);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }

        return conn;
    }
}
