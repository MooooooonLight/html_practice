function addItem() {
  var listItem = document.getElementById("item").value;

  addOnce(listItem);

  document.getElementById("item").value = "";
}
function addList() {
  document.getElementById("inputDiv").style.display = "block";
}

function addOnce(text) {
  text = text.trim();
  if (text == "") {
    alert("没事干就别填");
    return;
  }

  var tab = document.getElementById("table");

  var lines = tab.innerText.split("\n");

  for (var i = 0; i < lines.length; i += 2) {
    if (text == lines[i]) {
      alert("不要输入重复项");
      return;
    }
  }
  // debugger;
  var oTr = document.createElement("tr");

  var oTh = document.createElement("td");
  var btn = document.createElement("input");
  var btn1 = document.createElement("input");

  btn.type = "checkbox";
  btn1.type = "checkbox";
  btn.className = "finish";
  btn1.className = "sort";
  btn1.style.float = "right";

  btn.onclick = finished;

  btn.style.transition;

  btn1.onclick = sort;

  oTh.innerHTML = text;

  oTh.appendChild(btn);
  oTh.appendChild(btn1);

  oTr.appendChild(oTh);

  tab.appendChild(oTr);
}

function finished() {
  if (this.checked != true) {
    this.checked = true;
  }

  var tr = this.parentNode.parentNode;

  var tbody = tr.parentNode;
  setTimeout(function () {
    tbody.removeChild(tr);
  }, 500);
  // setTimeout(function () {
  //   Delete(tr);
  // }, 500);
}
function ensure() {
  document.getElementById("inputDiv").style.display = "none";
  debugger;
  var aa = document.getElementById("listInput");

  var lines = aa.value.split("\n");

  for (var i = 0; i < lines.length; i++) {
    addOnce(lines[i]);
  }
}

function sort() {
  this.checked = false;

  var aa = document.getElementById("table");

  var td = this.parentNode;

  var lines = aa.innerText.split("\n");

  var temp = td.innerText;

  // debugger;

  if (temp == lines[0]) return;

  for (var i = 2; i < lines.length; i += 2) {
    if (lines[i] == temp) {
      lines.splice(i, 2);
    }
  }

  var res = new Array();

  res[0] = temp;

  for (var i = 0; i < lines.length; i += 2) {
    res[i / 2 + 1] = lines[i];
  }

  for (var i = 0; i < res.length; i++) {
    aa.children[i].children[0].childNodes[0].data = res[i];
  }
}

function OnTextChanged() {
  if (event.keyCode == 13) {
    //判断是否为回车键，Event是window对象的一个属性，是全局的。
    event.keyCode = 0; //屏蔽回车键
    event.returnValue = false;
    alert("Hello world!");
  }
}
