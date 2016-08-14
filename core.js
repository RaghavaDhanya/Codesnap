console.log("Entered");
var list=document.getElementsByTagName("pre");
for(var i in list)
{
  var button = document.createElement("button");
  button.id="codesnap_"+i.toString();
  button.addEventListener('click', function()
  {
    copyclick(document.getElementById(this.id).nextElementSibling);
  });

  var textnode = document.createTextNode("Copy");
  button.appendChild(textnode);
  if(list[i].parentNode!=null &&list[i].hasChildNodes())
  list[i].parentNode.insertBefore(button,list[i]);
}
function copyclick(ele)
{
  window.getSelection().removeAllRanges();
  var range = document.createRange();
  range.selectNode(ele)
  window.getSelection().addRange(range);
  try 
  {   
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy ' + msg);  
    saveLocal(ele.textContent);
  } 
  catch(err) 
  {  
    console.log('unable to copy');  
  }    
  window.getSelection().removeAllRanges();  
}
function saveLocal(text)
{ 
  var date= new Date();
  var datestr=date.getDate()+" "+(date.getMonth()+1)+" "+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  chrome.storage.sync.get({"clip":"none"},function(items){
    if(items["clip"].toString()=="none")
    { 

      var clip=[{code:text,timecopy:datestr}];
      chrome.storage.sync.set({ "clip": clip }, function(){
        console.log("saved");
      });
    }
    else
    {
      var arr=items["clip"];
      if(arr.unshift({code:text,timecopy:datestr})>10)
        {
          arr.pop();
        }
      chrome.storage.sync.set({ "clip": arr }, function(){
        console.log("saved");
      });
    }
    });
 
}