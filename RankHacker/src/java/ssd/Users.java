/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.sql.*;


/**
 *
 * @author Graphics
 */
public class Users {
    public static void resetAdminPassword(String userID, String newPassword)
    {
        String saltString = PasswordEncryptionService.generateSalt();
        String hashedPassword = "";
        
        try
        {
            hashedPassword = PasswordEncryptionService.hashDotNET(newPassword, saltString);
            
            //Update the database record
            Connection conn = Database.getSQLServerConnection();
            Statement stmt = null;
            
            String query = "update useraccounts set password='"+hashedPassword+"',passwordsalt='"+saltString+"',lastpasswordchangeddate=getdate() where userid='"+userID+"'";
            stmt = conn.createStatement();
            stmt.execute(query);
            
            //Notify user via email
            Users.notifyAdminUserOfPasswordChange(userID, newPassword);
            
            stmt.close();
            stmt = null;
            conn.close();
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void notifyAdminUserOfPasswordChange(String userID, String password)
    {
        String email = "";
        String messageBody = "";
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        try
        {
            stmt = conn.createStatement();
            
            String query = "select email from useraccounts where userid='"+userID+"'";
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                email = rs.getString("email");
            }
            messageBody = "This is an automated message from SSD Fair Marketing, notifying you that your login password for the Link Rocket application has been changed. Your new password is:<br/><br/>" + password + "<br/><br/>If you believe this password change has been made in error, please contact Fair Marketing immediately at (888) 736-2384.<br/><br/><br/>" + Util.getEmailDisclaimerText();
            
            SendMail s = new SendMail();
            s.sendEmail(email, "Notice of password change", messageBody);
            
            stmt.close();
            stmt = null;
            conn.close();
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static String getUserFullName(String environment, String userID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        String fullName = "";
        
        String query = "select firstname,lastname from useraccounts where username='"+userID+"'";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                fullName = rs.getString("firstname") + " " + rs.getString("lastname");
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }

        return fullName;
    }
}
