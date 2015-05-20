/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.util.*;

/**
 *
 * @author Hari
 */
public class Stopwatch
{
    private double startTime = 0d;
    private double endTime = 0d;
    
    public void start()
    {
        Calendar c = Calendar.getInstance(Locale.US);
        startTime = c.getTimeInMillis();
    }
    
    public void stop()
    {
        Calendar c = Calendar.getInstance(Locale.US);
        endTime = c.getTimeInMillis();
    }
    
    public void reset()
    {
        startTime = 0;
        endTime = 0;
    }
    
    public double getElapsedTime()
    {
        double elapsed = endTime - startTime;
        return elapsed;
    }
}
