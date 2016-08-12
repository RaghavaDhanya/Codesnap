console.log("Entered");
var list=document.getElementsByTagName("pre");
for(var i in list)
{
  var button = document.createElement("button");
  button.id="codesnap";
  var textnode = document.createTextNode("Copy");
  button.appendChild(textnode);
  if(list[i].parentNode!=null)
  list[i].parentNode.insertBefore(button,list[i]);
}