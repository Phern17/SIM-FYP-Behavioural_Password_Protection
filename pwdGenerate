var passwords;
var order=3;
var ngrams={};
var beginnings=[];
var button;

function preload(){
    passwords=loadKeywords("keywords.txt");
    console.log(passwords);
}

function setup(){
  noCanvas();
  

for(var j=0; j<passwords.length; j++){
  var txt= passwords[j];
  for(var i=0; i<=txt.length-order; i++){
    var gram=txt.substring(i, i + order);
    if(i==0){
      beginnings.push(gram);
    }
    if(!ngrams[gram]) {
      ngrams[gram]=[];
    }
    
    ngrams[gram].push(txt.charAt(i + order));
   
    }
   }
   button=createButton("generate");
   button.mousePressed(markovThis);
   console.log(ngrams);
   }
   
function markovThis() {
   var currentGram = random(beginnings);
   var result= currentGram;
   
   for(var i=0; i<10; i++){
      var possibilities= ngrams[currentGram];
      
      if(!possibilities) {
            break;
      }
      
      var next= random(possibilities);
      result +=next;
      var len=result.length;
      
      currentGram=result.substring(len-order, len);
      }
      
      createP("Generated Password:");
      }
      
      
  

    
