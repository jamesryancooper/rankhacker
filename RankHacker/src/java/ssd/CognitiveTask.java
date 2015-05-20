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
public class CognitiveTask implements Runnable
{
    private String StaskName;
    private long SprojectID;
    private long SlinkID;
    private String SanalyzeURL;
    
    public CognitiveTask(String task, long projectID, long linkID, String analyzeURL)
    {
        super();
        StaskName = task;
        StaskName = task;
        SprojectID = projectID;
        SlinkID = linkID;
        SanalyzeURL = analyzeURL;
    }

    public void run()
    {
        if(StaskName.equals("new"))
        {
            try
            {
                Cognitive c = new Cognitive();
                String[] campaignData = c.startNewCampaign(SprojectID, SlinkID, SanalyzeURL);
                c.processCampaignLinks(SprojectID, SlinkID, campaignData[0], campaignData[1]);

            }
            catch(Exception ex)
            {
                Logging.logError(ex);
            }
        }
    }
}
