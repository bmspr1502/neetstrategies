var links = [
  "https://www.youtube.com/embed/AWDcSsRxfAs",
  "https://www.youtube.com/embed/ZuaJHdQ3U4c",
  "https://www.youtube.com/embed/K8sDMPgu6rk",
  "https://www.youtube.com/embed/bt9siBbk1So"
]

var content = [
  "💥How To Avoid Distractions🤔- a motivational speech தமிழில்💥 HOW I OVERCAME MY DISTRACTIONS 😫💪",
  "Will NEET 2020 Going to be Postponed Again😱 NTA'S REPLY தமிழில் 😱 இப்போது என்ன செய்வது 🤔 DON'T LOOSE",
  "💥P BLOCK ELEMENTS-💥CRASH COURSE IN 30 MINUTES😱NO FEAR😱SECRETS IN NCERT BOOK EXPLAINED",
  "💥NUCLEUS PHYSICS 💥 DIRECT NCERT LINES MCQS😱Graphs, Formulas, Reactions 😱Most Expected For NEET"

]
function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Remove the background color of all tablinks/buttons
  
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }


  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

function recentwrite(){

   var video = '<div class="video"><iframe width="100%" height="300px" src="'+ links[0]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+content[0]+ '</div>';

  var pdf = '<div class="video"><iframe width="100%" height="300px" src="'+ links[1] +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+ content[1] +'</div>';


  var video3 = '<div class="video"><iframe width="100%" height="300px" src="' + links[2] + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+ content[2] +'</div>';

 
  document.getElementById("recentPosts").innerHTML+= video+pdf+video3;
}

function recentwritehome(){
    var video = '<div class="row"><div class="column"><div class="video">' +'<iframe width="100%" height="300px" src="'+ links[0]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + content[0]+'</div></div>';

    var video2 = '<div class="column"><div class = "video">' + '<iframe width="100%" height="300px" src="'+ links[1]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+content[1]+ '</div></div></div>'
    var pdf = '<div class="row"><div class="column"><div class="video">' + '<iframe width="100%" height="300px" src="'+ links[2]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+content[2]+ '</div></div>';

    var video3='<div class="column"><div class = "video">' + '<iframe width="100%" height="300px" src="'+ links[3]+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + content[3] + '</div></div></div>'

    document.getElementById("recentPosts").innerHTML+= video+video2+pdf+video3;
}