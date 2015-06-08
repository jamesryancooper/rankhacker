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
            
            logUserIP(clientIP,xForwarder);
            
            //alert("Your IP is: "+clientIP);
            //alert("Forwarded by: "+xForwarder);
        }
    }
    
    xmlhttp.open("POST",snifferURL,true);
    xmlhttp.send();
}

function logUserIP(clientIP,xForwarder)
{
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
        }
    }
    
    xmlhttp.open("POST",targetURL,true);
    xmlhttp.send();
}