document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('Button');
  checkPageButton.addEventListener('click', function() {
    console.log("clicked");

  }, false);

chrome.storage.sync.get({"clip":"none"},function(items){
    if(items["clip"].toString()!="none")
    { 
      var data=items["clip"];
      console.log(data);
      var myList= document.getElementById('mylist');
      for(var j=0;j<data.length;j++)
      {
        li=document.createElement("div");
        span=document.createElement("span");
        span.onclick=function(){console.log("span");};
        span.id="list";
        span.appendChild(document.createTextNode((data[j]).timecopy.toString()));
        li.appendChild(span);
        b=document.createElement("button");
        b.appendChild(document.createTextNode("copy"));
        li.appendChild(b);
        myList.appendChild(li);

      }
      for(var i=data.length;i<10;i++)
      {
        li=document.createElement("div");
        li.appendChild(document.createTextNode("Empty"));
        myList.appendChild(li);
      } 
    }});

}, false);

