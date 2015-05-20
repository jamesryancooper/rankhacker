<%-- 
    Document   : index.jsp
    Created on : May 20, 2015, 12:29:07 PM
    Author     : Hari
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- =========================
          BASIC PAGE INFORMATION
    ============================== -->
    <!-- PAGE TITLE -->
    <title>RankHacker - The intelligent content strategy platform!</title>

    <!-- WHAT'S YOUR PAGE ABOUT? -->
    <meta name="description" content="Intelligently generate an actionable content strategy complete with publication calendar to beat your competition.">

    <!-- KEYWORDS THAT DESCRIBES YOUR PAGE -->
    <meta name="keywords" content="content strategy, content roadmap, content calendar">

    <!-- HELP US SPREAD THE LOVE :-) -->
    <meta name="author" content="fairmarketing.com">

    <!-- ALLOW GOOGLE TO INDEX YOUR PAGE -->
    <meta name="robots" content="noindex, nofollow">

    <!-- =========================
          FAV & TOUCH ICONS
    ============================== -->
    <!-- FAVICON FOR DESKTOPS
        <link rel="icon" href="img/favicon/favicon.ico">
        -->
    <!-- SET OF FAVICONS FOR APPLE PRODUCTS
        <link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">
        -->

    <!-- =========================
         FONTS
    ============================== -->
    <!-- RALEWAY FONT FROM GOOGLE FONTS -->
    <link href='http://fonts.googleapis.com/css?family=Rationale' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
    <link href="http://fonts.googleapis.com/css?family=Cousine:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Anonymous+Pro:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900' rel='stylesheet' type='text/css'>

    <!-- ELEGANT ICON PACK -->
    <link href="fonts/elegant/css/elegant.css" rel='stylesheet' type='text/css'>

    <!-- ENTYPO ICON PACK -->
    <link href="fonts/entypo/css/entypo.css" rel='stylesheet' type='text/css'>

    <!-- =========================
         STYLESHEETS
    ============================== -->
    <!-- BOOTSTRAP -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">

    <!-- POPOVERS -->
    <link href="css/popovers.less" rel="stylesheet">

    <!-- RANKHACKER! THEME -->
    <link href="css/rankhacker.css" rel="stylesheet" id="theme-change">

    <!-- ADDITIONAL STYLES -->
    <link href="css/tiles.css" rel="stylesheet">
    <!-- This is a comment -->

    <!-- ANIMATIONS BASED ON ANIMATE.CSS -->
    <link href="css/animations.css" rel="stylesheet" type="text/css">

    <!-- =========================
         INTERNET EXPLORER FIXES
    ============================== -->
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- =========================
         GOOGLE PLACES API
    ============================== -->
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places,drawing,geometry"></script>

    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>

    <script type="text/javascript">

        // Load the Visualization API and the piechart package.
        google.load('visualization', '1.0', {'packages': ['corechart']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.setOnLoadCallback(drawChart1);
        google.setOnLoadCallback(drawChart2);

        function drawChart1() {
            // Some raw data (not necessarily accurate)
            var data = google.visualization.arrayToDataTable([
                ['Month', 'You', 'Competitors'],
                ['Jun 14', 233, 1222],
                ['Jul 14', 444, 1234],
                ['Aug 14', 117, 876],
                ['Sep 14', 43, 976],
                ['Oct 14', 136, 1053],
                ['Nov 14', 122, 1210],
                ['Dec 14', 212, 938],
                ['Jan 15', 135, 1120],
                ['Feb 15', 157, 1167],
                ['Mar 15', 139, 1110],
                ['Apr 15', 136, 691],
                ['May 15', 110, 345]
            ]);
            var options = {
                vAxis: {title: "Pieces of Content"},
                hAxis: {title: "Month"},
                width: '1050',
                height: '300',
                colors: ['#a94442', '#3c763d'],
                backgroundColor: {fill: 'transparent'},
                seriesType: "area",
                series: {
                    0: {type: "area"},
                    1: {type: "area"}
                }
            };

            var chart1 = new google.visualization.ComboChart(document.getElementById('chart_div1'));

            chart1.draw(data, options);

        }

        function drawChart2() {
            // Some raw data (not necessarily accurate)
            var data = google.visualization.arrayToDataTable([
                ['Month', 'You', 'Competitors'],
                ['Jun 14', 23, 45],
                ['Jul 14', 45, 43],
                ['Aug 14', 23, 41],
                ['Sep 14', 32, 48],
                ['Oct 14', 32, 38],
                ['Nov 14', 34, 36],
                ['Dec 14', 45, 32],
                ['Jan 15', 67, 38],
                ['Feb 15', 58, 42],
                ['Mar 15', 89, 47],
                ['Apr 15', 92, 45],
                ['May 15', 110, 53]
            ]);
            var options = {
                vAxis: {title: "Pieces of Content"},
                hAxis: {title: "Month"},
                width: '1050',
                height: '300',
                colors: ['#a94442', '#3c763d'],
                backgroundColor: {fill: 'transparent'},
                seriesType: "area",
                series: {
                    0: {type: "area"},
                    1: {type: "area"}
                }
            };

            var chart2 = new google.visualization.ComboChart(document.getElementById('chart_div2'));

            chart2.draw(data, options);

        }

    </script>


</head>

<body id="body" class="page-loading home">

<!-- =========================
     PRELOADER
==============================  

	<div id="preloader">
    
      <div id="loading" class="modal-body col-xs-12">
      
        <div class="loader">
            <div class="progress-bar"><div class="progress-stripes"></div><div class="percentage">0%</div></div>
        </div>
    
        <span>Loading...</span>
        
      </div>
      
	</div>-->

<!-- =========================
     MAIN MENU
============================== -->
<nav id="mainmenu" class="navbar navbar-fixed-top main-menu head-menu auto-height" role="navigation">
    <div class="container">

        <!-- LOGO CONTAINER -->
        <div class="logo-cont"><a class="navbar-brand glitch" data-text="RANKHACKER" href="#header">RANK<span>HACKER</span></a></div>

        <!-- MAIN MENU BUTTONS CONTAINER -->
        <div class="buttons-cont">

            <!-- OPEN MODAL WITH SIGN UP FORM -->
            <button type="button" class="btn btn-primary gotoRegister" data-toggle="modal" data-target="#signUp">Sign Up</button>

            <!-- OPEN MODAL WITH LOGIN FORM -->
            <button type="button" class="btn btn-primary gotoLogin" data-toggle="modal" data-target="#signUp">Login</button>

        </div>

        <!-- "BURGER MENU" FOR RESPONSIVE VIEW -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
        </div>

        <!-- MAIN MENU CONTAINER -->
        <div id="navbar" class="navbar-collapse collapse">
            <div class="navbar-right">
                <ul class="nav navbar-nav">

                    <!-- MAIN MENU POSITIONS -->
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>

                </ul>
            </div>
        </div>
    </div>
</nav>

<!-- =========================
     REGISTER MODAL
============================== -->
<div class="modal fade" id="signUp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">

                <!-- CLOSE MODAL BUTTON -->
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                <!-- MODAL TITLE -->
                <h5 class="modal-title" id="myModalLabel">Start Rank Hacking Today!</h5>

                <!-- MODAL SUBTITLE -->
                <h6>Register an account or login now</h6>
            </div>

            <!-- LOGIN FORM -->
            <div class="modal-body" id="login">
                <form class="form-horizontal" role="form" autocomplete="off" data-toggle="validator">
                    <div class="form-group">

                        <!-- E-MAIL INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="elegant icon_mail_alt"></span></div>

                            <!-- INPUT -->
                            <input type="email" class="form-control" id="login-email" placeholder="e-mail adress" autocomplete="off" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">

                        <!-- PASSWORD INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="icon-password">*</span></div>

                            <!-- INPUT -->
                            <input type="password" class="form-control" id="login-password" placeholder="password" autocomplete="off" data-minlength="5" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="input-group col-xs-12">

                        <!-- SUBMIT BUTTON -->
                        <button type="submit" class="btn btn-success btn-black col-xs-12">

                            <!-- ICON -->
                            <span class="icon_profile"></span>

                            <!-- BUTTON TEXT -->
                            Login
                        </button>
                    </div>

                    <!--CHANGE FORM TO PASSWORD REMINDER-->
                    <p class="other" id="gotoRemind">forgot your password?</p>
                </form>
            </div>

            <!-- REGISTRATION FORM -->
            <div class="modal-body noopacity nodisplay" id="register">
                <form class="form-horizontal" role="form" autocomplete="off" data-toggle="validator">
                    <div class="form-group">

                        <!-- E-MAIL INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="elegant icon_mail_alt"></span></div>

                            <!-- INPUT -->
                            <input type="email" class="form-control" id="register-email" placeholder="e-mail adress" autocomplete="off" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">

                        <!-- PASSWORD INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="icon-password">*</span></div>

                            <!-- INPUT -->
                            <input type="password" class="form-control" id="register-password" placeholder="password" autocomplete="off" data-minlength="5" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">

                        <!-- PASSWORD REPEAT INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="icon-repeat">**</span></div>

                            <!-- INPUT -->
                            <input type="password" class="form-control" id="register-repeat" placeholder="repeat password" autocomplete="off" data-match="#register-password" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <div class="input-group col-xs-12">

                            <!-- SUBMIT BUTTON -->
                            <button type="submit" class="btn btn-success btn-black col-xs-12">

                                <!-- ICON -->
                                <span class="icon_profile"></span>

                                <!--BUTTON TEXT-->
                                Create Account
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <!-- PASSWORD REMINDER FORM -->
            <div class="modal-body noopacity nodisplay" id="remind">
                <form class="form-horizontal" role="form" autocomplete="off" data-toggle="validator">
                    <div class="form-group">

                        <!-- E-MAIL INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="elegant icon_mail_alt"></span></div>

                            <!-- INPUT -->
                            <input type="email" class="form-control" id="remind-email" placeholder="e-mail adress" autocomplete="off" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <div class="input-group col-xs-12">

                            <!-- SUBMIT BUTTON -->
                            <button type="submit" class="btn btn-success btn-black col-xs-12">

                                <!-- ICON -->
                                <span class="icon_profile"></span>

                                <!-- BUTTON TEXT -->
                                Send me new password
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <!-- MODAL FOOTERS -->
            <div class="modal-footer">

                <!-- LOGIN & PASSWORD REMINDER FOOTER -->
                <p id="gotoRegister">Need an account? <span>Register here.</span></p>

                <!-- REGISTRATION FOOTER -->
                <p id="gotoLogin" class="noopacity nodisplay">Already have an account? <span>Login here.</span></p>
            </div>
        </div>
    </div>
</div>

<!-- =========================
     DATA MODAL
============================== -->
<div id="data" class="modal fadeable transparent container" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- CLOSE MODAL BUTTON -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

            <!--COMPETITORS -->
            <div id="competitor" class="modal-body col-xs-12 row competitor">

                <div class="modal-header text-center row">
                    <!-- LOADING TITLE -->
                    <h1 class="loading"><span class="header-txt-color">Finding Your Competitors</span></h1>
                    <!-- LOADING SUBTITLE -->
                    <h6 class="loading">We are currently finding your competitors.</h6>

                    <!-- COMPETITOR TITLE -->
                    <h1 class="competitor noopacity nodisplay"><span class="header-txt-color">Select Your Competitors</span></h1>
                    <!-- COMPETITOR SUBTITLE -->
                    <h6 class="competitor noopacity nodisplay">Choose one or more competitors to hack their content strategy.</h6>
                </div>

                <form class="form-horizontal" role="form" autocomplete="off" data-toggle="validator">
                    <div class="form-group">

                        <!-- KEYWORD INPUT -->
                        <div class="input-group inline col-xs-12 col-md-6">
                            <ul id="competitor-list-1" class="list-group">
                                <!-- CHECKBOX -->
                                <li class="list-group-item noopacity"><span class="rank text-center">1</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.abacusplumbing.net" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success" data-toggle="popover" title="Likely Competitor" data-content="Considering various factors this is a likely competitor of your website."></i>abacusplumbing.net</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">2</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.rotorooter.com/houston/" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>rotorooter.com</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">3</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.angieslist.com/companylist/houston/plumbing.htm" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-danger"></i>angieslist.com</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">4</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="en.wikipedia.org/wiki/Plumbing" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-danger"></i>wikipedia.org</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">5</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.villageplumbing.com" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>villageplumbing.com</span> </label>
                                </li>
                            </ul>
                        </div>
                        <div class="input-group inline col-xs-12 col-md-6">
                            <ul id="competitor-list-2" class="list-group">
                                <li class="list-group-item noopacity"><span class="rank text-center">6</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.yellowpages.com/houston-tx/plumbers" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>yellowpages.com</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">7</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="theplumbingsolution.net" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>theplumbingsolution.net</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">8</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.happyplumber.com/services/" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>happyplumber.com</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">9</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="localplumbing.com" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>localplumbing.com</span> </label>
                                </li>
                                <li class="list-group-item noopacity"><span class="rank text-center">10</span>
                                    <label>
                                        <input type="checkbox" name="competitorURL" value="www.houstonplumbing.com" class="styled">
                                        <span class="lbl padding-8 list-txt"><i class="entypo-flag text-success"></i>houstonplumbing.com</span> </label>
                                </li>
                            </ul>
                        </div>
                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                        <div id="data-attribution" class="col-xs-12 text-right noopacity nodisplay"><p><sup>*</sup> Competitor data based on page 1 listing from Google.</p></div>
                    </div>

                    <!--LOADING -->
                    <div id="loading" class="loading modal-body col-xs-12 text-center row">

                        <div class="loader">
                            <div class="progress-bar">
                                <div class="progress-stripes"></div>
                                <div class="percentage">0%</div>
                            </div>
                        </div>

                        <h6>
                <span class="loading-text text-center">
                    <span class="l-1 letter">F</span>
                    <span class="l-2 letter">i</span>
                    <span class="l-3 letter">n</span>
                    <span class="l-4 letter">d</span>
                    <span class="l-5 letter">i</span>
                    <span class="l-6 letter">n</span>
                    <span class="l-7 letter">g</span>
                    <span class="l-8 letter">&nbsp;</span>
                    <span class="l-9 letter">C</span>
                    <span class="l-10 letter">o</span>
                    <span class="l-11 letter">m</span>
                    <span class="l-12 letter">p</span>
                    <span class="l-13 letter">e</span>
                    <span class="l-14 letter">t</span>
                    <span class="l-15 letter">i</span>
                    <span class="l-16 letter">t</span>
                    <span class="l-17 letter">o</span>
                    <span class="l-18 letter">r</span>
                    <span class="l-19 letter">s</span>
                    <span class="l-20 letter">.</span>
                    <span class="l-21 letter">.</span>
                    <span class="l-22 letter">.</span>
                </span>
                        </h6>

                    </div>

                    <div class="form-group">
                        <div class="input-group col-xs-12 col-md-4 col-md-offset-4">

                            <!-- SUBMIT BUTTON -->
                            <button id="gotoInventory" type="button" class="btn btn-success btn-black col-xs-12 noopacity nodisplay">
                                <a href="#"> Start Rank Hacking </a>
                            </button>

                        </div>
                    </div>
                </form>
            </div>

            <!--ANALYZING COMPETITOR -->
            <div id="competitor-analyzer" class="modal-body col-xs-12 noopacity nodisplay row">

                <div class="modal-header text-center row">
                    <!-- COMPETITOR ANALYSIS TITLE -->
                    <h1><span class="header-txt-color">Competitor Analysis</span></h1>
                    <!-- COMPETITOR ANALYSIS SUBTITLE -->
                    <h6>Analyzing the content publication schedule of your competitors.</h6>
                </div>

                <div class="text-center row">
                    <div class="loading-analyze">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>

                    <h6>
                <span class="loading-text text-center">
                    <span class="l-1 letter">A</span>
                    <span class="l-2 letter">n</span>
                    <span class="l-3 letter">a</span>
                    <span class="l-4 letter">l</span>
                    <span class="l-5 letter">y</span>
                    <span class="l-6 letter">z</span>
                    <span class="l-7 letter">i</span>
                    <span class="l-8 letter">n</span>
                    <span class="l-9 letter">g</span>
                    <span class="l-10 letter">&nbsp;</span>
                    <span class="l-11 letter">C</span>
                    <span class="l-12 letter">o</span>
                    <span class="l-13 letter">m</span>
                    <span class="l-14 letter">p</span>
                    <span class="l-15 letter">e</span>
                    <span class="l-16 letter">t</span>
                    <span class="l-17 letter">i</span>
                    <span class="l-18 letter">t</span>
                    <span class="l-19 letter">o</span>
                    <span class="l-20 letter">r</span>
                    <span class="l-21 letter">s</span>
                    <span class="l-22 letter">.</span>
                    <span class="l-23 letter">.</span>
                    <span class="l-24 letter">.</span>
                </span>
                    </h6>
                </div>

            </div>

            <!-- INVENTORY -->
            <div id="inventory" class="modal-body col-xs-12 col-md-10 col-md-offset-1 noopacity nodisplay row">

                <div class="modal-header text-center row">
                    <!-- INVENTORY TITLE -->
                    <h1><span class="header-txt-color">Competitive Content Inventory</span></h1>
                    <!-- INVENTORY SUBTITLE -->
                    <h6>This is the total amount of content your competitor's have published over the last 12 months.</h6>
                </div>

                <div class="col-xs-12">

                    <div class="col-sm-6">
                        <div class="tile-stats tile-white">
                            <div class="icon icon-flip"><i class="entypo-rss"></i></div>
                            <div id="inventory-count01" class="num count"></div>
                            <h3>Onsite Inventory</h3>

                            <p>The total pieces of onsite content posted over last 12 months.</p>
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <div class="tile-stats tile-white">
                            <div class="icon icon-flip"><i class="entypo-link"></i></div>
                            <div id="inventory-count02" class="num count"></div>
                            <h3>Offsite Inventory</h3>

                            <p>The total pieces of offsite content posted over last 12 months.</p>
                        </div>
                    </div>

                </div>

            </div>

            <br/>
            <br/>
            <br/>

            <!-- USER -->
            <div id="user" class="user modal-body col-xs-12 col-md-10 col-md-offset-1 noopacity nodisplay row">

                <div class="modal-header text-center row">
                    <!-- USER TITLE -->
                    <h1><span class="header-txt-color">How do you stack up?</span></h1>
                    <!-- USER SUBTITLE -->
                    <h6>Compare your content strategy to your competitors'.</h6>
                </div>

                <form class="form-horizontal" role="form" autocomplete="off" data-toggle="validator">
                    <div class="form-group">

                        <!-- DOMAIN INPUT -->
                        <div class="input-group col-xs-12">

                            <!-- ICON -->
                            <div class="input-group-addon"><span class="elegant icon_link"></span></div>

                            <!-- INPUT -->
                            <input type="url" class="form-control" id="userUrl" placeholder="Enter your website URL to compare" autocomplete="off" required>
                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>

                    </div>

                    <div class="form-group">
                        <div class="input-group col-xs-12 col-md-4 col-md-offset-4">

                            <!-- SUBMIT BUTTON -->
                            <button id="gotoComparison" type="button" class="btn btn-success btn-black col-xs-12">
                                <a href="#"> Compare </a>
                            </button>

                        </div>
                    </div>
                </form>
            </div>

            <!--ANALYZING USER -->
            <div id="user-analyzer" class="user-analyzer modal-body col-xs-12 noopacity nodisplay row">

                <div class="modal-header text-center row">
                    <!-- USER ANALYSIS TITLE -->
                    <h1 class="user-analyzer"><span class="header-txt-color">Content Analysis</span></h1>
                    <!-- USER ANALYSIS SUBTITLE -->
                    <h6 class="user-analyzer">Analyzing your content publication schedule.</h6>
                </div>

                <div class="text-center row">
                    <div class="loading-analyze">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>

                    <h6>
                <span class="loading-text text-center">
                    <span class="l-1 letter">A</span>
                    <span class="l-2 letter">n</span>
                    <span class="l-3 letter">a</span>
                    <span class="l-4 letter">l</span>
                    <span class="l-5 letter">y</span>
                    <span class="l-6 letter">z</span>
                    <span class="l-7 letter">i</span>
                    <span class="l-8 letter">n</span>
                    <span class="l-9 letter">g</span>
                    <span class="l-10 letter">&nbsp;</span>
                    <span class="l-11 letter">C</span>
                    <span class="l-12 letter">o</span>
                    <span class="l-13 letter">n</span>
                    <span class="l-14 letter">t</span>
                    <span class="l-15 letter">e</span>
                    <span class="l-16 letter">n</span>
                    <span class="l-17 letter">t</span>
                    <span class="l-18 letter">.</span>
                    <span class="l-19 letter">.</span>
                    <span class="l-20 letter">.</span>
                </span>
                    </h6>
                </div>

            </div>

            <!-- COMPARISONS -->
            <div id="comparison" class="modal-body col-xs-12 noopacity nodisplay row">

                <div class="modal-header text-center row">
                    <!-- COMPARISON TITLE -->
                    <h1 class="comparison"><span class="header-txt-color">Content Publication Comparison</span></h1>
                    <!-- COMPARISON SUBTITLE -->
                    <h6 class="comparison">How your content publication compares to your competitors'.</h6>
                </div>

                <form class="form-horizontal" role="form" autocomplete="off" data-toggle="validator">
                    <div class="form-group">

                        <div class="input-group col-xs-12">

                            <!-- OFFSITE COMPARISONS -->
                            <div class="data-card col-xs-12">
                                <h5 class="data-card-title header-txt-white ">
                                    <span class="icon icon-flip"><i class="entypo-rss"></i></span>
                                    OFFSITE CONTENT POSTED OVER THE LAST 12 MONTHS
                                </h5>

                                <div class="col-sm-4">
                                    <div class="tile-stats tile-red">
                                        <div class="icon icon-flip"><i class="entypo-chart-line"></i></div>
                                        <div id="count01" class="num count"></div>
                                        <h3>Total Annual Deficiency</h3>

                                        <p>The total pieces of offsite content you are deficient over the last 12 months.</p>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="tile-stats tile-red">
                                        <div class="icon icon-flip"><i class="entypo-chart-line"></i></div>
                                        <div id="count02" class="num count"></div>
                                        <h3>Average Monthly Deficiency</h3>

                                        <p>The average pieces of offsite content you are deficient each month.</p>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="tile-stats tile-red">
                                        <div class="icon icon-flip"><i class="entypo-chart-line"></i></div>
                                        <div id="count03" class="num count"></div>
                                        <h3>Average Monthly Deficiency</h3>

                                        <p>The average pieces of offsite content you are deficient each day.</p>
                                    </div>
                                </div>

                                <div class="col-xs-12">
                                    <div class="tile-stats tile-white">
                                        <h6 class="text-center">Pieces of offsite content posted over the last 12 months</h6>

                                        <div id="chart_div1" class="chart"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- ONSITE COMPARISONS -->
                            <div class="data-card col-xs-12">
                                <h5 class="data-card-title header-txt-white ">
                                    <span class="icon icon-flip"><i class="entypo-link"></i></span>
                                    ONSITE CONTENT POSTED OVER THE LAST 12 MONTHS
                                </h5>

                                <div class="col-sm-4">
                                    <div class="tile-stats tile-green">
                                        <div class="icon"><i class="entypo-chart-line"></i></div>
                                        <div id="count04" class="num count"></div>
                                        <h3>Total Annual Surplus</h3>

                                        <p>The total surplus of onsite content you have built over the last 12 months.</p>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="tile-stats tile-green">
                                        <div class="icon"><i class="entypo-chart-line"></i></div>
                                        <div id="count05" class="num count"></div>
                                        <h3>Average Monthly Surplus</h3>

                                        <p>The average surplus of onsite content you are building monthly.</p>
                                    </div>
                                </div>

                                <div class="col-sm-4">
                                    <div class="tile-stats tile-green">
                                        <div class="icon"><i class="entypo-chart-line"></i></div>
                                        <div id="count06" class="num count"></div>
                                        <h3>Average Monthly Surplus</h3>

                                        <p>The average surplus of onsite content you are building daily.</p>
                                    </div>
                                </div>

                                <div class="col-xs-12">
                                    <div class="tile-stats tile-white">
                                        <h6 class="text-center">Pieces of onsite content posted over the last 12 months</h6>

                                        <div id="chart_div2" class="chart"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- ERROR MESSAGE BOX -->
                        <div class="help-block with-errors"></div>
                    </div>
                    <br/>
                    <br/>

                    <div class="form-group">
                        <div class="modal-header text-center">
                            <h1><span class="header-txt-color">Now let's beat your competitors!</span></h1>
                            <h6>Build a custom content publication schedule that will push your content marketing efforts beyond your competition.</h6>
                        </div>
                        <div class="input-group col-xs-12 col-md-4 col-md-offset-4">
                            <!-- SUBMIT BUTTON -->
                            <button id="chosenCompetitor" type="button" class="btn btn-success btn-black col-xs-12">
                                <a href="http://23.239.30.92/~contentschema/admin"> SIGN UP </a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- =========================
     HEADER
============================== -->
<section id="header" class="blurable">
    <div id="googlemaps" class="animated fadeIn"></div>
    <!-- FOR COLOR OVERLAY, CHANGE CLASS TO color-overlay -->
    <div class="overlay">
        <div class="container">
            <div class="row">

                <!-- HEADER CONTENT -->
                <div class="header-cont col-md-12 header-centred fadeable">

                    <!-- MARGIN FROM TOP -->
                    <div class="header-margin-more"></div>

                    <!-- HEADER TEXT -->
                    <header class="anim-fade-down">

                        <!-- HEADER TITLE -->
                        <h1 class="header-txt-color">The Intelligent Content Strategy Platform</h1>

                        <h1 class="header-txt-small">We help you make sense of the data</h1>


                    </header>
                    <form class="form-inline" role="form" autocomplete="off" data-toggle="validator">
                        <div class="form-group col-sm-5 col-xs-12">

                            <!-- KEYWORD INPUT -->
                            <div class="input-group col-xs-12">

                                <!-- ICON -->
                                <div class="input-group-addon"><span class="elegant icon_search"></span></div>

                                <!-- INPUT -->
                                <input type="text" class="form-control" id="keyword" placeholder="Enter your target keyword" autocomplete="off" required>
                            </div>

                            <!-- ERROR MESSAGE BOX -->
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group ui-front col-sm-5 col-xs-12">

                            <!-- LOCATION INPUT -->
                            <div class="input-group col-xs-12 ui-widget">

                                <!-- ICON -->
                                <div class="input-group-addon"><span class="elegant icon_pin_alt"></span></div>

                                <!-- INPUT -->
                                <input type="text" class="form-control" id="location" placeholder="Enter your target location" autocomplete="off" required>
                            </div>

                            <!-- ERROR MESSAGE BOX -->
                            <div class="help-block with-errors"></div>

                        </div>

                        <!-- HEADER BUTTONS -->
                        <div class="form-group col-sm-2 col-xs-12 inline-input buttons-cont">

                            <!-- GET STARTED BUTTON -->
                            <div class="btn btn-lg btn-success btn-black anim-bounce-right">
                                <a href="#" data-toggle="modal" data-target="#data">GET STARTED</a>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- =========================
     LOCALISATION & OTHER CONTACT DATA
============================== -->
<div id="contact-more">
    <div class="container anim-fade-up">

        <!-- COLUMN 1 -->
        <div class="col-sm-3 col-xs-12">

            <!-- COLUMN TITLE -->
            <h6>Resources</h6>

            <!-- COLUMN CONTENT -->
            <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>

        <!-- COLUMN 2 -->
        <div class="col-sm-3 col-xs-12">

            <!-- COLUMN TITLE -->
            <h6>About</h6>

            <!-- COLUMN CONTENT - LIST OF LINKS -->
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Events</a></li>
            </ul>
        </div>

        <!-- COLUMN 3 -->
        <div class="col-sm-3 col-xs-12">

            <!-- COLUMN TITLE -->
            <h6>Contact Us</h6>

            <!-- COLUMN CONTENT - LIST OF LINKS -->
            <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support</a></li>
                <li class="clearfix"><a href="#">support@contentevolution.com</a></li>
                <li class="clearfix"><a href="#">+1 (456) 789-1234</a></li>
                <li class="clearfix"><a href="#">+1 (569) 444-1534</a></li>
            </ul>
        </div>

        <!-- COLUMN 4 -->
        <div class="col-sm-3 col-xs-12">

            <!-- COLUMN TITLE -->
            <h6>More Information</h6>

            <!-- COLUMN CONTENT -->

        </div>
    </div>
</div>
</section>

<!-- =========================
     FOOTER
============================== -->
<footer>
    <div class="container anim-fade-up">

        <!-- CREDITS - HELP US SPREAD THE LOVE :-) -->
        <div class="col-sm-3 col-xs-12 hidden-xs"><a href="">RANKHACKER</a></div>

        <!-- SOCIAL MEDIA -->
        <div class="col-sm-6">

            <!-- FACEBOOK -->
            <a href="#">
                <div class="sm"><span class="elegant social_facebook"></span></div>
            </a>

            <!-- TWITTER -->
            <a href="#">
                <div class="sm"><span class="elegant social_twitter"></span></div>
            </a>

            <!-- GOOGLE PLUS -->
            <a href="#">
                <div class="sm"><span class="elegant social_googleplus"></span></div>
            </a>

            <!-- INSTAGRAM -->
            <a href="#">
                <div class="sm"><span class="elegant social_instagram"></span></div>
            </a>

            <!-- YOUTUBE -->
            <a href="#">
                <div class="sm"><span class="elegant social_youtube"></span></div>
            </a>

            <!-- VIMEO -->
            <a href="#">
                <div class="sm"><span class="elegant social_vimeo"></span></div>
            </a></div>

        <!-- COPYRIGHT -->
        <div class="col-sm-3 col-xs-12">© 2015 all rights reserved.</div>

        <!-- LINKS -->
        <div class="col-xs-12 text-center"><a href="#">Terms Of Service</a> | <a href="#">Privacy Policy</a></div>
    </div>
</footer>

<!-- =========================
     JS SCRIPTS
============================== -->
<!-- JQUERY -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- JQUERY UI -->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<!-- BOOTSTRAP SCRIPTS -->
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<!-- GEO COMPLETE -->
<script type="text/javascript" src="js/jquery.geocomplete.js"></script>

<!-- SMOOTH SCROLLING FIX -->
<script type="text/javascript" src="js/smoothscroll.js"></script>

<!-- PARALLAX -->
<script type="text/javascript" src="js/parallax.js" id="parallax-change"></script>

<!-- HEADROOM -->
<script type="text/javascript" src="js/headroom.min.js"></script>

<script type="text/javascript" src="js/rankhacker.headroom.js"></script>

<!-- VIEWPORT DETECTION -->
<script type="text/javascript" src="js/jquery.inview.min.js"></script>

<!-- FORM VALIDATION -->
<script type="text/javascript" src="js/validator.js"></script>

<!-- COUTNUP -->
<script type="text/javascript" src="js/countUp.min.js"></script>

<!--CUSTOM THEME SCRIPTS & SETTINGS -->
<script type="text/javascript" src="js/rankhacker.scripts.js"></script>

<script type="text/javascript">
    $(window).on("throttledresize", function (event) {
        drawChart1();
    });
</script>

</body>
</html>