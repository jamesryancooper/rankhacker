var restURL = "http://fairmarketing.cloudapp.net/RankHackerAPI/rest1.0/endpoint.jsp?"

function detectIP()
{
    var snifferURL = "http://1520holdings.com/ipinfo/index.php?z=" + Math.random();
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
            
            //Initiate AJAX call to log IP
            var ipInfo = JSON.parse(ip);
            var clientIP = ipInfo.client_ip;
            var xForwarder = ipInfo.http_forwarded_for;
            
            //Set a cookie initially; we'll log it to the database once they try to submit a competitor request
            document.cookie = "client_ip="+clientIP;
            document.cookie = "x_forwarder="+xForwarder;
            
            //logUserIP(clientIP,xForwarder);
            
            //alert("Your IP is: "+clientIP);
            //alert("Forwarded by: "+xForwarder);
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
    var xForwarder = getCookie("x_forwarder");
    
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
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            var response = xmlhttp.responseText;
            alert(response);
        }
    }
    
    xmlhttp.open("POST",targetURL,true);
    xmlhttp.send();
}