document.addEventListener('DOMContentLoaded', function() {
  
chrome.storage.sync.get({"clip":"none"},function(items){
    if(items["clip"].toString()!="none")
    { 
      var data=items["clip"];
      console.log(data);
      var myList= document.getElementById('mylist');
      for(var j=0;j<data.length;j++)
      {
        li=document.createElement("div");
        div=document.createElement("div");
        div.id="code";
        span=document.createElement("span");
        pre=document.createElement("pre");
        pre.appendChild(document.createTextNode(data[j].code.toString()));
        pre.id="hide"+j.toString();
       span.addEventListener('click', function()
        {
          collapse(this.id.slice(4));
        });
        span.id="list"+j.toString();
        span.appendChild(document.createTextNode((j+1)+ ") "+data[j].timecopy.toString()));
        li.appendChild(span);
        b=document.createElement("button");
        b.id="b"+j.toString();
        b.appendChild(document.createTextNode("copy"));
        b.addEventListener('click', function()
        { 
          copyclick(document.getElementById("hide"+this.id.slice(1)));
        });
        li.appendChild(b);
        div.appendChild(pre);
        myList.appendChild(li);
        mylist.appendChild(div);

      }
      for(var i=data.length;i<10;i++)
      {
        li=document.createElement("div");
        li.appendChild(document.createTextNode(""));
        myList.appendChild(li);
      } 
    }});


}, false);

function collapse(id) {
  console.log(id);
 if(document.getElementById("hide"+id).style.display=="inline")
  document.getElementById("hide"+id).style.display="none";
  else
    document.getElementById("hide"+id).style.display="inline";

}
function copyclick(ele)
{
  if(ele.style.display!="inline")
  collapse(ele.id.slice(4)); 
  window.getSelection().removeAllRanges();
  var range = document.createRange();
  range.selectNode(ele)
  window.getSelection().addRange(range);
  try 
  {   
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy ' + msg);  
  } 
  catch(err) 
  {  
    console.log('unable to copy');  
  }    
  window.getSelection().removeAllRanges();  
}