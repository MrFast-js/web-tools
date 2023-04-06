function $(thing) {
  if(thing.includes("#")) return document.querySelectorAll(thing)[0]
  return document.querySelectorAll(thing)
}
function hide(element) {
  element.style = 'visibility: hidden;'
}
function show(element) {
  element.style = 'visibility: visible;'
}
console.log("loaded webtools")
async function getJson(url) {
  var json = await(await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)).json();
  return json;
}
async function getText(url) {
  var json = await(await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`));
  return json;
}
function randInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
setTimeout(()=>{
  var buttons = $('.googleSignInButton');
  for(var button of buttons) {
    button.onclick = ()=>{oauthSignIn()}
    button.innerHTML = `<div class=g-signin2 style=visibility:visible data-gapiscan=true data-onload=true data-onsuccess=onSignIn data-theme=dark data-width=200px id=googleSignIn><div class="abcRioButton abcRioButtonBlue"style=height:36px;width:200px><div class=abcRioButtonContentWrapper><div class=abcRioButtonIcon style=padding:8.4px><div class="abcRioButtonIconImage abcRioButtonIconImage18 abcRioButtonSvgImageWithFallback"style=width:18px;height:18px><svg class=abcRioButtonSvg height=18px version=1.1 viewBox="0 0 48 48"width=18px xmlns=http://www.w3.org/2000/svg><g><path d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"fill=#EA4335></path><path d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"fill=#4285F4></path><path d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"fill=#FBBC05></path><path d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"fill=#34A853></path><path d="M0 0h48v48H0z"fill=none></path></g></svg></div></div><span style=font-size:13px;line-height:34px class=abcRioButtonContents><span style=letter-spacing:1px id=connecteddzwydce2b255>Sign in with Google</span></span></div></div></div>`
  }
},100)

function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': '751102573687-lq0v4ovs4lh8jk9vtrvn5cg382p2krr7.apps.googleusercontent.com',
                'redirect_uri': location.href,
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};
  
  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
var shorts = ["","K","M","B","T","Q","Qi","Sext","Sept","Oct","Non","Deci"]
function shortenNumber(n) {
  var digits = (toPlainString(n+"").length)-1;
  
  var index = Math.floor((digits%3)/3+Math.floor(digits/3));
  var total = 1;
  for(var i=0;i<index;i++) {
    total*=1000
  }
  var short = Math.floor((n/total)*10)/10;
  if(index-1>=shorts.length) {
    var difference = Math.abs(shorts.length-index);
    for(var i=0;i<difference;i++) {
      short*=10;
    }
    return short+" "+shorts[shorts.length-1]
  }
  if(index==0) return short;
  return short+" "+shorts[index];
}
function toPlainString(num) {
  return (''+ +num).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function(a,b,c,d,e) {
      return e < 0
        ? b + '0.' + Array(1-e-c.length).join(0) + c + d
        : b + c + d + Array(e-d.length+1).join(0);
    });
}
