function setUpGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "UA-162642839-1", {});
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Check if user isn't opted out
const optOutCookie = getCookie('IZOOK_OPT_OUT');
console.log(optOutCookie);
console.log(document.cookie);
if (optOutCookie != "true") {
  console.log("Set up google analytics");
  setUpGoogleAnalytics();
}

// Make background a random knotris color
const knotrisColors = ["#31EBB6", "#9CBFFB", "#FFAB62", "#EAED82"]; 

// Change colors every 4.5s
setInterval(function changeColor() {
  let randomIndex = Math.floor(Math.random() * Math.floor(knotrisColors.length));
  document.getElementsByTagName("BODY")[0].style.backgroundColor =
  knotrisColors[randomIndex];
}, 4500)

function optOut() {
  window['ga-disable-UA-162642839-1'] = true;
  document.getElementsByClassName("cookieBanner")[0].style.transform = "translateY(0%)";
  document.cookie = "IZOOK_OPT_OUT=true";
  console.log(document.cookie);
  setTimeout(function hideBanner() {
    document.getElementsByClassName("cookieBanner")[0].style.transform = "translateY(100%)"
  }, 10000); 
}