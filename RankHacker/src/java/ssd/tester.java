/*
 * To change this template, choose Tools | Templates
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
 * @author Graphics
 */
public class tester
{
    public static void main(String[] args)
    {
        try
        {
            /*String sessionID = GeoRanker.getSessionID();
            GeoRanker.debugReport(sessionID, "515797");*/
            
            /*Cognitive c = new Cognitive();
            c.beginPostLinksImport(6,"13","12");
            c.postLinksImport(6,"13","12");
            c.commitPostLinksImport(6,"13","12");*/
            
            /*String anchorText = "LED Closet Light​";
            
            int projectID = 9;
            String geoLocation = "Coral Springs";
            
            String[] anchorTextCategories = {"IMAGE","ACTION","EXACT MATCH","BRAND NAME","URL","KEYWORD BRANDED","BRANDED","PHRASE MATCH","PARTIAL MATCH","OTHER"};
            String[] actionTerms = {"click here","read more","click","more","next","prev","previous","submit","learn more","more info","more information","visit website","find out more","visit my website","visit our website","home","home page","homepage","about us","contact","contact us","services","blog","continue","more","website","visit","our website","my website","call","call today","services","sitemap","site map","terms of use","policies","call","call today","contact","privacy policy","privacy policies","terms","photos","galleries","photo gallery","photo galleries","visit","visit site","industry links","links","resources","legal notice","faq","faqs","view website","view","view site","visit link","visit this link","visit","view web site","visit website","visit web site","here","this","contact page"};
            String[] stopTerms = {"a","about","above","across","after","afterwards","again","against","all","almost","alone","along","already","also","although","always","am","among","amongst","amoungst","amount","an","and","another","any","anyhow","anyone","anything","anyway","anywhere","are","around","as","at","back","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","below","beside","besides","between","beyond","bill","both","bottom","but","by","call","can","cannot","cant","co","computer","con","could","couldnt","cry","de","describe","detail","do","done","down","due","during","each","eg","eight","either","eleven","else","elsewhere","empty","enough","etc","even","ever","every","everyone","everything","everywhere","except","few","fifteen","fify","fill","find","fire","first","five","for","former","formerly","forty","found","four","from","front","full","further","get","give","go","had","has","hasnt","have","he","hence","her","here","hereafter","hereby","herein","hereupon","hers","herseâ€","him","himseâ€","his","how","however","hundred","i","ie","if","in","inc","indeed","interest","into","is","it","its","itseâ€","keep","last","latter","latterly","least","less","ltd","made","many","may","me","meanwhile","might","mill","mine","more","moreover","most","mostly","move","much","must","my","myseâ€","name","namely","neither","never","nevertheless","next","nine","no","nobody","none","noone","nor","not","nothing","now","nowhere","of","off","often","on","once","one","only","onto","or","other","others","otherwise","our","ours","ourselves","out","over","own","part","per","perhaps","please","put","rather","re","same","see","seem","seemed","seeming","seems","serious","several","she","should","show","side","since","sincere","six","sixty","so","some","somehow","someone","something","sometime","sometimes","somewhere","still","such","system","take","ten","than","that","the","their","them","themselves","then","thence","there","thereafter","thereby","therefore","therein","thereupon","these","they","thick","thin","third","this","those","though","three","through","throughout","thru","thus","to","together","too","top","toward","towards","twelve","twenty","two","un","under","until","up","upon","us","very","via","was","we","well","were","what","whatever","when","whence","whenever","where","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","whoever","whole","whom","whose","why","will","with","within","without","would","yet","you","your","yours","yourself","yourselves","aren't","can't","couldn't","did","didn't","does","doesn't","doing","don't","hadn't","hasn't","haven't","having","he'd","he'll","he's","here's","herself","himself","how's","i'd","i'll","i'm","i've","isn't","it's","itself","let's","mustn't","myself","ought","oursÂ ","shan't","she'd","she'll","she's","shouldn't","that's","theirs","there's","they'd","they'll","they're","they've","wasn't","we'd","we'll","we're","we've","weren't","what's","when's","where's","who's","why's","won't","wouldn't","you'd","you'll","you're","you've","a's","able","according","accordingly","actually","ain't","allow","allows","anybody","anyways","apart","appear","appreciate","appropriate","aside","ask","asking","associated","available","away","awfully","b","believe","best","better","brief","c","c'mon","c's","came","cause","causes","certain","certainly","changes","clearly","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","course","currently","d","definitely","described","despite","different","downwards","e","edu","entirely","especially","et","everybody","ex","exactly","example","f","far","fifth","followed","following","follows","forth","furthermore","g","gets","getting","given","gives","goes","going","gone","got","gotten","greetings","h","happens","hardly","hello","help","hi","hither","hopefully","howbeit","ignored","immediate","inasmuch","indicate","indicated","indicates","inner","insofar","instead","inward","it'd","it'll","j","just","k","keeps","kept","know","knows","known","l","lately","later","lest","let","like","liked","likely","little","look","looking","looks","m","mainly","maybe","mean","merely","n","nd","near","nearly","necessary","need","needs","new","non","normally","novel","o","obviously","oh","ok","okay","old","ones","outside","overall","p","particular","particularly","placed","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rd","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","saw","say","saying","says","second","secondly","seeing","seen","self","selves","sensible","sent","seriously","seven","shall","somebody","somewhat","soon","sorry","specified","specify","specifying","sub","sup","sure","t","t's","taken","tell","tends","th","thank","thanks","thanx","thats","theres","think","thorough","thoroughly","took","tried","tries","truly","try","trying","twice","u","unfortunately","unless","unlikely","unto","use","used","useful","uses","using","usually","uucp","v","value","various","viz","vs","w","want","wants","way","welcome","went","willing","wish","wonder","x","y","yes","z","zero","abroad","adj","ago","ahead","alongside","amid","amidst","backward","backwards","begin","caption","co.","dare","daren't","directly","eighty","end","ending","evermore","fairly","farther","fewer","forever","forward","half","inc.","inside","likewise","low","lower","make","makes","mayn't","meantime","mightn't","minus","miss","mr","mrs","needn't","neverf","neverless","ninety","nonetheless","no-one","notwithstanding","one's","opposite","oughtn't","past","provided","recent","recently","round","someday","taking","that'll","that've","there'd","there'll","there're","there've","thing","things","thirty","till","underneath","undoing","unlike","upwards","versus","what'll","what've","whichever","whilst","who'd","who'll","whomever"};
            String[] bipTerms = {"APC Battery","Lithonia Battery","Power Sonic Battery","elb06042 lithonia battery 6v 4ah 20hr","Emergency Light Batteries"};
            String[] clientBrandingTerms = {"batteryplex","BatteryPlex","BatteryPlex, Inc."};
            String[] competitorBrandingTerms = {"lithonia","Lithonia Lighting","Acuity Brands Lighting, Inc.","Lithonia Lighting,Acuity Brands Company","Acuity Brands Company","emergencylighting","Emergency Lighting","Emergency Lite Service Center (ELSC)","Emergency Lite Service Center ","ELSC","E.L.S.C.","Emergency Light","EmergencyLighting","Emergency Lite Service Center Inc.","power-sonic","Power-Sonic","PS","Power-Sonic Corp","Power-Sonic Corporation","mouser","Mouser Electronics, Inc","Mouser Electronics","apc","American Power Conversion Corp.","American Power Conversion Corporation","batterymart","BatteryMart","BatteryMart.com","Battery Mart","emergencylightbatteries","Emergency Lighting Battery","Emergency Light Batteries","EmergencyLightBatteries","exitlightco","The Exit Light Company","The Exit Light Co.","The Exit Light Company, Inc"};
            String[] partialTerms = {"Apc","Battery","Lithonia","Power","Sonic","elb06042","6v","4ah","20hr","emergency","light","batteries"};
            String[] urlDomains = {"batteryplex.com","apc.com","batteriesplus.com","batteriesplus.com","batteriesplus.com","batterymart.com","emergencylightbatteries.com","emergencylighting.com","lithonia.com","mouser.com","power-sonic.com"};
            
            String classification = "";
            classification = AnchorText.getAnchorTextClassification(anchorText, geoLocation, anchorTextCategories, actionTerms, stopTerms, bipTerms, clientBrandingTerms, competitorBrandingTerms, partialTerms, urlDomains);
            System.out.println("ANSWER: "+classification);*/
            
            //String link = URLEncoder.encode("http://www.ahrefs.com",Config.systemCharset());
            //System.out.println(link);
            //Ahrefs.processBacklinks(8, 66, "http://www.lampsplus.com/products/fountains/usage_indoor/");
            
            
            /*String projectID = "9";
            String linkID = "145";
            
            String[] jsonKeys = Ahrefs.getMetricsArray();
            String importQuery = "insert into ahrefsresults(projectid,linkid,createdatetime,url_from,url_to,ahrefs_rank,domain_rating,ip_from,links_internal,links_external,page_size,encoding,title,first_seen,last_visited,prev_visited,sitewide,original,link_type,redirect,nofollow,alt,anchor,text_pre,text_post)" + 
                            " values";
            
            String jsonText = "";
            StringBuilder buffer = new StringBuilder();
            int c;
            char[] chars = new char[1024];
            File file = new File("c:/tmp/json_test_ahrefs_backlinks.txt");
            FileInputStream fis = new FileInputStream(file);
            
            while ((c = fis.read()) != -1)
            {
                buffer.append((char)c);
            }
            fis.close();
            jsonText = buffer.toString();
            
            
            JSONObject j = new JSONObject(jsonText);
            Iterator<?> keys = j.keys();
            while(keys.hasNext())
            {
                String k = (String)keys.next();
                //System.out.println(k);
                //String v = j.get(k).toString();
                //System.out.println(v);
                if(k.equalsIgnoreCase("REFPAGES"))
                {
                    JSONArray links = j.getJSONArray(k);
                    
                    for(int linkCounter=0; linkCounter<links.length(); linkCounter++)
                    {
                        String importStubString = "";
                        String val = "";
                        JSONObject data = links.getJSONObject(linkCounter);
                        
                        for(int arrayCounter = 0; arrayCounter <jsonKeys.length; arrayCounter++)
                        {
                            try
                            {
                                val = data.get(jsonKeys[arrayCounter]).toString();
                            }
                            catch(org.json.JSONException jex)
                            {
                                val = "NULL";
                            }

                            if(arrayCounter==2 || arrayCounter==3 || arrayCounter==5 || arrayCounter==6 || arrayCounter==7 || arrayCounter==16  || val.equals("NULL"))
                            {
                                //No strings
                            }
                            else if(arrayCounter==10 || arrayCounter==11 || arrayCounter==12)
                            {
                                //Datetime -- need to remove the Zulu designation for t-sql compatibility
                                val = val.replaceAll("Z","");
                                val = "'"+val+"'";
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
                    }

                    System.out.println(importQuery);
                }
            }*/
            
            /*boolean ready = false;
            
            String jsonText = "";
            StringBuilder buffer = new StringBuilder();
            int c;
            char[] chars = new char[1024];
            File file = new File("c:/tmp/json_test_cognitive_campaignstatus.txt");
            FileInputStream fis = new FileInputStream(file);
            
            while ((c = fis.read()) != -1)
            {
                buffer.append((char)c);
            }
            fis.close();
            jsonText = buffer.toString();
            
            JSONObject j = new JSONObject(jsonText);
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
                                            String k4 = (String)keys4.next();
                                            Object v4 = j4.get(k4);
                                            
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
            System.out.println(ready);*/
            
            /*double timeElapsed = 0;
            Stopwatch s = new Stopwatch();
            s.start();
            Thread.sleep(1234);
            s.stop();
            timeElapsed = s.getElapsedTime();
            System.out.println(timeElapsed);*/
            
            
            //String[] data = Cognitive.startNewCampaign(4L,20L,"http://www.hayneedle.com/outdoor/fountains_indoor_list_187128_4295156012");
            //Cognitive.processCampaignLinks(6L,31L,"13","12");
            
            /*long projectID = 3;
            String[] jsonKeys = {"fromUrl","toUrl","fromUrlSubdomain","fromUrlDomain","toUrlSubdomain","toUrlDomain","fromUrlRedirect","fromUrlHttpCode","fromUrlPagesize","fromUrlHtmlTitle","fromUrlWebpagetype","fromUrlWebpageCategory","fromUrlWebpageLanguage","fromUrlCitationFlow","fromUrlTrustFlow","fromUrlDeeplink","toUrlDeeplink","fromUrlLinkAuthority","fromUrlOutboundlinksInternal","fromUrlOutboundlinksExternal","fromUrlOutboundlinksInternalDofollow","fromUrlOutboundlinksInternalNofollow","fromUrlOutboundlinksExternalDofollow","fromUrlOutboundlinksExternalNofollow","fromUrlBacklinks","fromUrlNumberOfReferringDomains","fromDomainTld","fromDomainCitationFlow","fromDomainTrustFlow","fromDomainAuthority","fromDomainHostingCountry","fromDomainIp","importedLink","status","linkType","anchorText","anchorTextType","imageAlt","linkTitle","linkTarget","linkNofollow","linkInContent","linkInListOfLinks","linkPositioning","linkVisibility","isSitewide","linkIgnored","linkDissavowed","linkNaturalness","tags","cognitiveseoDate","credits","time"};
            String importQuery = "insert into cognitiveresults(projectid,createdatetime,fromUrl,toUrl,fromUrlSubdomain,fromUrlDomain,toUrlSubdomain,toUrlDomain,fromUrlRedirect,fromUrlHttpCode,fromUrlPagesize,fromUrlHtmlTitle,fromUrlWebpagetype,fromUrlWebpageCategory,fromUrlWebpageLanguage,fromUrlCitationFlow,fromUrlTrustFlow,fromUrlDeeplink,toUrlDeeplink,fromUrlLinkAuthority,fromUrlOutboundlinksInternal,fromUrlOutboundlinksExternal,fromUrlOutboundlinksInternalDofollow,fromUrlOutboundlinksInternalNofollow,fromUrlOutboundlinksExternalDofollow,fromUrlOutboundlinksExternalNofollow,fromUrlBacklinks,fromUrlNumberOfReferringDomains,fromDomainTld,fromDomainCitationFlow,fromDomainTrustFlow,fromDomainAuthority,fromDomainHostingCountry,fromDomainIp,importedLink,status,linkType,anchorText,anchorTextType,imageAlt,linkTitle,linkTarget,linkNofollow,linkInContent,linkInListOfLinks,linkPositioning,linkVisibility,isSitewide,linkIgnored,linkDissavowed,linkNaturalness,tags,cognitiveseoDate,credits,time)" + 
                                " values";
            
            String jsonText = "";
            StringBuilder buffer = new StringBuilder();
            int c;
            char[] chars = new char[1024];
            File file = new File("c:/tmp/json_test_cognitive_campaignlinks.txt");
            FileInputStream fis = new FileInputStream(file);
            
            while ((c = fis.read()) != -1)
            {
                buffer.append((char)c);
            }
            fis.close();
            jsonText = buffer.toString();
            
            JSONObject j = new JSONObject(jsonText);
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
                            Iterator<?> keys3 = j3.keys();
                            
                            int linkCounter = 0;
                            while(keys3.hasNext())
                            {
                                String linkID = (String)keys3.next();
                                //System.out.println(linkID);
                                String linkData = j3.getJSONObject(linkID).toString();
                                
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
                                        //No strings
                                    }
                                    else
                                    {
                                        val = "'"+Util.addSlashes(val)+"'";
                                    }
                                        
                                    if(arrayCounter == 0)
                                    {
                                        importStubString = "("+projectID+",getdate(),"+val;
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
                            
                            System.out.println(importQuery);
                            
                            /*System.out.println("campaignID : " + j3.getString("campaignId"));
                            System.out.println("siteID : " + j3.getInt("site1Id"));*
                        }
                    }
                }
            }*/
            
            
            /*JSONArray report = new JSONArray(jsonText);
            
            for(int i=0; i<report.length(); i++)
            {
                if(report.getJSONObject(i).equals("data"))
                {
                    JSONArray resultData = report.getJSONArray(i);
                    for(int j=0; j<resultData.length(); j++)
                    {
                        if(resultData.getJSONObject(j).equals("data"))
                        {
                            JSONArray campaignData = resultData.getJSONArray(j);
                            for(int k=0;k<campaignData.length(); k++)
                            {
                                System.out.println("campaignID: " + campaignData.getJSONObject(k).getInt("campaignId"));
                                System.out.println("siteID: " + campaignData.getJSONObject(k).getInt("site1Id"));
                                System.out.println("---------------------------------------------------");
                            }
                        }
                    }
                }
                
                
            }*/
            
            /*String sessionID = GeoRanker.getSessionID();
            System.out.println(sessionID);*/
            /*String keywords = "pizza";
            String regions = "Houston, Texas";
            String reportID = GeoRanker.requestReport(keywords, regions);
            System.out.println(reportID);*/
            /*String randPassword = "tester!00";
            String saltString = PasswordEncryptionService.generateSalt();
            String hashedPassword = "";
            //String hashedPasswordAnswer = "";
            hashedPassword = PasswordEncryptionService.hashDotNET(randPassword, saltString);
            //hashedPasswordAnswer = PasswordEncryptionService.hashDotNET("aptus", saltString);
            
            System.out.println("salt: "+saltString);
            System.out.println("hashedpassword: "+hashedPassword);
            //System.out.println("hashedpasswordanswer: "+hashedPasswordAnswer);*/
        }
        catch(Exception ex)
        {
            ex.printStackTrace();
        }
    }
    
    
}
