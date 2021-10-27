function radio_status(id) {
  document.getElementById(id).checked = "checked";
}
function searchSet() {
  document.getElementById("top_right_set_searchset").style.display = "block";
  document.getElementById("advancedSearch").style.display = "none";
  document.getElementById("homeSet").style.display = "none";
}
function advSearch() {
  document.getElementById("top_right_set_searchset").style.display = "none";
  document.getElementById("advancedSearch").style.display = "block";
  document.getElementById("homeSet").style.display = "none";
}
function homeSet() {
  document.getElementById("top_right_set_searchset").style.display = "none";
  document.getElementById("advancedSearch").style.display = "none";
  document.getElementById("homeSet").style.display = "block";
}
function set1() {
  document.getElementById("top_right_set").style.display = "block";
  searchSet();
}
function set2() {
  document.getElementById("top_right_set").style.display = "block";
  advSearch();
}
function close() {
  document.getElementById("top_right_set").style.display = "none";
}
