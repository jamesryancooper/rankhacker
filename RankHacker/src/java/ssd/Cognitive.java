/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.net.*;
import java.io.*;
import java.util.*;
import org.json.*;
import java.sql.*;
/**
 *
 * @author Hari
 */
public class Cognitive
{
    private static final String targetURL = Config.cognitiveHost();
    private static final String apiKey = Config.cognitiveKey();
    private static final String charset = Config.systemCharset();
    
    public static String[] startNewCampaign(long projectID, long linkID, String analyzeURL)
    {
        String[] returnData = new String[2];
        //0 = campaignID
        //1 = siteID
        
        try
        {
            String command = "postCampaign";
            String campaignName = URLEncoder.encode("Project_"+projectID+"_Link_"+linkID,charset);
            analyzeURL = URLEncoder.encode(analyzeURL,charset);
        
            String query = "apiKey="+apiKey+"&command="+command+"&campaignName="+campaignName+"&nrsites=1&site1="+analyzeURL+"&site1Type=url&campaignType=onetime";
        
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            //System.out.println(j.toString());
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                Object v = j.get(k);
                
                if(v.toString().contains("data"))
                {
                    JSONObject j2 = new JSONObject(v.toString());
                    Iterator<?> keys2 = j2.keys();
                    while(keys2.hasNext())
                    {
                        String k2 = (String)keys2.next();
                        Object v2 = j2.get(k2);
                        //System.out.println(k2 + " : " + v2.toString());
                        
                        if(k2.equals("data"))
                        {
                            JSONObject j3 = new JSONObject(v2.toString());
                            returnData[0] = j3.getString("campaignId");
                            returnData[1] = Integer.toString(j3.getInt("site1Id"));
                            
                            Cognitive.saveCampaignInfo(projectID, linkID, returnData[0], returnData[1]);
                            //System.out.println("campaignID : " + j3.getString("campaignId"));
                            //System.out.println("siteID : " + j3.getInt("site1Id"));
                        }
                    }
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return returnData;
    }
    
    public static void beginPostLinksImport(long projectID, String campaignID, String siteID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        try
        {
            stmt = conn.createStatement();
            String command = "beginPostLinksImport";
        
            String query = "apiKey="+apiKey+"&command="+command+"&campaignId="+campaignID+"&siteId="+siteID;
        
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            System.out.println(j.toString());
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                Object v = j.get(k);
                
                if(v.toString().contains("data"))
                {
                    JSONObject j2 = new JSONObject(v.toString());
                    Iterator<?> keys2 = j2.keys();
                    while(keys2.hasNext())
                    {
                        String k2 = (String)keys2.next();
                        Object v2 = j2.get(k2);
                        //System.out.println(k2 + " : " + v2.toString());
                        
                        if(k2.equals("data"))
                        {
                            //Can eventually save the results if needed
                            /*JSONObject j3 = new JSONObject(v2.toString());
                            returnData[0] = j3.getString("campaignId");
                            returnData[1] = Integer.toString(j3.getInt("site1Id"));*/
                        }
                    }
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void commitPostLinksImport(long projectID, String campaignID, String siteID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        try
        {
            stmt = conn.createStatement();
            String command = "commitPostLinksImport";
        
            String query = "apiKey="+apiKey+"&command="+command+"&campaignId="+campaignID+"&siteId="+siteID;
        
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            System.out.println(j.toString());
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                Object v = j.get(k);
                
                if(v.toString().contains("data"))
                {
                    JSONObject j2 = new JSONObject(v.toString());
                    Iterator<?> keys2 = j2.keys();
                    while(keys2.hasNext())
                    {
                        String k2 = (String)keys2.next();
                        Object v2 = j2.get(k2);
                        //System.out.println(k2 + " : " + v2.toString());
                        
                        if(k2.equals("data"))
                        {
                            //Can eventually save the results if needed
                            /*JSONObject j3 = new JSONObject(v2.toString());
                            returnData[0] = j3.getString("campaignId");
                            returnData[1] = Integer.toString(j3.getInt("site1Id"));*/
                        }
                    }
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void postLinksImport(long projectID, String campaignID, String siteID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        
        try
        {
            stmt = conn.createStatement();
            String command = "postLinksImport";
            
            //Get the links and build the array to iterate through
            String dbQuery = "select * from ahrefsresults where projectid="+projectID;
            String postString = "";
            int linkCounter = 1;
            
            rs = stmt.executeQuery(dbQuery);
            while(rs.next())
            {
                postString += "&link"+linkCounter+"="+rs.getString("url_from");
                linkCounter++;
            }
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
            
            /** Override postString with fixed values for testing **/
            linkCounter = 3;
            postString = "&link1=http://www.pressreleaserocket.net&link2=http://www.lesgourmandisesdechristelle.com&link3=http://www.statsurf.net";
            
            String query = "apiKey="+apiKey+"&command="+command+"&campaignId="+campaignID+"&siteId="+siteID+"&nrLinks="+linkCounter+postString;
        
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            System.out.println(j.toString());
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                Object v = j.get(k);
                
                if(v.toString().contains("data"))
                {
                    JSONObject j2 = new JSONObject(v.toString());
                    Iterator<?> keys2 = j2.keys();
                    while(keys2.hasNext())
                    {
                        String k2 = (String)keys2.next();
                        Object v2 = j2.get(k2);
                        
                        if(k2.equals("data"))
                        {
                            //Can eventually save the results if needed
                            /*JSONObject j3 = new JSONObject(v2.toString());
                            returnData[0] = j3.getString("campaignId");
                            returnData[1] = Integer.toString(j3.getInt("site1Id"));*/
                        }
                    }
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void processCampaignLinks(long projectID, long linkID, String campaignID, String siteID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        String[] jsonKeys = Cognitive.getMetricsArray();
        String importQuery = "insert into cognitiveresults(projectid,linkid,createdatetime,fromUrl,toUrl,fromUrlSubdomain,fromUrlDomain,toUrlSubdomain,toUrlDomain,fromUrlRedirect,fromUrlHttpCode,fromUrlPagesize,fromUrlHtmlTitle,fromUrlWebpagetype,fromUrlWebpageCategory,fromUrlWebpageLanguage,fromUrlCitationFlow,fromUrlTrustFlow,fromUrlDeeplink,toUrlDeeplink,fromUrlLinkAuthority,fromUrlOutboundlinksInternal,fromUrlOutboundlinksExternal,fromUrlOutboundlinksInternalDofollow,fromUrlOutboundlinksInternalNofollow,fromUrlOutboundlinksExternalDofollow,fromUrlOutboundlinksExternalNofollow,fromUrlBacklinks,fromUrlNumberOfReferringDomains,fromDomainTld,fromDomainCitationFlow,fromDomainTrustFlow,fromDomainAuthority,fromDomainHostingCountry,fromDomainIp,importedLink,status,linkType,anchorText,anchorTextType,imageAlt,linkTitle,linkTarget,linkNofollow,linkInContent,linkInListOfLinks,linkPositioning,linkVisibility,isSitewide,linkIgnored,linkDissavowed,linkNaturalness,tags,cognitiveseoDate,credits,time)" + 
                            " values";
        
        try
        {
            stmt = conn.createStatement();
            
            String command = "getCampaignLinks";
            String query = "apiKey="+apiKey+"&command="+command+"&campaignId="+campaignID+"&siteId="+siteID+"&limit=50";
        
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            
            //System.out.println(j);
            
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                Object v = j.get(k);
                
                if(v.toString().contains("data"))
                {
                    JSONObject j2 = new JSONObject(v.toString());
                    Iterator<?> keys2 = j2.keys();
                    while(keys2.hasNext())
                    {
                        String k2 = (String)keys2.next();
                        Object v2 = j2.get(k2);
                        
                        if(k2.equals("data"))
                        {
                            //Check to make sure there's data, otherwise skip it
                            if(v2.toString() != null)
                            {
                                try
                                {
                                    JSONObject j3 = new JSONObject(v2.toString());
                                    Iterator<?> keys3 = j3.keys();
                                    int linkCounter = 0;
                                    while(keys3.hasNext())
                                    {
                                        String cogLinkID = (String)keys3.next();
                                        String linkData = j3.getJSONObject(cogLinkID).toString();

                                        JSONObject j4 = new JSONObject(linkData);

                                        String importStubString = "";
                                        String val = "";
                                        for(int arrayCounter = 0; arrayCounter <jsonKeys.length; arrayCounter++)
                                        {
                                            try
                                            {
                                                val = j4.get(jsonKeys[arrayCounter]).toString();
                                            }
                                            catch(org.json.JSONException jex)
                                            {
                                                val = "NULL";
                                            }

                                            if(arrayCounter==7 || arrayCounter==8 || arrayCounter==18 || arrayCounter==19 || arrayCounter==20 || arrayCounter==21 || arrayCounter==22 || arrayCounter==23 || arrayCounter==24 || arrayCounter==25 || arrayCounter==27 || arrayCounter==51 || arrayCounter==52  || val.equals("NULL"))
                                            {
                                                //Not strings
                                            }
                                            else
                                            {
                                                val = "'"+Util.addSlashes(val)+"'";
                                            }

                                            if(arrayCounter == 0)
                                            {
                                                importStubString = "("+projectID+","+linkID+",getdate(),"+val;
                                            }
                                            else
                                            {
                                                importStubString += ","+val;
                                            }
                                        }
                                        importStubString += ")";

                                        if(linkCounter == 0)
                                        {
                                            importQuery += importStubString;
                                        }
                                        else
                                        {
                                            importQuery += ","+importStubString;
                                        }
                                        linkCounter++;
                                    }

                                    stmt.execute(importQuery);
                                }
                                catch(Exception ex)
                                {
                                    //Skip it
                                }
                            }
                        }
                    }
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static void saveCampaignInfo(long projectID, long linkID, String campaignID, String siteID)
    {
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        
        try
        {
            String query = "insert into cognitivecampaigns(projectid,linkid,createdatetime,campaignid,siteid) values("+projectID+","+linkID+",getdate(),'"+campaignID+"','"+siteID+"')";
            stmt = conn.createStatement();
            stmt.execute(query);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
    }
    
    public static String[] getMetricsArray()
    {
        String[] jsonKeys = {"fromUrl","toUrl","fromUrlSubdomain","fromUrlDomain","toUrlSubdomain","toUrlDomain","fromUrlRedirect","fromUrlHttpCode","fromUrlPagesize","fromUrlHtmlTitle","fromUrlWebpagetype","fromUrlWebpageCategory","fromUrlWebpageLanguage","fromUrlCitationFlow","fromUrlTrustFlow","fromUrlDeeplink","toUrlDeeplink","fromUrlLinkAuthority","fromUrlOutboundlinksInternal","fromUrlOutboundlinksExternal","fromUrlOutboundlinksInternalDofollow","fromUrlOutboundlinksInternalNofollow","fromUrlOutboundlinksExternalDofollow","fromUrlOutboundlinksExternalNofollow","fromUrlBacklinks","fromUrlNumberOfReferringDomains","fromDomainTld","fromDomainCitationFlow","fromDomainTrustFlow","fromDomainAuthority","fromDomainHostingCountry","fromDomainIp","importedLink","status","linkType","anchorText","anchorTextType","imageAlt","linkTitle","linkTarget","linkNofollow","linkInContent","linkInListOfLinks","linkPositioning","linkVisibility","isSitewide","linkIgnored","linkDissavowed","linkNaturalness","tags","cognitiveseoDate","credits","time"};
        return jsonKeys;
    }
    
    public static String[][] getMetricDescriptions()
    {
        String[][] descriptions = new String[150][2];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        String query = "select * from cognitivemetricinfo";
        
        int i = 0;
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                descriptions[i][0] = rs.getString("metric");
                descriptions[i][1] = rs.getString("description");
                i++;
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return descriptions;
    }
    
    public static boolean checkReportReady(String campaignID)
    {
        boolean ready = false;
        try
        {
            String command = "getCampaignStatus";
            String query = "apiKey="+apiKey+"&command="+command+"&campaignId="+campaignID;
        
            JSONObject j = new JSONObject(JSONUtils.readURL(targetURL+query));
            
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                Object v = j.get(k);
                
                if(v.toString().contains("data"))
                {
                    JSONObject j2 = new JSONObject(v.toString());
                    Iterator<?> keys2 = j2.keys();
                    while(keys2.hasNext())
                    {
                        String k2 = (String)keys2.next();
                        Object v2 = j2.get(k2);
                        
                        if(k2.equals("data"))
                        {
                            //Check to make sure there's data, otherwise skip it
                            if(v2.toString() != null)
                            {
                                try
                                {
                                    JSONObject j3 = new JSONObject(v2.toString());
                                    Iterator<?> keys3 = j3.keys();
                                    while(keys3.hasNext())
                                    {
                                        String k3 = (String)keys3.next();
                                        Object v3 = j3.get(k3);
                                        
                                        JSONObject j4 = new JSONObject(v3.toString());
                                        Iterator<?> keys4 = j4.keys();
                                        while(keys4.hasNext())
                                        {
                                            //String k4 = (String)keys4.next();
                                            //Object v4 = j4.get(k4);
                                            
                                            String campaignStatus = j4.getString("progress");
                                            if(campaignStatus != null)
                                            {
                                                if(campaignStatus.equalsIgnoreCase("finished"))
                                                {
                                                    ready = true;
                                                }
                                            }
                                        }
                                    }
                                }
                                catch(Exception ex)
                                {
                                    //Skip it
                                }
                            }
                        }
                    }
                }
            }
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return ready;
    }
}
