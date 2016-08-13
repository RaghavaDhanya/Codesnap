document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('Button');
  checkPageButton.addEventListener('click', function() {
    console.log("clicked");

  }, false);



var myList= document.getElementById('mylist');
for(var i=0;i<10;i++)
{
  li=document.createElement("div");
  li.appendChild(document.createTextNode(i.toString()));
  b=document.createElement("button");
  b.appendChild(document.createTextNode(i.toString()));
  li.appendChild(b);
  li.display="block";
  myList.appendChild(li);

}
}, false);

