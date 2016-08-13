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
  if(list[i].parentNode!=null)
  list[i].parentNode.insertBefore(button,list[i]);
}
function copyclick(ele)
{
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