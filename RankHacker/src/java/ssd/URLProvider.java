/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.net.*;
import java.util.*;

/**
 *
 * @author Hari
 */
public class URLProvider
{
    private static final String charset = Config.systemCharset();
    
    public static String encodeParams(String[][] keyValuePairs)
    {
        String output = "";
        
        try
        {
            for(int i=0; i<keyValuePairs.length; i++)
            {
                if(output.equals(""))
                {
                    output = URLEncoder.encode(keyValuePairs[i][0],charset) + "=" + URLEncoder.encode(keyValuePairs[i][1],charset);
                }
                else
                {
                    output += "&" + URLEncoder.encode(keyValuePairs[i][0],charset) + "=" + URLEncoder.encode(keyValuePairs[i][1],charset);
                }
                
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return output;
    }
    
    public static String buildParamString(Map<String,String> data)
    {
        StringBuilder s = new StringBuilder();
        
        try
        {
            for(Map.Entry<String,String> dataElement : data.entrySet())
            {
                if(s.length() != 0)
                {
                    s.append('&');
                }
                s.append(URLEncoder.encode(dataElement.getKey(),charset));
                s.append('=');
                s.append(URLEncoder.encode(String.valueOf(dataElement.getValue()),charset));
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return s.toString();
    }
}
