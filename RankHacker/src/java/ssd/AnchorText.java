/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ssd;

import java.sql.*;
import java.util.*;

/**
 *
 * @author Hari
 */
public class AnchorText
{
    public static final int TYPE_CLIENT = 1;
    public static final int TYPE_COMPETITOR = 2;
    
    public static String[] getActionTerms()
    {
        String[] terms = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 0;
        String query = "select * from anchortextactionterms order by actionterm asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                terms[i] = rs.getString("actionterm");
                i++;
            }
            
            terms = Util.resizeArray(terms, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return terms;
    }
    
    public static String[] getStopTerms()
    {
        String[] terms = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 0;
        String query = "select * from anchortextstopterms order by stopterm asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                terms[i] = rs.getString("stopterm");
                i++;
            }
            
            terms = Util.resizeArray(terms, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return terms;
    }
    
    public static String[] getProjectBIPTerms(int projectID)
    {
        String[] terms = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 0;
        String query = "select * from projectbipterms where projectid="+projectID+" order by bipterm asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                terms[i] = rs.getString("bipterm");
                i++;
            }
            
            terms = Util.resizeArray(terms, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return terms;
    }
    
    public static String[] getProjectBrandingTerms(int projectID, int competitorType)
    {
        String[] terms = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 0;
        String query = "select * from projectbrandingterms where projectid="+projectID+" and competitortype="+competitorType+" order by brandingterm asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                terms[i] = rs.getString("brandingterm");
                i++;
            }
            
            terms = Util.resizeArray(terms, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return terms;
    }
    
    public static String[] getProjectPartialTerms(int projectID)
    {
        String[] terms = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 0;
        String query = "select * from projectpartialterms where projectid="+projectID+" order by partialterm asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                terms[i] = rs.getString("partialterm");
                i++;
            }
            
            terms = Util.resizeArray(terms, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return terms;
    }
    
    public static String[] getAnchorTextCategories()
    {
        String[] terms = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 0;
        String query = "select * from anchortextcats order by ordinal_rank asc";
        
        try
        {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(query);
            while(rs.next())
            {
                terms[i] = rs.getString("category");
                i++;
            }
            
            terms = Util.resizeArray(terms, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return terms;
    }
    
    public static String getAnchorTextClassification(String anchorText, String geoLocation, String[] anchorTextCategories, String[] actionTerms, String[] stopTerms, String[] bipTerms, String[] clientBrandingTerms, String[] competitorBrandingTerms, String[] partialTerms, String[] urlDomains)
    {
        String category = "";
        boolean matchFound = false;
        
        anchorText = anchorText.replace("http://", "");
        anchorText = anchorText.replace(".", "urldot");
        anchorText = Util.cleanPunctuation(anchorText);
        anchorText = anchorText.replace("urldot", ".");
        
        //Go through the heirarchy and set it to the first one that returns TRUE
        for(int i=0; i<anchorTextCategories.length; i++)
        {
            if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("IMAGE"))
            {
                if(anchorText.equals("") || anchorText.equalsIgnoreCase("(IMAGE)"))
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("ACTION"))
            {
                if(Util.getArrayLocPartialSearch(actionTerms, anchorText) > -1)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("EXACT MATCH"))
            {
                if(Util.getArrayLoc(bipTerms, anchorText) > -1)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("BRAND NAME"))
            {
                if(Util.getArrayLoc(clientBrandingTerms, anchorText) > -1 || Util.getArrayLoc(competitorBrandingTerms, anchorText) > -1)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("URL"))
            {
                if(Util.getArrayLocLike(urlDomains, anchorText) > -1 || Util.getArrayLocPartialSearch(urlDomains, anchorText) > -1)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("KEYWORD BRANDED"))
            {   
                boolean clientMatch = false;
                boolean competitorMatch = false;
                boolean bipMatch = false;
                
                if(Util.getArrayLocPartialSearch(clientBrandingTerms, anchorText) > -1)
                {
                    clientMatch = true;
                }
                
                if(Util.getArrayLocPartialSearch(competitorBrandingTerms, anchorText) > -1)
                {
                    competitorMatch = true;
                }
                                
                if(Util.getArrayLocPartialSearch(bipTerms, anchorText) > -1)
                {
                    bipMatch = true;
                }
                
                if((clientMatch || competitorMatch) && bipMatch)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("BRANDED"))
            {
                boolean clientMatch = false;
                boolean competitorMatch = false;
                
                if(Util.getArrayLocPartialSearch(clientBrandingTerms, anchorText) > -1)
                {
                    clientMatch = true;
                }
                
                if(Util.getArrayLocPartialSearch(competitorBrandingTerms, anchorText) > -1)
                {
                    competitorMatch = true;
                }
                
                if(clientMatch || competitorMatch)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }                
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("PHRASE MATCH"))
            {
                if(Util.getAtomizedArrayLocPartialSearch(bipTerms, anchorText) > -1)
                {
                    category = anchorTextCategories[i];
                    matchFound = true;
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("PARTIAL MATCH"))
            {
                String[] elements = anchorText.split(" ");
                for(int e = 0; e<elements.length; e++)
                {
                    if(Util.getAtomizedArrayLocPartialSearch(partialTerms, elements[e]) > -1 || Util.getArrayLocPartialSearch(partialTerms, elements[e]) > -1)
                    {
                        category = anchorTextCategories[i];
                        matchFound = true;
                    }
                }
            }
            else if(!matchFound && anchorTextCategories[i].equalsIgnoreCase("OTHER"))
            {
                category = anchorTextCategories[i];
                matchFound = true;
            }
        }
        
        //Do a quick check for the geoLocation match; if true, append " - LOCAL"
        if(anchorText.toUpperCase().contains(geoLocation.toUpperCase()))
        {
            category += " - LOCAL";
        }
        
        return category;
    }
    
    public static String[] getProjectURLDomains(int projectID)
    {
        String[] domains = new String[100000];
        
        Connection conn = Database.getSQLServerConnection();
        Statement stmt = null;
        ResultSet rs = null;
        int i = 1;
        String query1 = "select * from projects where id="+projectID;
        String query2 = "select * from georankerresults where projectid="+projectID+" and selected=1 order by url asc";
        
        try
        {
            stmt = conn.createStatement();
            
            rs = stmt.executeQuery(query1);
            while(rs.next())
            {
                domains[0] = rs.getString("website").replace("http://", "").replace("www.", "");
            }
            
            rs = stmt.executeQuery(query2);
            while(rs.next())
            {
                domains[i] = rs.getString("url").replace("http://", "").replace("www.", "");
                i++;
            }
            
            domains = Util.resizeArray(domains, i);
            
            stmt.close();
            conn.close();
            stmt = null;
            conn = null;
        }
        catch(Exception ex)
        {
            Logging.logError(ex);
        }
        
        return domains;
    }
    
    public static String[] getAnchorTextCategories_test()
    {
        String[] data = {"IMAGE","ACTION","BRAND NAME","EXACT MATCH","URL","KEYWORD BRANDED","PHRASE MATCH","BRANDED","PARTIAL MATCH","OTHER"};
        return data;
    }
    
    public static String[] getActionTerms_test()
    {
        String[] data = {"click here","read more","click","more","next","prev","previous","submit","learn more","more info","more information","visit website","find out more","visit my website","visit our website","home","home page","homepage","about us","contact","contact us","services","blog","continue","more","website","visit","our website","my website","call","call today","services","sitemap","site map","terms of use","policies","call","call today","contact","privacy policy","privacy policies","terms","photos","galleries","photo gallery","photo galleries","visit","visit site","industry links","links","resources","legal notice","faq","faqs","view website","view","view site","visit link","visit this link","visit","view web site","visit website","visit web site","here","this","contact page"};
        return data;
    }
    
    public static String[] getStopTerms_test()
    {
        String[] data = {"a","about","above","across","after","afterwards","again","against","all","almost","alone","along","already","also","although","always","am","among","amongst","amoungst","amount","an","and","another","any","anyhow","anyone","anything","anyway","anywhere","are","around","as","at","back","be","became","because","become","becomes","becoming","been","before","beforehand","behind","being","below","beside","besides","between","beyond","bill","both","bottom","but","by","call","can","cannot","cant","co","computer","con","could","couldnt","cry","de","describe","detail","do","done","down","due","during","each","eg","eight","either","eleven","else","elsewhere","empty","enough","etc","even","ever","every","everyone","everything","everywhere","except","few","fifteen","fify","fill","find","fire","first","five","for","former","formerly","forty","found","four","from","front","full","further","get","give","go","had","has","hasnt","have","he","hence","her","here","hereafter","hereby","herein","hereupon","hers","herseâ€","him","himseâ€","his","how","however","hundred","i","ie","if","in","inc","indeed","interest","into","is","it","its","itseâ€","keep","last","latter","latterly","least","less","ltd","made","many","may","me","meanwhile","might","mill","mine","more","moreover","most","mostly","move","much","must","my","myseâ€","name","namely","neither","never","nevertheless","next","nine","no","nobody","none","noone","nor","not","nothing","now","nowhere","of","off","often","on","once","one","only","onto","or","other","others","otherwise","our","ours","ourselves","out","over","own","part","per","perhaps","please","put","rather","re","same","see","seem","seemed","seeming","seems","serious","several","she","should","show","side","since","sincere","six","sixty","so","some","somehow","someone","something","sometime","sometimes","somewhere","still","such","system","take","ten","than","that","the","their","them","themselves","then","thence","there","thereafter","thereby","therefore","therein","thereupon","these","they","thick","thin","third","this","those","though","three","through","throughout","thru","thus","to","together","too","top","toward","towards","twelve","twenty","two","un","under","until","up","upon","us","very","via","was","we","well","were","what","whatever","when","whence","whenever","where","whereafter","whereas","whereby","wherein","whereupon","wherever","whether","which","while","whither","who","whoever","whole","whom","whose","why","will","with","within","without","would","yet","you","your","yours","yourself","yourselves","aren't","can't","couldn't","did","didn't","does","doesn't","doing","don't","hadn't","hasn't","haven't","having","he'd","he'll","he's","here's","herself","himself","how's","i'd","i'll","i'm","i've","isn't","it's","itself","let's","mustn't","myself","ought","oursÂ ","shan't","she'd","she'll","she's","shouldn't","that's","theirs","there's","they'd","they'll","they're","they've","wasn't","we'd","we'll","we're","we've","weren't","what's","when's","where's","who's","why's","won't","wouldn't","you'd","you'll","you're","you've","a's","able","according","accordingly","actually","ain't","allow","allows","anybody","anyways","apart","appear","appreciate","appropriate","aside","ask","asking","associated","available","away","awfully","b","believe","best","better","brief","c","c'mon","c's","came","cause","causes","certain","certainly","changes","clearly","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","course","currently","d","definitely","described","despite","different","downwards","e","edu","entirely","especially","et","everybody","ex","exactly","example","f","far","fifth","followed","following","follows","forth","furthermore","g","gets","getting","given","gives","goes","going","gone","got","gotten","greetings","h","happens","hardly","hello","help","hi","hither","hopefully","howbeit","ignored","immediate","inasmuch","indicate","indicated","indicates","inner","insofar","instead","inward","it'd","it'll","j","just","k","keeps","kept","know","knows","known","l","lately","later","lest","let","like","liked","likely","little","look","looking","looks","m","mainly","maybe","mean","merely","n","nd","near","nearly","necessary","need","needs","new","non","normally","novel","o","obviously","oh","ok","okay","old","ones","outside","overall","p","particular","particularly","placed","plus","possible","presumably","probably","provides","q","que","quite","qv","r","rd","really","reasonably","regarding","regardless","regards","relatively","respectively","right","s","said","saw","say","saying","says","second","secondly","seeing","seen","self","selves","sensible","sent","seriously","seven","shall","somebody","somewhat","soon","sorry","specified","specify","specifying","sub","sup","sure","t","t's","taken","tell","tends","th","thank","thanks","thanx","thats","theres","think","thorough","thoroughly","took","tried","tries","truly","try","trying","twice","u","unfortunately","unless","unlikely","unto","use","used","useful","uses","using","usually","uucp","v","value","various","viz","vs","w","want","wants","way","welcome","went","willing","wish","wonder","x","y","yes","z","zero","abroad","adj","ago","ahead","alongside","amid","amidst","backward","backwards","begin","caption","co.","dare","daren't","directly","eighty","end","ending","evermore","fairly","farther","fewer","forever","forward","half","inc.","inside","likewise","low","lower","make","makes","mayn't","meantime","mightn't","minus","miss","mr","mrs","needn't","neverf","neverless","ninety","nonetheless","no-one","notwithstanding","one's","opposite","oughtn't","past","provided","recent","recently","round","someday","taking","that'll","that've","there'd","there'll","there're","there've","thing","things","thirty","till","underneath","undoing","unlike","upwards","versus","what'll","what've","whichever","whilst","who'd","who'll","whomever"};
        return data;
    }
    
    public static String[] getProjectBIPTerms_test(int projectID)
    {
        String[] data = {"APC Battery","Lithonia Battery","Power Sonic Battery","elb06042 lithonia battery 6v 4ah 20hr","Emergency Light Batteries"};
        return data;
    }
    
    public static String[] getProjectBrandingTerms_testClient(int projectID, int type)
    {
        String[] data = {"batteryplex","BatteryPlex","BatteryPlex, Inc."};
        return data;
    }
    
    public static String[] getProjectBrandingTerms_testCompetitor(int projectID, int type)
    {
        String[] data = {"lithonia","Lithonia Lighting","Acuity Brands Lighting, Inc.","Lithonia Lighting,Acuity Brands Company","Acuity Brands Company","emergencylighting","Emergency Lighting","Emergency Lite Service Center (ELSC)","Emergency Lite Service Center ","ELSC","E.L.S.C.","Emergency Light","EmergencyLighting","Emergency Lite Service Center Inc.","power-sonic","Power-Sonic","PS","Power-Sonic Corp","Power-Sonic Corporation","mouser","Mouser Electronics, Inc","Mouser Electronics","apc","American Power Conversion Corp.","American Power Conversion Corporation","batterymart","BatteryMart","BatteryMart.com","Battery Mart","emergencylightbatteries","Emergency Lighting Battery","Emergency Light Batteries","EmergencyLightBatteries","exitlightco","The Exit Light Company","The Exit Light Co.","The Exit Light Company, Inc"};
        return data;
    }
    
    public static String[] getProjectPartialTerms_test(int projectID)
    {
        String[] data = {"Apc","Battery","Lithonia","Power","Sonic","elb06042","6v","4ah","20hr","emergency","light","batteries"};
        return data;
    }
    
    public static String[] getProjectURLDomains_test(int projectID)
    {
        String[] data = {"batteryplex.com","apc.com","batteriesplus.com","batteriesplus.com","batteriesplus.com","batterymart.com","emergencylightbatteries.com","emergencylighting.com","lithonia.com","mouser.com","power-sonic.com"};
        return data;
    }
}
