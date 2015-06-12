//var restURL = "http://fairmarketing.cloudapp.net/rest1.0/endpoint.jsp?"
var restURL = "http://localhost:8084/rest1.0/endpoint.jsp?"

function userInfoCallback(data)
{
    var clientIP = data["ip_address"];
    document.cookie = "client_ip="+clientIP;
}

function detectIP()
{
    var snifferURL = "http://api.hostip.info/get_json.php";
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var ip = xmlhttp.responseText;
            var ipInfo = JSON.parse(ip);
            var clientIP = ipInfo.ip;
            //var xForwarder = ipInfo.http_forwarded_for;
            
            //Set a cookie initially; we'll log it to the database once they try to submit a competitor request
            document.cookie = "client_ip="+clientIP;
            //document.cookie = "x_forwarder="+xForwarder;
        }
    }
    
    xmlhttp.open("POST",snifferURL,true);
    xmlhttp.send();
}

function getCookie(paramName)
{
    var name = paramName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function logUserIP()
{
    var clientIP = getCookie("client_ip");
    //var xForwarder = getCookie("x_forwarder");
    var xForwarder = "0.0.0.0";
    
    var targetURL = restURL + "command=logIP&clientIP="+clientIP+"&xForwarder="+xForwarder+"&z=" + Math.random();
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState===4 && xmlhttp.status===200)
        {
            var response = xmlhttp.responseText;
            var responseData = JSON.parse(response);
            if(responseData.status === "Success")
            {
                var throttle = responseData.throttle;
            }
            
            return throttle;
        }
    }
    
    xmlhttp.open("POST",targetURL,true);
    xmlhttp.send();
}

function createRankHackerProject(keyword,location)
{
    keyword = encodeURI(keyword);
    location = encodeURI(location);
    
    /*alert("keyword: "+keyword);
    alert("location: "+location);*/
    
    var targetURL = restURL + "command=createProject&username=guest&keyword="+keyword+"&location="+location+"&z=" + Math.random();
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState===4 && xmlhttp.status===200)
        {
            var response = xmlhttp.responseText;
            var responseData = JSON.parse(response);
            var projectID = responseData.projectid;
            getGeoRankerCompetitors(projectID);
            //var competitorsList = getGeoRankerCompetitors(projectID);
            //document.getElementById('competitorsListAll').innerHTML = competitorsList;
        }
    }
    
    xmlhttp.open("POST",targetURL,false);
    xmlhttp.send();
}

function getGeoRankerCompetitors(projectID)
{
    var targetURL = restURL + "command=getCompetitorsHTML&projectid="+projectID+"&z=" + Math.random();
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    var htmlData = "";
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState===4 && xmlhttp.status===200)
        {
            var response = xmlhttp.responseText;
            var responseData = JSON.parse(response);
            htmlData = responseData.html;
            document.getElementById('competitorsListAll').innerHTML = htmlData;
        }
    }
    
    xmlhttp.open("POST",targetURL,false);
    xmlhttp.send();
    
}

$('#get-started').click(validateGetStarted);
function validateGetStarted(e)
{
    var keyword = $('#keyword');
    var location = $('#location');

    if(!keyword.val() || !location.val())
    {
        e.preventDefault();
        $('#intro-form').addClass('has-error');
        return false;
    }
    else
    {
        $('#intro-form').removeClass('has-error').addClass('has-success');
        var throttle = logUserIP();
        throttle = "false";
        if(throttle === 'true')
        {
            e.preventDefault();
            alert("It appears that you have run this tool several times already. Please create an account in order to continue with additional hacks.");
            return false;
        }
        else
        {
            createRankHackerProject(keyword.val(),location.val());
            //getGeoRankerCompetitors("10");
            //var competitorsList = getGeoRankerCompetitors("10");
            //alert("filling in: "+competitorsList);
            //document.getElementById('competitorsListAll').innerHTML = competitorsList;
            /*setTimeout(function()
            {
                alert("filling in: "+competitorsList);
                document.getElementById('competitorsListAll').innerHTML = competitorsList;
            }, 3500);*/
        }
    }
}