function $(a) {
  if(a.includes("#")) return document.getElementById(a.replaceAll('#',''))
  return document.querySelectorAll(a)
}
function hide(element) {
  element.style = 'visibility: hidden;'
}

function show(element) {
  element.style = 'visibility: visible;'
}
function randInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
  For Google Sign In Button
  "<div class='googleSignInButton'></div>"
*/
setTimeout(()=>{
  // Css
  document.body.innerHTML = `<style type="text/css">
.abcRioButton{border-radius:1px;box-shadow:0 2px 4px 0 rgba(0,0,0,.25);-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color .218s,border-color .218s,box-shadow .218s;transition:background-color .218s,border-color .218s,box-shadow .218s;-webkit-user-select:none;-webkit-appearance:none;background-color:#fff;background-image:none;color:#262626;cursor:pointer;outline:none;overflow:hidden;position:relative;text-align:center;vertical-align:middle;white-space:nowrap;width:auto}.abcRioButton:hover{box-shadow:0 0 3px 3px rgba(66,133,244,.3)}.abcRioButtonBlue{background-color:#4285f4;border:none;color:#fff}.abcRioButtonBlue:hover{background-color:#4285f4}.abcRioButtonBlue:active{background-color:#3367d6}.abcRioButtonLightBlue{background-color:#fff;color:#757575}.abcRioButtonLightBlue:active{background-color:#eee;color:#6d6d6d}.abcRioButtonIcon{float:left;}.abcRioButtonBlue .abcRioButtonIcon{background-color:#fff;border-radius:1px}.abcRioButtonSvg{display:block}.abcRioButtonContents{font-family:Roboto,arial,sans-serif;font-size:14px;font-weight:500;letter-spacing:.21px;margin-left:6px;margin-right:6px;vertical-align:top}.abcRioButtonContentWrapper{height:100%;width:100%}.abcRioButtonBlue .abcRioButtonContentWrapper{border:1px solid transparent}.abcRioButtonErrorWrapper,.abcRioButtonWorkingWrapper{display:none;height:100%;width:100%}.abcRioButtonErrorIcon,.abcRioButtonWorkingIcon{margin-left:auto;margin-right:auto}.abcRioButtonErrorState,.abcRioButtonWorkingState{border:1px solid #d5d5d5;border:1px solid rgba(0,0,0,.17);box-shadow:0 1px 0 rgba(0,0,0,.05);color:#262626}.abcRioButtonErrorState:hover,.abcRioButtonWorkingState:hover{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);box-shadow:0 1px 0 rgba(0,0,0,.1)}.abcRioButtonErrorState:active,.abcRioButtonWorkingState:active{border:1px solid #aaa;border:1px solid rgba(0,0,0,.25);box-shadow:inset 0 1px 0 #ddd;color:#262626}.abcRioButtonWorkingState,.abcRioButtonWorkingState:hover{background-color:#f5f5f5}.abcRioButtonWorkingState:active{background-color:#e5e5e5}.abcRioButtonErrorState,.abcRioButtonErrorState:hover{background-color:#fff}.abcRioButtonErrorState:active{background-color:#e5e5e5}.abcRioButtonErrorState .abcRioButtonErrorWrapper,.abcRioButtonWorkingState .abcRioButtonWorkingWrapper{display:block}.abcRioButtonErrorState .abcRioButtonContentWrapper,.abcRioButtonErrorState .abcRioButtonWorkingWrapper,.abcRioButtonWorkingState .abcRioButtonContentWrapper{display:none} .-webkit-keyframes abcRioButtonWorkingIconPathSpinKeyframes {0% {-webkit-transform: rotate(0deg)}}
</style>`+document.body.innerHTML;
  
  var buttons = $('.googleSignInButton');
  for(var button of buttons) {
    button.onclick = ()=>{oauthSignIn();}
    button.innerHTML = `<div class=g-signin2 style=visibility:visible data-gapiscan=true data-onload=true data-onsuccess=onSignIn data-theme=dark data-width=200px id=googleSignIn><div class="abcRioButton abcRioButtonBlue"style=height:36px;width:200px><div class=abcRioButtonContentWrapper><div class=abcRioButtonIcon style=padding:8.4px><div class="abcRioButtonIconImage abcRioButtonIconImage18 abcRioButtonSvgImageWithFallback"style=width:18px;height:18px><svg class=abcRioButtonSvg height=18px version=1.1 viewBox="0 0 48 48"width=18px xmlns=http://www.w3.org/2000/svg><g><path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"fill=#EA4335></path><path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"fill=#4285F4></path><path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"fill=#FBBC05></path><path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"fill=#34A853></path><path d="M0 0h48v48H0z"fill=none></path></g></svg></div></div><span style=font-size:13px;line-height:34px class=abcRioButtonContents><span style=letter-spacing:1px id=connecteddzwydce2b255>Sign in with Google</span></span></div></div></div>`
  }
  console.log("%cLoaded brads webtools v1","color:aqua;font-size:40px;")
},100)

function oauthSignIn() {
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  var form = document.createElement('form');
  form.setAttribute('method', 'GET');
  form.setAttribute('action', oauth2Endpoint);
  var params = {'client_id': '751102573687-lq0v4ovs4lh8jk9vtrvn5cg382p2krr7.apps.googleusercontent.com',
                'redirect_uri': location.origin+"/",
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }
  document.body.appendChild(form);
  form.submit();
}

setInterval(()=>{
  if(location.hash.includes("access_token")) {
    var key = location.hash.split("&")[1];
    var url = key.substring(13,key.length)
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token='+url).then((response) => response.json())
      .then((profileData) => {
        localStorage.profile = JSON.stringify(profileData);
        localStorage.uuid = profileData.name;
    });
    location.hash = ""
  }
  
  try {
    var data = JSON.parse(localStorage.profile);
    if(data) {
      $('#connecteddzwydce2b255').innerHTML = 'Signed in with Google'
    }
  } catch(e) {}
},300)

/*
  Shortens numbers ie 43941 -> 43.9 Thousand
*/
function shortenNumber(num) {
  const unit = Math.floor(Math.round(num / 1.0e+1).toLocaleString().replaceAll(',', '').length)
  var wunit = ["Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion","Quindecillion","Sexdecillion","Septemdecillion","Octodecillion","Novemdecillion","Vigintillion","Unvigintillion","Duovigintillion","Trevigintillion","Quattuorvigintillion","Quinvigintillion","Sexvigintillion","Septvigintillion","Octovigintillion","Nonvigintillion","Trigintillion","Untrigintillion","Duotrigintillion"]
  [Math.floor(unit / 3) - 1],
  funit = Math.abs(Number(num))/Number('1.0e+'+(unit-unit%3));
  return wunit ? funit.toFixed(1).toLocaleString() + ' ' + wunit : num.toFixed(0).toString();
}
/*
 Smoothly goes from one number to another by going to numbers in between
*/
function animateValue(obj, start, end, duration = 800) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = shortenNumber(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function setCookie(cname, cvalue) {
  if (local) {
    localStorage.setItem(cname, cvalue);
    return;
  }
  document.cookie = cname + "=" + cvalue + ";";
}
var local = location.href.includes('file')

function getCookie(cname) {
  if (local) {
    return localStorage.getItem(cname);
  }
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
