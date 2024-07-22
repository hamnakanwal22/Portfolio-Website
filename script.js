var tablinks = document.getElementsByClassName("tab-links");
var tabcontects = document.getElementsByClassName("tab-contects");
function opentabs(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontect of tabcontects) {
    tabcontect.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
