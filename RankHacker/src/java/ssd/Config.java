/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package ssd;

/**
 *
 * @author Hari Patel
 */
public class Config
{
    public static String contextRoot()
    {
       return "http://localhost:8084/LinkRocket";
       //return "http://fairmarketing.cloudapp.net/LinkRocket";
    }
    
    public static String tempFileLocation()
    {
        return "c:\\tmp\\";
    }
    
    public static String mailHost()
    {
        return "";
    }
    
    public static int mailPort()
    {
        return 25;
    }
    
    public static String mailUsername()
    {
        return "";
    }
    
    public static String mailPassword()
    {
        return "";
    }
    
    public static String mailAccount()
    {
        return "";
    }
    
    public static String sqlServerConnectionString()
    {
        return "jdbc:sqlserver://qcn39ivqfk.database.windows.net:1433;database=LinkRocket;user=ssd@qcn39ivqfk;password=xg5i0$ns9r;encrypt=true;hostNameInCertificate=southcentralus1-a.control.database.windows.net;loginTimeout=30;";
    }
    
    public static String sqlServerUsername()
    {
        return "ssd@qcn39ivqfk";
    }

    public static String sqlServerPassword()
    {
        return "xg5i0$ns9r";
    }
    
    public static String geoRankerHost()
    {
        return "https://api.georanker.com/v1/";
    }
    
    public static String geoRankerUsername()
    {
        return "jcooper@fairmarketing.com";
    }
    
    public static String geoRankerKey()
    {
        return "55b2c87b455f46743b3823bd7703832d";
    }
    
    public static String mozHost()
    {
        return "http://lsapi.seomoz.com/linkscape/";
    }
    
    public static String mozAccessID()
    {
        return "member-94e89bf8ff";
    }
    
    public static String mozSecretKey()
    {
        return "9cdafcc62d561660e84d9a95fd131819";
    }
    
    public static String cognitiveHost()
    {
        return "http://api.cognitiveseo.com/command.php?";
    }
    
    public static String cognitiveKey()
    {
        return "539f7b135b";
    }
    
    public static String systemCharset()
    {
        return java.nio.charset.StandardCharsets.UTF_8.name();
    }
    
    public static String ahrefsHost()
    {
        return "http://apiv2.ahrefs.com/?";
    }
    
    public static String ahrefsToken()
    {
        return "148757c1f2504f690ee1dcb90c3cf9e97d32eac4";
    }
    
    public static String majesticHost()
    {
        return "http://developer.majestic.com/";
        //return "http://api.majestic.com/";
    }
    
    public static String majesticAccessToken()
    {
        return "";
    }
    
    public static String majesticPrivateKey()
    {
        return "";
    }
}
