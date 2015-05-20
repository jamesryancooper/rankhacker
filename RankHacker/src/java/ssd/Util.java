/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ssd;

import java.text.*;
import java.util.*;
import java.sql.*;

/**
 *
 * @author Hari Patel
 */
public class Util
{
    public static SimpleDateFormat sqlDateFormat = new SimpleDateFormat("yyyy-MM-dd", Locale.US);
    public static SimpleDateFormat msDateFormat = new SimpleDateFormat("M/d/yyyy", Locale.US);
    public static SimpleDateFormat fileDateFormat = new SimpleDateFormat("yyyyMMdd", Locale.US);
    public static SimpleDateFormat shortDateFormat = new SimpleDateFormat("MMM-yy", Locale.US);
    public static SimpleDateFormat fullDateFormat = new SimpleDateFormat("MMMM d, yyyy", Locale.US);
    public static SimpleDateFormat yearFormat = new SimpleDateFormat("yyyy", Locale.US);
    public static SimpleDateFormat monthFormat = new SimpleDateFormat("M", Locale.US);
    public static SimpleDateFormat twoDigitMonthFormat = new SimpleDateFormat("MM", Locale.US);
    public static SimpleDateFormat dayFormat = new SimpleDateFormat("d", Locale.US);
    public static SimpleDateFormat contractDateFormat = new SimpleDateFormat("MMM-yy", Locale.US);
    
    public static SimpleDateFormat hourFormat = new SimpleDateFormat("H", Locale.US);
    public static SimpleDateFormat minuteFormat = new SimpleDateFormat("m", Locale.US);
    public static SimpleDateFormat hourMinuteFormat = new SimpleDateFormat("H:m", Locale.US);
    public static SimpleDateFormat hourMinuteSecondFormat = new SimpleDateFormat("HH:m:ss", Locale.US);
    public static SimpleDateFormat sqlTimestampFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.US);
    public static SimpleDateFormat msTimestampFormat = new SimpleDateFormat("M/d/yyyy HH:mm:ss", Locale.US);
    public static SimpleDateFormat stringTimestampFormat = new SimpleDateFormat("M/d/yyyy HH:mm:ss", Locale.US);
    public static SimpleDateFormat fileTimestampFormat = new SimpleDateFormat("yyyyMMddHHmmss", Locale.US);

    public static DecimalFormat decimalQuantityFormat = new DecimalFormat("#,##0.00;(-#,##0.00)");
    public static DecimalFormat extraDecimalQuantityFormat = new DecimalFormat("#,##0.0000");
    public static DecimalFormat dollarFormat = new DecimalFormat("$#,##0.00;($#,##0.00)");
    public static DecimalFormat wholeDollarFormat = new DecimalFormat("$#,##0;($#,##0)");
    public static DecimalFormat roundedQuantityFormat = new DecimalFormat("#,##0;(-#,##0)");
    public static DecimalFormat percentFormat = new DecimalFormat("0.00%;(0.00%)");
    public static DecimalFormat wholePercentFormat = new DecimalFormat("0%");

    public static int getDaysInMonth(java.util.Date d)
    {
        int numDays = 0;

        java.util.Calendar c = new GregorianCalendar(Integer.parseInt(Util.yearFormat.format(d)),Integer.parseInt(Util.monthFormat.format(d))-1,1);
        numDays = c.getActualMaximum(Calendar.DAY_OF_MONTH);

        return numDays;
    }

    public static String[] getDatesInRange(String[] startDates, boolean daily)
    {
        String[] dates = new String[10000];
        java.util.Calendar sCal = Calendar.getInstance(Locale.US);
        java.util.Calendar eCal = Calendar.getInstance(Locale.US);
        java.util.Calendar c = Calendar.getInstance(Locale.US);
        java.util.Date start = null;
        java.util.Date end = null;
        int dayDiff = 0;
        int arrayCounter = 0;

        try
        {
            if(daily)
            {
                for(int d=0; d<startDates.length; d++)
                {
                    start = Util.sqlDateFormat.parse(startDates[d]);
                    dayDiff = Util.getDaysInMonth(start);

                    for(int i=0; i<dayDiff; i++)
                    {
                        c.setTime(start);
                        c.add(Calendar.DATE, i);
                        dates[arrayCounter] = Util.sqlDateFormat.format(c.getTime());
                        arrayCounter++;
                    }
                }
            }
            else
            {
                start = Util.sqlDateFormat.parse(startDates[0]);
                end = Util.sqlDateFormat.parse(startDates[(startDates.length - 1)]);
                sCal.setTime(start);
                eCal.setTime(end);
                dayDiff = (int)((eCal.getTimeInMillis() - sCal.getTimeInMillis()) / (1000*60*60*24));
                for(int i=0; i<=Math.ceil((double)(dayDiff / 30D)); i++)
                {
                    c.setTime(start);
                    c.add(Calendar.MONTH, i);
                    dates[arrayCounter] = Util.sqlDateFormat.format(c.getTime());
                    arrayCounter++;
                }
            }
            dates = Util.resizeArray(dates, arrayCounter);
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return dates;
    }

    public static String getFirstOfQuarter(String obsDate)
    {
        String foq = "1900-01-01";
        
        try
        {
            java.util.Date queryDate = Util.sqlDateFormat.parse(obsDate);
            java.util.Calendar c = Calendar.getInstance(Locale.US);
            c.setTime(queryDate);
            int queryMonth = c.get(Calendar.MONTH) + 1;
            int quarterMonth = 0;

            if(queryMonth <= 3)
            {
                quarterMonth = 1;
            }
            else if(queryMonth <= 6)
            {
                quarterMonth = 4;
            }
            else if(queryMonth <= 9)
            {
                quarterMonth = 7;
            }
            else
            {
                quarterMonth = 10;
            }

            c.set(Calendar.MONTH, quarterMonth-1);
            c.set(Calendar.DAY_OF_MONTH, 1);

            foq = Util.sqlDateFormat.format(c.getTime());
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }

        return foq;
    }

    public static int getArrayLoc(int[] targetArray, int searchValue)
    {
        int arrayLoc = -1;

        for(int i=0; i<targetArray.length; i++)
        {
            if(targetArray[i] == searchValue)
            {
                arrayLoc = i;
                break;
            }
        }

        return arrayLoc;
    }

    public static int getArrayLoc(String[] targetArray, String searchValue)
    {
        int arrayLoc = -1;

        for(int i=0; i<targetArray.length; i++)
        {
            if(targetArray[i].toUpperCase().equals(searchValue.toUpperCase()))
            {
                arrayLoc = i;
            }
        }

        return arrayLoc;
    }

    public static double[] resizeArray(double[] oldArray, int newSize)
    {
        int oldSize = oldArray.length;
        int preserveLength = Math.min(oldSize, newSize);
        Class elementType = oldArray.getClass().getComponentType();
        Object newArray = java.lang.reflect.Array.newInstance(elementType, newSize);
        if(preserveLength > 0)
        {
            System.arraycopy(oldArray, 0, newArray, 0, preserveLength);
        }

        return (double[]) newArray;
    }

    public static String[] resizeArray(String[] oldArray, int newSize)
    {
        int oldSize = oldArray.length;
        int preserveLength = Math.min(oldSize, newSize);
        Class elementType = oldArray.getClass().getComponentType();
        Object newArray = java.lang.reflect.Array.newInstance(elementType, newSize);
        if(preserveLength > 0)
        {
            System.arraycopy(oldArray, 0, newArray, 0, preserveLength);
        }

        return (String[]) newArray;
    }

    public static int[] resizeArray(int[] oldArray, int newSize)
    {
        int oldSize = oldArray.length;
        int preserveLength = Math.min(oldSize, newSize);
        Class elementType = oldArray.getClass().getComponentType();
        Object newArray = java.lang.reflect.Array.newInstance(elementType, newSize);
        if(preserveLength > 0)
        {
            System.arraycopy(oldArray, 0, newArray, 0, preserveLength);
        }

        return (int[]) newArray;
    }

    public static float[] resizeArray(float[] oldArray, int newSize)
    {
        int oldSize = oldArray.length;
        int preserveLength = Math.min(oldSize, newSize);
        Class elementType = oldArray.getClass().getComponentType();
        Object newArray = java.lang.reflect.Array.newInstance(elementType, newSize);
        if(preserveLength > 0)
        {
            System.arraycopy(oldArray, 0, newArray, 0, preserveLength);
        }

        return (float[]) newArray;
    }

    public static int countInstances(String destString, final String substring)
    {
       int count = 0;
       int idx = 0;

       while ((idx = destString.indexOf(substring, idx)) != -1)
       {
          idx++;
          count++;
       }

       return count;
    }

    public static float round(float input, int num)
    {
        float output = 0;

        double scalar = Math.pow(10, num);
        output = (float)(Math.round(input * scalar) / scalar);

        return output;
    }
    
    public static String addSlashes(String input)
    {
        String output = input.replace("'","''");
        
        return output;
    }
    
    public static String getMSDateFromSQL(String input)
    {
        String output = "";
        try {
            output = Util.msDateFormat.format(Util.sqlDateFormat.parse(input));
        }
        catch(Exception ex) {
            Logging.logError(ex);
        }
        return output;
    }
    
    public static String getSQLDateFromMS(String input)
    {
        String output = "";
        try {
            output = Util.sqlDateFormat.format(Util.msDateFormat.parse(input));
        }
        catch(Exception ex) {
            Logging.logError(ex);
        }
        return output;
    }
    
    public static String genRandomString(boolean includeNumbers, boolean mixedCase, int stringLength)
    {
        String output = "";
        
        if(includeNumbers && mixedCase)
        {
            String[] sourceArray = {"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z","2","3","4","5","6","7","8","9"};
            int randLoc = 0;
            Random r = new Random();
            for(int i=0; i<stringLength; i++)
            {
                randLoc = r.nextInt(sourceArray.length);
                output += sourceArray[randLoc];
            }
        }
        else if(includeNumbers)
        {
            String[] sourceArray = {"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","2","3","4","5","6","7","8","9"};
            int randLoc = 0;
            Random r = new Random();
            for(int i=0; i<stringLength; i++)
            {
                randLoc = r.nextInt(sourceArray.length);
                output += sourceArray[randLoc];
            }
        }
        else
        {
            String[] sourceArray = {"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"};
            int randLoc = 0;
            Random r = new Random();
            for(int i=0; i<stringLength; i++)
            {
                randLoc = r.nextInt(sourceArray.length);
                output += sourceArray[randLoc];
            }
        }
        
        return output;
    }
    
    public static String getEmailDisclaimerText()
    {
        return "<div style='font-size:11px;'>This email has been generated from a delivery-only address. Please do not reply directly to this email; if you have any questions regarding the content of this message, please contact SSD Fair Marketing at (888) 736-2384, or info@fairmarketing.com.</div>";
    }
    
    public static int getResultSetSize(ResultSet resultSet)
    {
        int numRows = 0;
        
        if (resultSet == null)
        {
            numRows = 0;
        }
        try
        {
            resultSet.last();
            numRows = resultSet.getRow();
            resultSet.beforeFirst();
        }
        catch (Exception ex)
        {
            Logging.logError(ex);
        }
        
        return numRows;
    }
    
    public static int getArrayLocLike(String[] targetArray, String searchValue)
    {
        int arrayLoc = -1;
        
        for(int i=0; i<targetArray.length; i++)
        {
            if(targetArray[i].toUpperCase().contains(searchValue.toUpperCase()))
            {
                arrayLoc = i;
            }
        }

        return arrayLoc;
    }
    
    public static int getArrayLocSearch(String[] targetArray, String searchValue)
    {
        int arrayLoc = -1;
        
        for(int i=0; i<targetArray.length; i++)
        {            
            if(targetArray[i].toUpperCase().equals(searchValue.toUpperCase()))
            {
                arrayLoc = i;
            }
        }

        return arrayLoc;
    }
    
    public static int getArrayLocPartialSearch(String[] targetArray, String searchValue)
    {
        int arrayLoc = -1;
        
        for(int i=0; i<targetArray.length; i++)
        {
            if(searchValue.toUpperCase().contains(targetArray[i].toUpperCase()))
            {
                arrayLoc = i;
            }
        }

        return arrayLoc;
    }
    
    public static int getAtomizedArrayLocPartialSearch(String[] targetArray, String searchValue)
    {
        int arrayLoc = -1;
        String[] targetWords;
        
        for(int i=0; i<targetArray.length; i++)
        {
            targetWords = targetArray[i].split(" ");
            for(int j=0; j<targetWords.length; j++)
            {
                if(searchValue.toUpperCase().equals(targetWords[j].toUpperCase()))
                {
                    arrayLoc = i;
                }
            }
        }

        return arrayLoc;
    }
    
    public static String cleanPunctuation(String data)
    {
        try
        {
            data = data.replaceAll("[\\p{P}\\p{S}]", "");
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return data;
    }
}
