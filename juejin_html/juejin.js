function show(id) {
  var classname = document.getElementsByClassName("navigation");
  for (var i = 0; i < classname.length; i++) {
    classname[i].style.color = "rgb(113, 119, 124)";
  }

  document.getElementById(id).style.color = "rgb(0, 127, 255)";

  var index = 0;
  for (var i = 0; i < classname.length; i++) {
    if (classname[i].style.color == "rgb(0, 127, 255)") {
      index = i;
      break;
    }
  }
  showpart(index);
}

function showpart(index) {
  var classname = document.getElementsByClassName("article");

  for (var i = 0; i < classname.length; i++) {
    classname[i].style.display = "none";
  }

  classname[index].style.display = "block";
}
