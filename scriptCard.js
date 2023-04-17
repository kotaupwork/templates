for (var i = 0; i <4; i++)
{
  var subtitle = document.getElementsByClassName("card-subtitle")[i];
  
    //window.alert(subtitle.getElementsByTagName("span").length);
    //za svaki span se stvore dva tj span i /span
  var createWord = (text, index) => {
  
  var word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  word.classList.add("card-subtitle-word");
  word.style.transitionDelay = `${index * 40}ms`;
  return word;
}

var addWord = (text, index) => subtitle.appendChild(createWord(text, index));

var createSubtitle = text => text.split(" ").map(addWord);
switch (i) {
  case 0:
    createSubtitle("First card");
    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("New line");
    break;
  case 1:
    createSubtitle("Second card");
    
    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("New line");

    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("New line");

    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("...");
    break;
  case 2:
    createSubtitle("Third card");
    subtitle.appendChild(document.createElement("br")); //new line
    createSubtitle("New line");
    break;
  default:
    createSubtitle("Default message");
}
}