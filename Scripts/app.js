"use strict";


// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    console.log("App Started..."); 
  
 
        // about me section 
  
// About me h1 
var aboutTitle; 
    
    aboutTitle = document.getElementById("aboutTitle");
    
    aboutTitle.innerHTML = "About Me"
  
 // About me paragraph  
  var aboutParagraph; 
    
      aboutParagraph = document.getElementById("aboutParagraph");
    
    aboutParagraph.innerHTML = "Do you see that ipad floating to your right? Thats me on the far left and the others are my family. I grew up in a small town north of Toronto where simple living and family remain #1. I strarted working working with the web about a year ago and have been adicted ever since. Now adays i have been hand crafting clean, creative web sites for small buisnesses around the community. Using the latest tools to maipulate the web much like a blacksmith. I start with an idea and use tools such as HTML to build the foundation, PHP to menip[ulate, JAVASCRIPT for custom touches & CSS for the final touches. I have experince working with popular content management systmes such as WordPress, Shopify and OpenCart. I always try to be unique and continue on my jorney of becoming a talented web designer/developer. Check out my portfolio, if you like what you see please feel free to shoot me a message on the contact page.";




            // skills section 
    
// skills title 
   var skillsTitle; 
   skillsTitle = document.getElementById("skillsTitle");
   
   skillsTitle.innerHTML = "My Skills";
   
   
// icon#1
    var iconOne;
    iconOne = document.getElementById("iconOne");
   
    iconOne.innerHTML = "Clean HTML";

// icon#2
    var iconTwo;
    iconTwo = document.getElementById("iconTwo");
   
    iconTwo.innerHTML = "Modern CSSL";


// icon#3
    var iconThree;
    iconThree = document.getElementById("iconThree");
   
    iconThree.innerHTML = "Responsive Design";



        // portfolio section 
   
// portfolio title 
   var portfolioTitle
   portfolioTitle = document.getElementById("portfolioTitle");
   
   portfolioTitle.innerHTML = "Past Work";

// project 1 
   var projectOne
   projectOne = document.getElementById("projectOne");
   
   projectOne.innerHTML = "Project One";

// project 2 
   var projectTwo
   projectTwo = document.getElementById("projectTwo");
   
   projectTwo.innerHTML = "Project Two";
   
   // project 3 
   var projectThree
   projectThree = document.getElementById("projectThree");
   
   projectThree.innerHTML = "Project Three";
   
   // project 4 
   var projectFour
   projectFour = document.getElementById("projectFour");
   
  projectFour.innerHTML = "Project Four";
  
     // lipsum 
   var lipsum
   lipsum = document.getElementsByClassName("lipsum");
   lipsum.innerHTML = "llolo";

    //   call to action 
    
    var likeWhatYouSee
    likeWhatYouSee = document.getElementById("likeWhatYouSee");
    likeWhatYouSee.innerHTML = "Like What You See? I'am Availibale For Freelancing";
       
       
       
       
        // contact section 
        
    // contact
    var contactTitle
    contactTitle = document.getElementById("contactTitle")
    contactTitle.innerHTML = "Contact";



            





})();

