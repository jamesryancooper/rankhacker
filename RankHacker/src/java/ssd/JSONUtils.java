/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.net.*;
import java.io.*;
import org.json.*;

/**
 *
 * @author Hari
 */
public class JSONUtils
{
    private static final String charset = Config.systemCharset();
    
    public static String readURL(String urlString)
    {
        BufferedReader reader = null;
        StringBuilder buffer = new StringBuilder();
        int read;
        char[] chars = new char[1024];
        
        try
        {
            URL url = new URL(urlString);
            reader = new BufferedReader(new InputStreamReader(url.openStream()));
        
            while ((read = reader.read(chars)) != -1)
            {
                buffer.append(chars, 0, read);
            }
            reader.close();
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return buffer.toString();
    }
    
    public static String buildJSON(String[][] params)
    {
        String output = "";
        
        JSONObject obj = new JSONObject();
        StringWriter out = new StringWriter();
        
        try
        {
            for(int i=0; i<params.length; i++)
            {
                obj.put(params[i][0],params[i][1]);
            }
            obj.write(out);
            output = out.toString();
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return output;
    }
    
    public static String excutePost(String targetURL, byte[] jsonData)
    {
        URL url = null;
        HttpURLConnection conn = null;
        StringBuilder buffer = new StringBuilder();
        int c;
        char[] chars = new char[1024];
        
        try
        {            
            url = new URL(targetURL);
            conn = (HttpURLConnection)url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Content-Length", String.valueOf(jsonData.length));
            conn.setDoOutput(true);
            conn.getOutputStream().write(jsonData);
            
            Reader reader = new BufferedReader(new InputStreamReader(conn.getInputStream(),charset));
            
            while ((c = reader.read(chars)) != -1)
            {
                buffer.append(chars, 0, c);
            }
            reader.close();
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }

        return buffer.toString();
    }
}
