/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ssd;

import java.text.*;
import java.util.*;
import java.sql.*;
import java.io.*;
import javax.mail.*;
import javax.mail.internet.*;
import javax.activation.*;
import com.sun.mail.smtp.*;

/**
 *
 * @author Hari Patel
 */
public class SendMail
{
    private static String mailHost = Config.mailHost();
    private static int mailPort = Config.mailPort();
    private static String mailUsername = Config.mailUsername();
    private static String mailPassword = Config.mailPassword();

    public static void sendTestEmail()
    {
        String recipientList = "hari.patel@1520holdings.com";
        String subjectLine = "Test email";
        String reportBody = "This is a test.";
        SendMail.sendEmail(recipientList, subjectLine, reportBody);
    }
    
    public static void sendEmail(String recipientList, String subjectLine, String reportBody)
    {
        try
        {
            Properties p = new Properties();
            p.put("mail.transport.protocol", "smtp");
            p.put("mail.smtp.starttls.enable", "true");
            p.put("mail.smtp.host", mailHost);
            p.put("mail.smtp.port", mailPort);
            p.put("mail.smtp.auth", "true");
            p.put("mail.smtp.ssl.trust", mailHost);
            //p.put("mail.debug", "true");
            javax.mail.Authenticator a = new SMTPAuthenticator();
            javax.mail.Session s = javax.mail.Session.getDefaultInstance(p, a);
            //java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());

            MimeBodyPart html = new MimeBodyPart();
            Multipart mp = new MimeMultipart();
            Transport t = s.getTransport("smtp");
            Message m = new MimeMessage(s);
            m.setFrom(new InternetAddress(Config.mailAccount(),"SSD Fair Marketing"));

            html.setContent("<html><body><table cellpadding='3' cellspacing='3'>" + reportBody + "</table></body></html>","text/html");
            mp.addBodyPart(html);
            m.setContent(mp);
            m.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipientList, false));
            m.setSubject(subjectLine);

            t.connect(mailHost, mailPort, mailUsername, mailPassword);
            t.send(m);
            t.close();
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
            ex.printStackTrace();
        }
    }

    public static void sendEmailWithAttachments(String recipientList, String subjectLine, String reportBody, String[] fileLocations)
    {
        try
        {
            Properties p = new Properties();
            p.put("mail.transport.protocol", "smtp");
            p.put("mail.smtp.starttls.enable", "true");
            p.put("mail.smtp.host", mailHost);
            p.put("mail.smtp.port", mailPort);
            p.put("mail.smtp.auth", "true");
            p.put("mail.smtp.ssl.trust", mailHost);
            //p.put("mail.debug", "true");
            javax.mail.Authenticator a = new SMTPAuthenticator();
            javax.mail.Session s = javax.mail.Session.getDefaultInstance(p, a);
            //java.security.Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider());

            MimeBodyPart html = new MimeBodyPart();
            Multipart mp = new MimeMultipart("mixed");
            Transport t = s.getTransport("smtp");
            Message m = new MimeMessage(s);
            m.setFrom(new InternetAddress(Config.mailAccount(),"SSD Fair Marketing"));

            //Go through the attachments and add each one
            String fileName = "";
            MimeBodyPart attachment = null;
            DataSource source = null;
            for(int i=0; i<fileLocations.length; i++)
            {
                attachment = new MimeBodyPart();
                fileName = fileLocations[i].replace(Config.tempFileLocation(), "");
                source = new FileDataSource(fileLocations[i]);
                attachment.setDataHandler(new DataHandler(source));
                attachment.setFileName(fileName);
                mp.addBodyPart(attachment);
            }

            //Add the HTML component
            html.setContent("<html><body><table cellpadding='3' cellspacing='3'>" + reportBody + "</table></body></html>","text/html");
            mp.addBodyPart(html);
            m.setContent(mp);
            m.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipientList, false));
            m.setSubject(subjectLine);

            t.connect(mailHost, mailPort, mailUsername, mailPassword);
            t.send(m);
            t.close();
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }

    private static class SMTPAuthenticator extends javax.mail.Authenticator
    {
        public PasswordAuthentication getPasswordAuthentication()
        {
            return new PasswordAuthentication(mailUsername, mailPassword);
        }
    }
}
