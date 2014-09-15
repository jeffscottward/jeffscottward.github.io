"use strict";
angular.module("jeffscottwardWebsite", ["ngAnimate", "ngCookies", "ngTouch", "ngSanitize", "restangular", "ui.router"]).config(["$stateProvider", "$urlRouterProvider",
    function(e, t) {
        e.state("home", {
            url: "/",
            templateUrl: "partials/home.html",
            controller: "HomeCtrl"
        }).state("about", {
            url: "/about",
            templateUrl: "partials/about.html",
            controller: "HomeCtrl"
        }).state("portfolio", {
            url: "/portfolio",
            templateUrl: "partials/portfolio.html",
            controller: "HomeCtrl"
        }).state("portfolio.websites", {
            url: "/websites",
            templateUrl: "partials/portfolio.websites.html",
            controller: "HomeCtrl"
        }).state("portfolio.codepen", {
            url: "/codepen",
            templateUrl: "partials/portfolio.codepen.html",
            controller: "HomeCtrl"
        }).state("portfolio.talks", {
            url: "/talks",
            templateUrl: "partials/portfolio.talks.html",
            controller: "HomeCtrl"
        }).state("resume", {
            url: "/resume",
            templateUrl: "partials/resume.html",
            controller: "HomeCtrl"
        }).state("contact", {
            url: "/contact",
            templateUrl: "partials/contact.html",
            controller: "HomeCtrl"
        }).state("blog", {
            url: "/blog",
            templateUrl: "partials/blog.html",
            controller: "HomeCtrl"
        }), t.otherwise("/about")
    }
]), angular.module("jeffscottwardWebsite").controller("HomeCtrl", ["$scope",
    function(e) {
        e.currentTab = "about", e.getCurrentTab = function() {
            return e.currentTab
        }, e.setCurrentTab = function(t) {
            e.currentTab = t
        }, e.isCurrentTab = function(t) {
            return e.currentTab === t ? !0 : void 0
        }, e.processForm = function() {
            alert(formData)
        }
    }
]), angular.module("jeffscottwardWebsite").controller("ContactCtrl", ["$scope",
    function(e) {
        e.formData = {}, e.processForm = function() {
            alert("valid form!\n" + JSON.stringify(e.formData, null, "  "))
        }
    }
]),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/about.html", '<div class="row fadeIn animated"><div class="large-12"><div class="panel bounceInUp animated"><div class="row"><div class="large-4 columns"><img src="images/profile-pic.jpg"><br></div><div class="large-8 columns"><h4>Jeff Ward<h5>User Interface Engineer, Creative Technologist, Decentralized Futurist.</h5><hr><p>Jeff is constantly thinking about the future. The Internet of Things. Bitcoin. Decentralized Web 3.0. Full-stack Javascript. The world is moving ever faster towards the singularity and he hopes to be ready for it.<br><br>Jeff got started as a graphic designer but had been teaching himself how to code since middle school with Flash, Visual Basic, and Java. He had a commodore 64 in his bedroom as a child. You could say he was born to work with computers.<br><b>Email:</b> <a href="mailto:jsward.17@gmail.com?&subject=Expertise%20Request"><b>jsward.17@gmail.com</b></a></p></h4></div></div></div></div></div>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/blog.html", '<div class="row fadeIn animated"><div class="large-12"><div class="panel"><div class="row"><h1>Coming soon!</h1></div></div></div></div>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/contact.html", '<div class="row fadeIn animated"><br><br><form name="contactForm" novalidate="" class="large-12"><div class="large-4 columns"><div class=""><input type="text" name="name" ng-model="formData.name" placeholder="Full Name" ng-minlength="3" required=""></div><div class=""><input type="email" name="email" ng-model="formData.email" placeholder="Email Address" required=""></div><div class=""><input type="text" name="tel" ng-pattern="/\\d{3}-\\d{3}-\\d{4}/" ng-model="formData.tel" placeholder="Telephone" required=""></div></div><div class="large-8 columns"><a href="mailto:jsward.17@gmail.com?&subject=Expertise%20Request&body=these%20mailto%0Alinks%20are%0Acool">mail links</a><input class="button radius" type="submit" ng-submit="processForm(formData)" value="Submit"></div></form></div>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/footer.html", '<footer class="row bounceInUp animated"><div class="large-12"><hr><ul><li><a target="_BLANK" href="https://blockchain.info/address/1BJNDSBWgE2c4sbwb1BVEVBGzXbxHqGcSA"><i class="fa fa-btc"></i></a></li><li><a target="_BLANK" href="https://codepen.io/jeffscottward"><i class="fa fa-codepen"></i></a></li><li><a target="_BLANK" href="https://twitter.com/jeffscottward"><i class="fa fa-twitter"></i></a></li><li><a target="_BLANK" href="https://github.com/jeffscottward"><i class="fa fa-github"></i></a></li></ul></div></footer>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/header.html", '<nav class="top-bar row bounceInDown animated"><ul class="title-area"><li class="name"><a href="#"><img alt="Jeff Ward" src="images/self-logo.png" style="background: url(http://subtlepatterns.com/patterns/grey.png); max-height: 45px;"></a></li></ul><section class="top-bar-section"><ul class="right"><li><a ui-sref="about">About</a></li><li class="has-dropdown not-click"><a>Portfolio</a><ul class="dropdown"><li><a ui-sref="portfolio.websites">Websites</a></li><li><a ui-sref="portfolio.codepen">Codepen</a></li></ul></li><li></li><li><a ui-sref="resume">Resume</a></li></ul></section></nav>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/home.html", '<div class="row fadeIn animated"><div class="large-4 columns" ng-repeat="awesomeThing in awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="images/{{awesomeThing.logo}}" alt="{{awesomeThing.title}}"><div class="caption"><h3>{{awesomeThing.title}}</h3><p>{{awesomeThing.description}}</p><p><a ng-href="{{awesomeThing.url}}">{{awesomeThing.url}}</a></p></div></div></div></div>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/portfolio.codepen.html", '<div class="large12 fadeIn animated"><h5><a href="http://codepen.io/jeffscottward/pen/zrjbd/">Iso-Metric Snake</a></h5><p data-height="384" data-theme-id="0" data-slug-hash="zrjbd" data-default-tab="result" class="codepen" style="opacity: 0;">See the Pen <a href="http://codepen.io/jeffscottward/pen/zrjbd/">Iso-Metric Snake</a> by Jeff Scott Ward (<a href="http://codepen.io/jeffscottward">@jeffscottward</a>) on <a href="http://codepen.io">CodePen</a>.</p><h5><a href="http://codepen.io/jeffscottward/pen/Ggoik/">Object Oriented SASS Framework</a></h5><p data-height="462" data-theme-id="0" data-slug-hash="Ggoik" data-default-tab="result" class="codepen" style="opacity: 0;">See the Pen <a href="http://codepen.io/jeffscottward/pen/Ggoik/">Object Oriented SASS Framework</a> by Jeff Scott Ward (<a href="http://codepen.io/jeffscottward">@jeffscottward</a>) on <a href="http://codepen.io">CodePen</a>.</p><h5><a href="http://codepen.io/jeffscottward/pen/xFamn/">XBOX 360 UI</a></h5><p data-height="598" data-theme-id="0" data-slug-hash="xFamn" data-default-tab="result" class="codepen" style="opacity: 0;">See the Pen <a href="http://codepen.io/jeffscottward/pen/xFamn/">XBOX 360 UI</a> by Jeff Scott Ward (<a href="http://codepen.io/jeffscottward">@jeffscottward</a>) on <a href="http://codepen.io">CodePen</a>.</p><h5><a href="http://codepen.io/jeffscottward/pen/wlavA/">3D Hexagon Text Roller</a></h5><p data-height="306" data-theme-id="0" data-slug-hash="wlavA" data-default-tab="result" class="codepen" style="opacity: 0;">See the Pen <a href="http://codepen.io/jeffscottward/pen/wlavA/">3D Hexagon Text Roller</a> by Jeff Scott Ward (<a href="http://codepen.io/jeffscottward">@jeffscottward</a>) on <a href="http://codepen.io">CodePen</a>.</p><h5><a href="http://codepen.io/jeffscottward/pen/dkJnm/">Trader Phone APP UI</a></h5><p data-height="651" data-theme-id="0" data-slug-hash="dkJnm" data-default-tab="result" class="codepen" style="opacity: 0;">See the Pen <a href="http://codepen.io/jeffscottward/pen/dkJnm/">Trader Phone APP UI</a> by Jeff Scott Ward (<a href="http://codepen.io/jeffscottward">@jeffscottward</a>) on <a href="http://codepen.io">CodePen</a>.</p></div><script async="" src="//codepen.io/assets/embed/ei.js"></script>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/portfolio.html", '<div class="row portfolio fadeIn animated"><div ui-view=""></div></div>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/portfolio.websites.html", '<div class="large12 fadeIn animated"><h5><a>Teach For America Internal Admin App</a></h5><a><img src="images/tfa-app.png"></a><h5><a target="_BLANK" href="http://www.Toyota.com/usa/">Toyota.com/USA</a></h5><a target="_BLANK" href="http://www.Toyota.com/usa/"><img src="images/toyota.png"></a><h5><a target="_BLANK" href="http://www.JohnVarvatos.com/">JohnVarvatos.com</a></h5><a target="_BLANK" href="http://www.JohnVarvatos.com/"><img src="images/johnvarvatos.png"></a><h5><a target="_BLANK" href="http://www.MaterialWrld.com/">MaterialWrld.com</a></h5><a target="_BLANK" href="http://www.MaterialWrld.com/"><img src="images/materialwrld.png"></a><h5><a target="_BLANK" href="http://www.TomFord.com/">TomFord.com</a></h5><a target="_BLANK" href="http://www.TomFord.com/"><img src="images/tomford.png"></a><h5><a target="_BLANK" href="http://www.Acthar.com/">Acthar.com</a></h5><a target="_BLANK" href="http://www.Acthar.com/"><img src="images/acthar.png"></a><h5><a target="_BLANK" href="http://www.Actemra.com/">Actemra.com</a></h5><a target="_BLANK" href="http://www.Actemra.com/"><img src="images/actemra.png"></a><h5><a target="_BLANK" href="http://www.PickettsPress.com/">PickettsPress.com</a></h5><a target="_BLANK" href="http://www.PickettsPress.com/"><img src="images/pickettspress.png"></a></div>')
        }
    ])
}(),
function(e) {
    try {
        e = angular.module("jeffscottwardWebsite")
    } catch (t) {
        e = angular.module("jeffscottwardWebsite", [])
    }
    e.run(["$templateCache",
        function(e) {
            e.put("partials/resume.html", '<div class="row fadeIn animated resume"><br><div class="large-12"><a href="downloads/JeffWard-Resume.pdf" class="button radius large-12">Download Resume</a></div><div class="row"><div class="large-6 columns"><img src="images/JeffWard-Resume-pg-1.png"></div><div class="large-6 columns"><img src="images/JeffWard-Resume-pg-2.png"></div></div></div>')
        }
    ])
}();