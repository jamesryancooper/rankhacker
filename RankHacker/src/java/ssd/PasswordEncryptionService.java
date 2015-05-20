/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.security.*;

public class PasswordEncryptionService
{
    public static String hashDotNET(String password, String salt) throws Exception
    {
        byte[] passwordBytes= password.getBytes("UTF-16LE");
        byte[] saltByte = Base64Coder.decode(salt);
        byte[] seedByte = new byte[passwordBytes.length+saltByte.length];
        int i=0;
        
        for(byte b:saltByte)
        {
            seedByte[i]=b;
            i++;
        }
        for(byte b:passwordBytes)
        {
            seedByte[i]=b;
            i++;
        }
        MessageDigest md = MessageDigest.getInstance("SHA");
        byte[] hashedBytes = md.digest(seedByte);
        char[] encodedAfter = Base64Coder.encode(hashedBytes);
        String hashedString = new String(encodedAfter);
        
        return hashedString;
    }
    
    public static String generateSalt()
    {
        String saltString = "";
        try
        {
            SecureRandom s = new SecureRandom();
            byte[] salt = new byte[16];
            s.nextBytes(salt);
            
            char[] encodedAfter = Base64Coder.encode(salt);
            saltString = new String(encodedAfter);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        return saltString;
    }
}