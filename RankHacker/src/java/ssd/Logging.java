/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ssd;

import java.io.*;

/**
 *
 * @author Hari Patel
 */
public class Logging
{

  public static void logError(Exception ex)
  {
      String msgText = ex.getMessage();
      if(msgText != null)
      {
            Logging.writeToFile(ex.getMessage());
            StackTraceElement[] errTrace = ex.getStackTrace();
            for(int k=0; k<errTrace.length; k++)
            {
                Logging.writeToFile("     " + errTrace[k].toString());
            }
      }
  }
  
  public static void debug(String msgText)
  {
      if(msgText != null)
      {
            Logging.writeToFile(msgText);
      }
  }

  public static void writeToFile(String errText)
  {
      try
      {
          String timestamp = new java.util.Date().toString();
          FileWriter fstream = new FileWriter(Config.tempFileLocation() + "err_log_linkrocket.txt", true);
          BufferedWriter bw = new BufferedWriter(fstream);
          bw.newLine();
          bw.write(timestamp + " - " + errText);
          bw.close();
      }
      catch(Exception exc)
      {
          exc.printStackTrace();
      }
  }
}
