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
public class MozTask implements Runnable
{
    private String StaskName;
    private long SprojectID;
    private long SlinkID;
    private String SanalyzeURL;
    
    public MozTask(String task, long projectID, long linkID, String analyzeURL)
    {
        super();
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
                Moz m = new Moz();
                m.requestReport(SprojectID,SlinkID,SanalyzeURL);
            }
            catch(Exception ex)
            {
                Logging.logError(ex);
            }
        }
    }
}
