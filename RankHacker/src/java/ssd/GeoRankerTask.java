/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

/**
 *
 * @author Hari
 */
public class GeoRankerTask extends Thread
{
    private String StaskName = null;
    
    public GeoRankerTask(String task)
    {
        super();
        StaskName = task;
    }

    public void run()
    {
        Runtime r = Runtime.getRuntime();

        if(StaskName.equals(""))
        {
            try
            {
                
            }
            catch(Exception ex)
            {
                Logging.logError(ex);
            }
        }
    }
}
