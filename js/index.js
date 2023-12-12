
var zorar= document.getElementById("zorar")
var newparagraph= document.getElementById("quote")
var newwriter= document.getElementById("writer")

var elquote= [
    {
      content:'"Be yourself; everyone else is already taken."',  
      name: "-- Oscar Wilde"
    },
    {
      content:'"Two things are infinite: the universe and human stupidity; and Im not sure about the universe."',  
      name: "-- Albert Einstein"
    },
    {
      content:'"So many books, so little time."',  
      name: "-- Frank Zappa"
    },
    {
      content:'"You only live once, but if you do it right, once is enough."',  
      name: "-- Mae West"
    },
    {
      content:'"Nothing in life is promised except death."',  
      name: "-- kanye west"
    },
    {
      content:'"In three words I can sum up everything Ive learned about life: it goes on."',  
      name: "-- Robert Frost"
    },
    {
      content:'"If you tell the truth, you dont have to remember anything."',  
      name: "-- Mark Twain"
    },
]

zorar.addEventListener("click" , function(){
    var random 
        random= Math.round( Math.random()*6)
    console.log(random);
    newparagraph.innerText= elquote[random].content ;
    newwriter.innerText= elquote[random].name;
});

// var i=0
// zorar.addEventListener("click" , function(){
//     i=i+1

//       newparagraph.innerText= elquote[i].content ;
//       newwriter.innerText= elquote[i].name; 
      
    
// });

