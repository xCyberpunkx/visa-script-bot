// ==UserScript==
// @name        MR REBOT £ BY HELPER
// @version     1.2.2
// @description BLS Spain updated by mr robot dz
// @match       https://algeria.blsspainglobal.com/*
// @require     https://cdn.jsdelivr.net/npm/alertifyjs@1.14.0/build/alertify.min.js
// @require     https://unpkg.com/axios@1.0.0-alpha.1/dist/axios.min.js
// @match       https://mail.google.com/*
// @grant       unsafeWindow
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_addValueChangeListener
// @grant       GM_removeValueChangeListener
// @icon        https://cdn.pixabay.com/animation/2022/09/13/17/55/17-55-34-595_512.gif
// ==/UserScript==

'use strict'

//const UserBotkey ='*******';

//##############  Ajouter des Utilisateur Ici  ########################################

/*

we change category to work by index data set
dropdown menu first chose it mean 0 the secound it mean 1 is the same for all dropdown menu
modify by mr robot dz 18 21/04/2025


*/



const applicants = [

  {
    name: 'nom prenom',
    mail: 'EMAIL@gmail.com',
      password: '++++++', //ur password
      profilePhotoId: 'XXXXXXXXXXXX',//id for ur photo
      applicantCount: 1,// number of applicant 1 for individual 2 for familly
      categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
      locationIndex: 1,   ////chang by index algeria ---> 1 oran ----> 0
      visaTypeIndex: 3,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
      visaSubTypeIndex: 2, //
      clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
     },

  // tous les category alger 

//  ESTONIA
  /*

  ESTONIA
  { 
    name: 'yourname',
    mail: 'your email',
      password: 'ur password', //ur password
      profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
      applicantCount: 1,// number of applicant 1 for individual 2 for familly
      categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
      locationIndex: 0,   ////chang by index algeria ---> 1 oran ----> 0
      visaTypeIndex: 0,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
      visaSubTypeIndex: 0, //
      clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
     },

// ALG 1 
     */
    /* ALG 1 
     {
        name: 'yourname',
        mail: 'your email',
          password: 'ur password', //ur password
          profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
          applicantCount: 1,// number of applicant 1 for individual 2 for familly
          categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
          locationIndex: 1,   ////chang by index algeria ---> 1 oran ----> 0
          visaTypeIndex: 2,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
          visaSubTypeIndex: 0, //
          clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
         },
         */1

// ALG 2          
        /*
         {
            name: 'yourname',
            mail: 'your email',
              password: 'ur password', //ur password
              profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
              applicantCount: 1,// number of applicant 1 for individual 2 for familly
              categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
              locationIndex: 1,   ////chang by index algeria ---> 1 oran ----> 0
              visaTypeIndex: 3,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
              visaSubTypeIndex: 0, //
              clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
             },

             */
// ALG 3             
            /*
             {
                name: 'yourname',
                mail: 'your email',
                  password: 'ur password', //ur password
                  profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
                  applicantCount: 1,// number of applicant 1 for individual 2 for familly
                  categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
                  locationIndex: 1,   ////chang by index algeria ---> 1 oran ----> 0
                  visaTypeIndex: 3,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
                  visaSubTypeIndex: 1, //
                  clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
                 },

                 */
// ALG 4            
            /*
             {
                name: 'your name',
                mail: 'your email',
                  password: 'ur password', //ur password
                  profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
                  applicantCount: 1,// number of applicant 1 for individual 2 for familly
                  categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
                  locationIndex: 1,   ////chang by index algeria ---> 1 oran ----> 0
                  visaTypeIndex: 3,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
                  visaSubTypeIndex: 2, //
                  clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
                 },

                 */
                //////////////////////////////////////////////ORAN /////////////////////////////////////////////////////////

  // tous les category alger 



// ORN 1 

    /* ORN 1 
     {
        name: 'your name',
        mail: 'mrscripttreterterterterthgfhfghedz@gmail.com',
          password: '12199tryrtyrtyrt4@Hh', //ur password
          profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
          applicantCount: 1,// number of applicant 1 for individual 2 for familly
          categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
          locationIndex: 0,   ////chang by index algeria ---> 1 oran ----> 0
          visaTypeIndex: 0,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
          visaSubTypeIndex: 0, //
          clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
         },
         */


// ORN 2          
        /*
         {
            name: 'your name',
            mail: 'mrscripttreterterterterthgfhfghedz@gmail.com',
              password: '12199tryrtyrtyrt4@Hh', //ur password
              profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
              applicantCount: 1,// number of applicant 1 for individual 2 for familly
              categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
              locationIndex: 0,   ////chang by index algeria ---> 1 oran ----> 0
              visaTypeIndex: 1,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
              visaSubTypeIndex: 0, //
              clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
             },

             */
// ORN 3             
            /*
             {
                name: 'your name',
                mail: 'mrscripttreterterterterthgfhfghedz@gmail.com',
                  password: '12199tryrtyrtyrt4@Hh', //ur password
                  profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
                  applicantCount: 1,// number of applicant 1 for individual 2 for familly
                  categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
                  locationIndex: 0,   ////chang by index algeria ---> 1 oran ----> 0
                  visaTypeIndex: 1,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
                  visaSubTypeIndex: 1, //
                  clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
                 },

                 */
// ORN 4            
            /*
             {
                name: 'your name',
                mail: 'mrscripttreterterterterthgfhfghedz@gmail.com',
                  password: '12199tryrtyrtyrt4@Hh', //ur password
                  profilePhotoId: 'e5111634-7ac4-4e9b-a1db-52d7152d0027',//id for ur photo
                  applicantCount: 1,// number of applicant 1 for individual 2 for familly
                  categoryIndex: 2,   // 0 = Normal, 1 = Premium, 2 = Prime Time
                  locationIndex: 0,   ////chang by index algeria ---> 1 oran ----> 0
                  visaTypeIndex: 1,   //location alger ---> 0 for Schengen Visa 1 for estonia 2 first demande 3 Visa renewal / renouvellement de visa location oran ----> 0 first demande ------> 1 Visa renewal / renouvellement de visa
                  visaSubTypeIndex: 2, //
                  clickbtnsubmit:true,// true ---> click button submite      false ---> to click manually on submite button
                 },

                 */
                
]
//####################################################################################

const captcha = {
  enabled: 'on',
  apiKey: 'YOUR-API-KEY',  //API noCAPTCHAAI ******
}

//##############  ne rien Changer  ##############
const autoSubmitForms = {
  login: 'on',
  loginCaptcha: 'on',
  appointmentCaptcha: 'on',
  visaType: 'on',
  slotSelection: 'on',
  applicantSelection: 'on',
}

    var locationName = applicants[0].locationName;
    var visaTypeName = applicants[0].visaTypeName;
    var visaSubName = applicants[0].visaSubName;
    var membersName = applicants[0].membersName;
    var categoryName = localStorage.getItem ('Prime Time') || 'Prime Time';



if (window.location.href.startsWith("https://algeria.blsspainglobal.com/DZA/Appointment/NewAppointment?msg=")) {

  // Load saved categoryIndex
  const storedCategoryIndex = parseInt(localStorage.getItem('categoryName'), 10);
  if (!isNaN(storedCategoryIndex)) {
    applicants[0].categoryIndex = storedCategoryIndex;
  }

  function changeCategory(newCategoryIndex) {
    applicants[0].categoryIndex = newCategoryIndex;
    localStorage.setItem('categoryName', newCategoryIndex);
    window.location.href = "/DZA/appointment/newappointment";
  }

  const categories = [
    { name: 'Normal', className: 'btn btn-success', index: 0 },
    { name: 'Premium', className: 'btn btn-danger', index: 1 },
    { name: 'Prime Time', className: 'btn btn-info', index: 2 }
  ];

  const buttonContainer = document.createElement("div");
  buttonContainer.style.textAlign = "center";
  buttonContainer.style.margin = "10px auto";

  categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = `Change To : ${category.name}`;
    button.className = category.className;
    button.style.margin = "5px";
    button.onclick = () => changeCategory(category.index);
    buttonContainer.appendChild(button);
  });

  const targetDiv = document.querySelector("#div-main");
  if (targetDiv) {
    targetDiv.parentNode.insertBefore(buttonContainer, targetDiv);
  }

  const tryAgainLink = Array.from(document.querySelectorAll("a.btn.btn-primary"))
    .find(link => link.textContent.trim() === "Try Again" && link.getAttribute("href") === "/DZA/appointment/newappointment");

  if (tryAgainLink) {
    let countdown = 9999;
    let isPaused = false;

    const currentCatIndex = parseInt(localStorage.getItem('categoryName'), 10);
    const categoryName = ['Normal', 'Premium', 'Prime Time'][currentCatIndex] || 'Unknown';

    tryAgainLink.textContent = `Keep trying in the Actual Category: ${categoryName} in : (${countdown}s)`;
    tryAgainLink.style.width = 'auto';

    const pauseButton = document.createElement('button');
    pauseButton.textContent = 'Pause';
    pauseButton.style.marginLeft = '10px';
    pauseButton.className = 'btn btn-secondary ms-2';
    pauseButton.innerHTML = '<i class="bi bi-pause-fill"></i>';
    tryAgainLink.parentNode.insertBefore(pauseButton, tryAgainLink.nextSibling);

    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseButton.innerHTML = isPaused ? '<i class="bi bi-play-fill"></i>' : '<i class="bi bi-pause-fill"></i>';
    });

    const countdownInterval = setInterval(() => {
      if (!isPaused) {
        countdown -= 1;
        tryAgainLink.textContent = `Keep trying in the Actual Category: ${categoryName} (${countdown}s)`;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          tryAgainLink.click();
        }
      }
    }, 1000);
  }
}
//#########################################################

setTimeout(() => {
    $('.modal').modal('hide');
}, 1000);

setTimeout(() => {
    const button1 = document.querySelector('.btn.btn-success.btn-block[type="button"][data-bs-dismiss="modal"][onclick="onBioDisclaimerAccept();"]');
    if (button1) button1.click();

    setTimeout(() => {
        const button2 = document.querySelector('.btn.btn-success.btn-block[type="button"][data-bs-dismiss="modal"][onclick="onDpAccept();"]');
        if (button2) button2.click();
    }, 600);
}, 800);



if (window.location.href === "https://algeria.blsspainglobal.com/DZA/account/changepassword?alert=True") {
        window.location.href = "https://algeria.blsspainglobal.com/DZA/appointment/appointmentcaptcha";
    }

if (window.location.href === "https://algeria.blsspainglobal.com/DZA/Appointment/NewAppointment?msg=lfJQVX2NULaGjPKL6fTAx8BtSHJVTsEgaj1lwdqOSsc%3D") {
    window.location.href = "https://algeria.blsspainglobal.com/DZA/appointment/newappointment";
    }
//////////////////////////////////////////////////////////// dont touch anything //////////////////////////////////////////////////////
function _0x1d63(){const _0x3a460e=['610536cVOVkO','width','fontFamily','50%','style','201sEVEzY','body','Telegram\x20Group\x20Logo','textDecoration','telegram-box','28HReQMZ','150px','3585672jLpGpC','15fEXzid','#000','createElement','32px','30px','target','fixed','alignItems','display','15px\x2015px','position','9495112oMXrPL','zIndex','boxShadow','color','none','9189lPNeQm','top','appendChild','borderRadius','img','center','447831drMWzk','padding','6234SvLJjV','10px','_blank','href','https://t.me/helpvisadz','textContent','height','1614280AHaINJ','fontSize','alt','https://static.vecteezy.com/system/resources/previews/023/741/142/non_2x/telegram-logo-icon-social-media-icon-free-png.png','0\x200\x2010px\x20rgba(0,0,0,0.6)','#0f0','4980umGwzO'];_0x1d63=function(){return _0x3a460e;};return _0x1d63();}function _0x5698(_0x1a2bec,_0x301adb){const _0x1d6374=_0x1d63();return _0x5698=function(_0x569845,_0x4f99eb){_0x569845=_0x569845-0x1b6;let _0x50c473=_0x1d6374[_0x569845];return _0x50c473;},_0x5698(_0x1a2bec,_0x301adb);}(function(_0x6be28b,_0x59f4a5){const _0x5ed2dc=_0x5698,_0x266f5b=_0x6be28b();while(!![]){try{const _0x4e5339=-parseInt(_0x5ed2dc(0x1be))/0x1+-parseInt(_0x5ed2dc(0x1c0))/0x2*(-parseInt(_0x5ed2dc(0x1d3))/0x3)+-parseInt(_0x5ed2dc(0x1ce))/0x4*(parseInt(_0x5ed2dc(0x1db))/0x5)+parseInt(_0x5ed2dc(0x1da))/0x6+parseInt(_0x5ed2dc(0x1d8))/0x7*(-parseInt(_0x5ed2dc(0x1c7))/0x8)+-parseInt(_0x5ed2dc(0x1b8))/0x9*(-parseInt(_0x5ed2dc(0x1cd))/0xa)+parseInt(_0x5ed2dc(0x1e6))/0xb;if(_0x4e5339===_0x59f4a5)break;else _0x266f5b['push'](_0x266f5b['shift']());}catch(_0x103dc6){_0x266f5b['push'](_0x266f5b['shift']());}}}(_0x1d63,0x7194c));function createTelegramBox(){const _0x2813e7=_0x5698,_0x5b9bbb=document[_0x2813e7(0x1dd)]('div');_0x5b9bbb['id']=_0x2813e7(0x1d7),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1e5)]=_0x2813e7(0x1e1),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1b9)]=_0x2813e7(0x1d9),_0x5b9bbb[_0x2813e7(0x1d2)]['right']='10px',_0x5b9bbb[_0x2813e7(0x1d2)]['background']=_0x2813e7(0x1dc),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1b6)]=_0x2813e7(0x1cc),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1bf)]=_0x2813e7(0x1e4),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1c8)]=_0x2813e7(0x1df),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1d0)]='monospace',_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1bb)]=_0x2813e7(0x1c1),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1e7)]=0x1869f,_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1e8)]=_0x2813e7(0x1cb),_0x5b9bbb[_0x2813e7(0x1d2)][_0x2813e7(0x1e3)]='flex',_0x5b9bbb['style'][_0x2813e7(0x1e2)]=_0x2813e7(0x1bd),_0x5b9bbb['style']['gap']=_0x2813e7(0x1c1);const _0x2e22af=document[_0x2813e7(0x1dd)](_0x2813e7(0x1bc));_0x2e22af['src']=_0x2813e7(0x1ca),_0x2e22af[_0x2813e7(0x1c9)]=_0x2813e7(0x1d5),_0x2e22af[_0x2813e7(0x1d2)][_0x2813e7(0x1cf)]=_0x2813e7(0x1de),_0x2e22af[_0x2813e7(0x1d2)][_0x2813e7(0x1c6)]=_0x2813e7(0x1de),_0x2e22af[_0x2813e7(0x1d2)][_0x2813e7(0x1bb)]=_0x2813e7(0x1d1);const _0x2cfdf0=document[_0x2813e7(0x1dd)]('a');_0x2cfdf0[_0x2813e7(0x1c3)]=_0x2813e7(0x1c4),_0x2cfdf0[_0x2813e7(0x1c5)]='Modified\x20by\x20group\x20helper',_0x2cfdf0['style'][_0x2813e7(0x1b6)]='#0f0',_0x2cfdf0['style'][_0x2813e7(0x1d6)]=_0x2813e7(0x1b7),_0x2cfdf0[_0x2813e7(0x1e0)]=_0x2813e7(0x1c2),_0x5b9bbb[_0x2813e7(0x1ba)](_0x2e22af),_0x5b9bbb['appendChild'](_0x2cfdf0),document[_0x2813e7(0x1d4)]['appendChild'](_0x5b9bbb);}createTelegramBox();


function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

loadCSS("https://cdn.jsdelivr.net/npm/alertifyjs@1.14.0/build/css/alertify.min.css");
loadCSS("https://cdn.jsdelivr.net/npm/alertifyjs/build/css/themes/default.min.css");

 alertify.minimalDialog || alertify.dialog('Confirmation',function(){
    return {
        main:function(content){
            this.setContent(content);
        }
    }
});
const global = unsafeWindow;

function matchPath (pattern, pathname = location.pathname) {
  return compileMatcher(pattern).test(pathname);

  function compileMatcher (pattern) {
    const source =
        '^'
        + pattern
          .replace(/\/*$/, '')
          .replace(/^\/*/, '/')
          .replaceAll(/[\\.*+^${}|()[\]]/g, '\\$&')
        + '\/*$';
    return new RegExp(source, 'i');
  }
}

function shuffleArray (array) {
  let index = -1;
  const length = array.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const rand = random(index, lastIndex);
    [array[index], array[rand]] = [array[rand], array[index]];
  }
  return array;
}

function reloadPageIfError() {
    const errorTitles = [
        "504 Gateway Time-out",
        //"Too Many Requests",
        "Application Temporarily Unavailable",
        "502 Bad Gateway",
        "503 Service Temporarily Unavailable",
        "Service Unavailable",
        "500 Internal Server Error",
        "Database error",
        "FastCGI Error",
        "The connection has timed out",
        "Problemas al cargar la página",
        "Error 502 (Server Error)!!1",
        "403 Forbidden",
        "Service Unavailable','403 ERROR",
        "502 Bad Gateway"
    ];

    const pageTitle = document.title;

    if (errorTitles.includes(pageTitle)) {
        setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
}

reloadPageIfError();

function random (lower, upper) {
  return lower + Math.floor(Math.random() * (upper - lower + 1));
}

////////////////////////////////// dont toch anythink

const _0x3521cb=_0xc4bf;(function(_0x7be55c,_0x33b1b7){const _0x3c2d18=_0xc4bf,_0x5193c6=_0x7be55c();while(!![]){try{const _0x3f9808=-parseInt(_0x3c2d18(0xcd))/0x1+-parseInt(_0x3c2d18(0xab))/0x2*(-parseInt(_0x3c2d18(0xa5))/0x3)+-parseInt(_0x3c2d18(0xb5))/0x4+parseInt(_0x3c2d18(0xd3))/0x5+parseInt(_0x3c2d18(0xba))/0x6+parseInt(_0x3c2d18(0xde))/0x7+-parseInt(_0x3c2d18(0xa3))/0x8;if(_0x3f9808===_0x33b1b7)break;else _0x5193c6['push'](_0x5193c6['shift']());}catch(_0x57b958){_0x5193c6['push'](_0x5193c6['shift']());}}}(_0x1b62,0xc35eb));function _0xc4bf(_0x1c58a6,_0x137efa){const _0x1b62e1=_0x1b62();return _0xc4bf=function(_0xc4bfc6,_0x61725){_0xc4bfc6=_0xc4bfc6-0xa0;let _0x49da5b=_0x1b62e1[_0xc4bfc6];return _0x49da5b;},_0xc4bf(_0x1c58a6,_0x137efa);}function _0x1b62(){const _0xf00610=['clickbtnsubmit','find','action','call','fillForm','label','\x20.k-item','4539820FzLkZN','_listbox','appendTo','getAttribute','forEach','5745630NUlZCc','click','textContent','Submit\x20action\x20not\x20performed:\x20Conditions\x20not\x20met\x20or\x20elements\x20not\x20found','includes','Location','val','then','categoryIndex','submit','getComputedStyle','checked','#members','Individual','/dza/Appointment/visatype','dropdown','.global-overlay-loader','children','span.k-select','1068105wbIlgw','querySelectorAll','test','#AppointmentFor','Family','categoryName','573015FdSctH','form\x20.mb-3','Value','hide','Number\x20Of\x20Members',':text','prop','querySelector','Visa\x20Sub\x20Type','getItem','trim','10888927sgajoC','applicantsNoData','#btnSubmit','labelId','startsWith','substring','error','fillRadioSelection','Name','1116240tXHFbz','Form\x20filled\x20successfully\x20with\x20the\x20following\x20options:','96573OYwxdL','show','log','form','Form\x20submitted\x20directly\x20after\x20OnSubmitVisaType()','Category','32qVyvMf','visaType','.avatar\x20+\x20>\x20p.small'];_0x1b62=function(){return _0xf00610;};return _0x1b62();}class CAT{#applicant;['start'](){const _0x5bdf3e=_0xc4bf;console[_0x5bdf3e(0xa7)](this['constructor']['name']+'\x20started'),this.#hidePreloader(),this.#makeLoaderDismissable(),this.#applicant=this.#getActiveApplicant()||applicants[0x0],this.#applicant?this[_0x5bdf3e(0xb2)]():console[_0x5bdf3e(0xa0)]('No\x20active\x20applicant\x20found');}#hidePreloader(){const _0x36c3db=_0xc4bf;$('.preloader')[_0x36c3db(0xd6)]();}#makeLoaderDismissable(){const _0xdfb56=_0xc4bf;$('<button\x20class=\x22btn\x20btn-secondary\x20position-absolute\x20top-50\x20start-50\x20translate-middle-x\x20mt-5\x22\x20onclick=\x22window.HideLoader();\x22>Hide\x20Loader</button>')[_0xdfb56(0xb7)](_0xdfb56(0xca));}#getActiveApplicant(){const _0x3933ef=_0xc4bf,_0x11377a=$(_0x3933ef(0xad))['text']();return applicants[_0x3933ef(0xaf)](({mail:_0x38fa0d})=>_0x38fa0d===_0x11377a);}['fillForm'](){const _0xd58a8a=_0xc4bf,_0x5e622e=this.#applicant;if(!_0x5e622e)return;const _0x29a5c3=parseInt(localStorage[_0xd58a8a(0xdc)](_0xd58a8a(0xd2)),0xa);!isNaN(_0x29a5c3)&&(_0x5e622e[_0xd58a8a(0xc2)]=_0x29a5c3);const {categoryIndex:_0x7dbf63,locationIndex:_0x35d158,visaTypeIndex:_0x2b64f7,visaSubTypeIndex:_0x4ceca8,applicantCount:_0xc7d74f,clickbtnsubmit:_0x27f492}=_0x5e622e,_0x4f393b=document[_0xd58a8a(0xce)](_0xd58a8a(0xd4));let _0x276cd9,_0x28e928,_0x1eaf3d,_0xc7abb8,_0x2e9e55;_0x4f393b[_0xd58a8a(0xb9)](_0x2ecab8=>{const _0x55edf9=_0xd58a8a,_0x107830=window[_0x55edf9(0xc4)](_0x2ecab8);if(_0x107830['display']!=='none'){const _0x58dd80=_0x2ecab8[_0x55edf9(0xda)](_0x55edf9(0xb3)),_0x5f43f6=_0x2ecab8[_0x55edf9(0xda)](_0x55edf9(0xcc));if(_0x58dd80&&_0x5f43f6){const _0x942bd2=_0x58dd80[_0x55edf9(0xbc)][_0x55edf9(0xdd)](),_0x3daef9=_0x58dd80[_0x55edf9(0xb8)]('for');if(_0x942bd2[_0x55edf9(0xbe)](_0x55edf9(0xaa)))_0x276cd9={'dropdown':_0x5f43f6,'labelId':_0x3daef9};else{if(_0x942bd2['includes'](_0x55edf9(0xbf)))_0x28e928={'dropdown':_0x5f43f6,'labelId':_0x3daef9};else{if(_0x942bd2[_0x55edf9(0xbe)]('Visa\x20Type'))_0x1eaf3d={'dropdown':_0x5f43f6,'labelId':_0x3daef9};else{if(_0x942bd2['includes'](_0x55edf9(0xdb)))_0xc7abb8={'dropdown':_0x5f43f6,'labelId':_0x3daef9};else{if(_0x942bd2[_0x55edf9(0xbe)](_0x55edf9(0xd7)))_0x2e9e55={'dropdown':_0x5f43f6,'labelId':_0x3daef9};}}}}}}});const _0x87ade0=(_0x4675cb,_0x15cc98,_0x476000)=>{return new Promise(_0x3f0d4d=>{const _0x29eefa=_0xc4bf;if(_0x4675cb){_0x4675cb[_0x29eefa(0xbb)]();const _0x4cdb53=document['querySelectorAll'](_0x15cc98+_0x29eefa(0xb4));_0x4cdb53[_0x476000]&&_0x4cdb53[_0x476000][_0x29eefa(0xbb)](),_0x3f0d4d();}else _0x3f0d4d();});},_0x28c266=async()=>{const _0x99e650=_0xd58a8a;if(_0x276cd9)await _0x87ade0(_0x276cd9[_0x99e650(0xc9)],'#'+_0x276cd9['labelId']+_0x99e650(0xb6),_0x7dbf63);if(_0x28e928)await _0x87ade0(_0x28e928['dropdown'],'#'+_0x28e928['labelId']+_0x99e650(0xb6),_0x35d158);if(_0x1eaf3d)await _0x87ade0(_0x1eaf3d['dropdown'],'#'+_0x1eaf3d['labelId']+_0x99e650(0xb6),_0x2b64f7);if(_0xc7abb8)await _0x87ade0(_0xc7abb8[_0x99e650(0xc9)],'#'+_0xc7abb8['labelId']+_0x99e650(0xb6),_0x4ceca8);this[_0x99e650(0xa1)]();_0xc7d74f>0x1&&_0x2e9e55&&await _0x87ade0(_0x2e9e55[_0x99e650(0xc9)],'#'+_0x2e9e55[_0x99e650(0xe1)]+'_listbox',_0xc7d74f-0x2);const _0x27c905=document['querySelector'](_0x99e650(0xe0));if(/on|true/[_0x99e650(0xcf)](autoSubmitForms?.[_0x99e650(0xac)])&&_0x27c905&&_0x5e622e[_0x99e650(0xae)]){const _0x1a6cdc=OnSubmitVisaType[_0x99e650(0xb1)](_0x27c905);if(_0x1a6cdc!==![]){const _0x1611eb=_0x27c905[_0x99e650(0xa8)]||_0x27c905['closest'](_0x99e650(0xa8));_0x1611eb?(_0x1611eb[_0x99e650(0xb0)]=_0x99e650(0xc8),_0x1611eb[_0x99e650(0xc3)](),console[_0x99e650(0xa7)](_0x99e650(0xa9))):console[_0x99e650(0xa0)]('Form\x20not\x20found');}else console['error']('OnSubmitVisaType()\x20returned\x20false,\x20form\x20not\x20submitted');}else console[_0x99e650(0xa7)](_0x99e650(0xbd));};_0x28c266()[_0xd58a8a(0xc1)](()=>{const _0x4dfbfa=_0xd58a8a;console[_0x4dfbfa(0xa7)](_0x4dfbfa(0xa4),{'category':_0x276cd9,'location':_0x28e928,'visaType':_0x1eaf3d,'visaSubType':_0xc7abb8,'numberOfMembers':_0x2e9e55});});}[_0x3521cb(0xa1)](){const _0x2f59f4=_0x3521cb,_0x570708=this.#applicant?.['applicantCount']||0x1,_0xa0211e=_0x570708>0x1?_0x2f59f4(0xd1):_0x2f59f4(0xc7);$(_0x2f59f4(0xd0))[_0x2f59f4(0xc0)](_0xa0211e);const _0x5d3a35=$(':radio:visible')['filter']('[value=\x22'+_0xa0211e+'\x22]')[_0x2f59f4(0xd9)](_0x2f59f4(0xc5),!![]);if(_0xa0211e==='Family'){const _0xef560=_0x5d3a35[_0x2f59f4(0xd9)]('id')[_0x2f59f4(0xe3)](_0xa0211e['length']);$(_0x2f59f4(0xc6)+_0xef560)[_0x2f59f4(0xa6)]()[_0x2f59f4(0xcb)](_0x2f59f4(0xd8))[_0x2f59f4(0xc0)](global[_0x2f59f4(0xdf)]['find'](_0x39ab08=>_0x39ab08[_0x2f59f4(0xa2)][_0x2f59f4(0xe2)](_0x570708))?.[_0x2f59f4(0xd5)]);}}}


////////////////////////////////////////////////





class LoginBot {
  start () {
    console.log(`${this.constructor.name} started`)

    this.#hidePreloader()
    this.#makeLoaderDismissable()
    this.#removeRandomnessFromUi()
    this.#enableCopyPasteInInputs()
    this.#setReturnUrl()
    this.#injectLoginFeature()
    this.#injectProfilePhotoUploadFeature()

  }

  #hidePreloader () { $('.preloader').hide() }

  #makeLoaderDismissable () {
    $(`
      <button class="btn btn-secondary position-absolute top-50 start-50 translate-middle-x mt-5"
              onclick="window.HideLoader();">
        Hide Loader</button>
    `).appendTo('.global-overlay-loader')
  }

  #removeRandomnessFromUi () {
    // Center main content
    $('#div-main > .container > .row > [class^=col-]').hide()
    $('#div-main > .container > .row > :has(form)').addClass('mx-auto')

    // Remove random top padding
    $(':has(> form)').removeAttr('class')
  }

  #enableCopyPasteInInputs () { $('.entry-disabled:visible').on('copy paste', evt => evt.stopImmediatePropagation()) }

  #setReturnUrl () { $('#ReturnUrl').val($('.new-app-active').attr('href')) }

  #injectLoginFeature () {
    $(`
      <select id="_applicants" class="form-select form-select-lg mt-2">
        <option selected disabled>Select a User</option>
        ${applicants.map(({ name, mail }) => `<option value="${mail}">${name || mail}</option>`)}
      </select>
    `)
      .insertAfter('.text-center:has(img[alt=logo])')
      .on('change', () => this.#fillForm())
  }

  #fillForm () {
    const selectedMail = $('#_applicants').val()
    const applicant = applicants.find(({ mail }) => mail === selectedMail)

    $(':text[name]:visible').val(applicant?.mail)
    applicant?.profilePhotoId && $('#_profilePhoto').attr('src', `/DZA/query/getfile?fileid=${applicant.profilePhotoId}`)
    ;/on|true/.test(autoSubmitForms?.login) && $('#btnVerify').trigger('click')
  }

  #injectProfilePhotoUploadFeature () {
    $(`
      <div class="vstack align-items-center gap-2">
        <img id="_profilePhoto" class="img-thumbnail object-fit-cover" src="/assets/images/avatar/01.jpg"
             style="width: 128px; height: 128px;">
        <div class="input-group input-group-sm flex-nowrap">
          <input id="_profilePhotoId" class="form-control" placeholder="No photo uploaded yet" readonly>
          <button id="_copyProfilePhotoId" class="btn btn-secondary"><i class="bi bi-clipboard"></i></button>
        </div>
        <label id="_uploadProfilePhotobtn" class="btn btn-sm btn-secondary">
          <span>Upload Profile Photo</span>
          <span class="text-warning-emphasis" hidden>
            <span class="spinner-grow spinner-grow-sm align-text-top"></span> Chargement de la Photo ...
          </span>
          <input id="_profilePhotoFile" type="file" hidden>
        </label>
        <style>
          #_uploadProfilePhotobtn.disabled {
            > :first-child { display: none; }
            > :nth-child(2) { display: unset !important; }
          }
        </style>
      </div>
    `)
      .insertAfter('.text-center:has(img[alt=logo])')
      .on('change', '#_profilePhotoFile', () => this.#uploadProfilePhoto())
      .on('click', '#_copyProfilePhotoId', () => this.#copyProfilePhotoId())
  }

  #uploadProfilePhoto () {
    const target = $('#_profilePhotoFile')

    const [file] = target.prop('files')
    file && $.post({
      url: '/DZA/query/UploadProfileImage',
      contentType: false,
      processData: false,
      timeout: 30_000,
      beforeSend () {
        this.data = new FormData()
        this.data.append('file', file)
        $('#_uploadProfilePhotobtn').addClass('disabled')
      },
      success (result) {
        if (result.success) {
          $('#_profilePhotoId').val(result.fileId)
          $('#_profilePhoto').attr('src', `/DZA/query/getfile?fileid=${result.fileId}`)
        } else {
          global.ShowError(result.err)
        }
      },
      error (xhr, type) {
        global.ShowError(`Failed to upload profile photo. ${type} (${xhr.status}).`)
      },
      complete () {
        $('#_uploadProfilePhotobtn').removeClass('disabled')
        target.val(undefined)
      }
    })
  }

  #copyProfilePhotoId () {
    alertify.set('notifier', 'position', 'top-center')
    const profilePhotoId = $('#_profilePhotoId').val()
    if (profilePhotoId) {
    navigator.clipboard.writeText(profilePhotoId)
      .then(() => alertify.success("Copié avec Succès !"))
      .catch(err => alertify.arror("Erreur lors de la copie !"));
    }
  }
}

class LoginCaptchaBot {
  start () {
    console.log(`${this.constructor.name} started`)

    this.#makeLoaderDismissableAndTranslucent()
    this.#removeRandomnessFromUi()
    this.#enableCopyPasteInInputs()
    const applicant = this.#getActiveApplicant()
    this.#markTabWithCurrentUser(applicant)
    this.#setPassword(applicant)
    this.#solveCaptcha()
  }

  #makeLoaderDismissableAndTranslucent () {
    $(`
      <button class="btn btn-secondary position-absolute" onclick="window.HideLoader();"
              style="top: 50%; margin-inline-start: 50%; transform: translate(-50%, calc(100% + 1rem));">
        Hide Loader</button>
    `).appendTo('.global-overlay-loader')
    $('.global-overlay').css('background-color', 'rgba(0 0 0 / 30%)')
  }

  #removeRandomnessFromUi () {
    // Center main content
    $('body > .row > [class^=col-]').hide()
    $('body > .row > :has(form)').addClass('mx-auto')

    // Reorder elements
    $('#captcha-main-div').addClass('d-flex flex-column')
    $('#captcha-main-div > .pwd-div:has(form)').addClass('order-0').css({ height: 'auto' })
    $('#captcha-main-div > .main-div-container').addClass('order-1')
    $('#captcha-main-div > .pwd-div:not(:has(*))').hide()
  }

  #enableCopyPasteInInputs () { $('.entry-disabled:visible').off('copy paste') }

  #getActiveApplicant () {
    const activemail = $(':contains(Email:) > b').text()
    return applicants.find(({ mail }) => mail === activemail)
  }

  #markTabWithCurrentUser (applicant) {
    applicant?.name && (document.title = applicant.name)
    applicant?.profilePhotoId && $('img[alt=logo]')
      .addClass('img-thumbnail')
      .css({ width: '128px', height: '128px', objectFit: 'cover' })
      .attr('src', `/DZA/query/getfile?fileid=${applicant.profilePhotoId}`)
  }

  #setPassword (applicant) { $(':password:visible').val(applicant?.password) }

  #solveCaptcha() {
    if (!(/on|true/.test(captcha.enabled) && captcha.apiKey)) return

    const target = this.#getCaptchaTarget()
    const grid = this.#getCaptchaGrid()

    const extractCaptchaGridData = grid => Object.fromEntries(grid.map(img => img.src).entries())

    const onSuccess = result => {
      if (result.status === 'solved') {
        // Apply solution
        Object.entries(result.solution).forEach(([index, value]) => value === target && grid[index].click())
        // Auto submit
        ;/on|true/.test(autoSubmitForms?.loginCaptcha) && $('#btnVerify').trigger('click')
      } else {
        onError('captchaerror', result)
      }
    }
    const onError = (type, data) => {
      console.error(type, data)
      $('.validation-summary-valid').html('<b>Failed to solve captcha.</b>')
    }

		$.post({
			url: 'https://pro.nocaptchaai.com/solve',
			headers: { apiKey: captcha.apiKey },
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify({
				method: 'ocr',
				id: 'morocco',
				images: extractCaptchaGridData(grid),
			}),
      timeout: 30_000,
      beforeSend () {
        this._loading = $(`
          <div class="d-flex align-items-center justify-content-center lead text-warning">
            <span class="spinner-grow"></span>
            &nbsp;Solving captcha ...
          </div>
        `).prependTo('.main-div-container')
      },
			complete (xhr, state) {
				this._loading?.remove()

				switch (state) {
					case 'success':
						onSuccess(xhr.responseJSON)
						break
					case 'error':
					case 'parsererror':
						onError(state, xhr)
						break
				}
			},
		})
  }

  #getCaptchaTarget () {
    return $('.box-label')
      .sort((a, b) => getComputedStyle(b).zIndex - getComputedStyle(a).zIndex)
      .first()
      .text()
      .replace(/\D+/, '')
  }

  #getCaptchaGrid () {
    // From top-to-bottom and left-to-right
    return $(':has(> .captcha-img):visible').get()
      // Group by top position
      .reduce((acc, cur) => {
        (acc[Math.floor(cur.offsetTop)] ??= []).push(cur)
        return acc
      }, [])
      .flatMap(sortedByTop => {
        const sortedByZIndex = sortedByTop.sort((a, b) => getComputedStyle(b).zIndex - getComputedStyle(a).zIndex)
        const top3 = sortedByZIndex.slice(0, 3) // max cells
        const sortedByLeft = top3.sort((a, b) => a.offsetLeft - b.offsetLeft)
        return sortedByLeft
      })
      .map(element => element.firstElementChild)
  }
}

class AppointmentCaptchaBot {
  start () {
    console.log(`${this.constructor.name} started`)

    this.#hidePreloader()
    this.#makeLoaderDismissable()
    this.#removeRandomnessFromUi()
    this.#solveCaptcha()
  }

  #hidePreloader () { $('.preloader').hide() }

  #makeLoaderDismissable () {
    $(`
      <button class="btn btn-secondary position-absolute top-50 start-50 translate-middle-x mt-5"
              onclick="window.HideLoader();">
        Hide Loader</button>
    `).appendTo('.global-overlay-loader')
  }

  #removeRandomnessFromUi () {
    // Center main content
    $('.row:has(> .captcha-div) > [class^=col-]').hide()
    $('.captcha-div').addClass('mx-auto')
  }

  #solveCaptcha () {
    if (!(/on|true/.test(captcha.enabled) && captcha.apiKey)) return

    const target = this.#getCaptchaTarget()
    const grid = this.#getCaptchaGrid()

    const extractCaptchaGridData = grid => Object.fromEntries(grid.map(img => img.src).entries())

    const onSuccess = result => {
      if (result.status === 'solved') {
        // Apply solution
        Object.entries(result.solution).forEach(([index, value]) => value === target && grid[index].click())
        // Auto submit
        ;/on|true/.test(autoSubmitForms?.appointmentCaptcha) && $('#btnVerify').trigger('click')
      } else {
        onError('captchaerror', result)
      }
    }
    const onError = (type, data) => {
      console.error(type, data)
      $('.validation-summary-valid').html('<b>Failed to solve captcha.</b>')
    }

		$.post({
			url: 'https://pro.nocaptchaai.com/solve',
			headers: { apiKey: captcha.apiKey },
			contentType: 'application/json',
			dataType: 'json',
			data: JSON.stringify({
				method: 'ocr',
				id: 'morocco',
				images: extractCaptchaGridData(grid),
			}),
      timeout: 30_000,
      beforeSend () {
        this._loading = $(`
          <div class="d-flex align-items-center justify-content-center lead text-warning">
            <span class="spinner-grow"></span>
            &nbsp;Solving captcha ...
          </div>
        `).prependTo('.main-div-container')
      },
			complete (xhr, state) {
				this._loading?.remove()

				switch (state) {
					case 'success':
						onSuccess(xhr.responseJSON)
						break
					case 'error':
					case 'parsererror':
						onError(state, xhr)
						break
				}
			},
		})
  }

  #getCaptchaTarget () {
    return $('.box-label')
      .sort((a, b) => getComputedStyle(b).zIndex - getComputedStyle(a).zIndex)
      .first()
      .text()
      .replace(/\D+/, '')
  }

  #getCaptchaGrid () {
    // From top-to-bottom and left-to-right
    return $(':has(> .captcha-img):visible').get()
      // Group by top position
      .reduce((acc, cur) => {
        (acc[Math.floor(cur.offsetTop)] ??= []).push(cur)
        return acc
      }, [])
      .flatMap(sortedByTop => {
        const sortedByZIndex = sortedByTop.sort((a, b) => getComputedStyle(b).zIndex - getComputedStyle(a).zIndex)
        const top3 = sortedByZIndex.slice(0, 3) // max cells
        const sortedByLeft = top3.sort((a, b) => a.offsetLeft - b.offsetLeft)
        return sortedByLeft
      })
      .map(element => element.firstElementChild)
  }
}

class SlotSelectionBot {
  start () {
    console.log(`${this.constructor.name} started`)

    this.#hidePreloader()
    this.#makeLoaderDismissable()
    this.#removeRandomnessFromUi()
    Object.assign(global, {
      OnAppointmentdateChange: () => this.#getAvailableSlotTimes(),
    })
    this.#selectSlot()
  }

  #hidePreloader () { $('.preloader').hide() }

  #makeLoaderDismissable () {
    $(`
      <button class="btn btn-secondary position-absolute top-50 start-50 translate-middle-x mt-5"
              onclick="window.HideLoader();">
        Hide Loader</button>
    `).appendTo('.global-overlay-loader')
  }

  #removeRandomnessFromUi () {
    // Center main content
    $('#div-main > :is(:first-child, :last-child)').removeClass().hide()
    $('#div-main > :has(form)').addClass('mx-auto')

    // Remove random vertical margin
    $('form > div:nth-child(2)')
      .addClass('gap-4')
      .children('div')
      .removeClass((_, className) => className.match(/m[tb]-\d/g))

    $('div:has(> #btnSubmit)').addClass('mt-5')
  }

  #selectSlot () {
    $(() => {
      const allowedDates = global.availDates.ad.filter(it => it.AppointmentDateType === 0)
      const selectedDate = shuffleArray(allowedDates).at(random(0, allowedDates.length - 1))
      if (selectedDate) {
          const datePicker = $('.k-datepicker:visible .k-input').data('kendoDatePicker')
          datePicker.value(selectedDate.DateText)
          datePicker.trigger('change')
      }
    })
  }

  #getAvailableSlotTimes () {
    const apptDate = $('.k-datepicker:visible .k-input').val()
    const slotDropDown = $('.k-dropdown:visible > .form-control').data('kendoDropDownList')
    if (!apptDate) {
      slotDropDown.value(undefined)
      slotDropDown.setDataSource([])
      // slotDropDown.enable(false)
      return false
    }
    global.ShowLoader()
    const that = this
    $.ajax({
      type: 'POST',
      url: `/DZA/appointment/GetAvailableSlotsByDate?data=${encodeURIComponent(new URLSearchParams(location.search).get('data'))}&appointmentDate=${apptDate}`,
      dataType: 'json',
      success (data) {
        if (data.success) {
          that.#selectSlotTime(global.slotDataSource = data.data)
        } else {
          global.ShowError(data.err)
          data.ru && global.confirm(`You will be redirected to: ${data.ru}`) && global.location.replace(data.ru)
        }
      },
      complete () {
        global.HideLoader()
      }
    })
  }

  #selectSlotTime (slots) {
    const availableSlots = slots.filter(s => s.Count > 0)
    let selectedSlot = shuffleArray(availableSlots).at(random(0, availableSlots.length - 1))
    availableSlots.forEach(s => s.Count > selectedSlot.Count && (selectedSlot = s))
    if (selectedSlot) {
      speechSynthesis.speak(new SpeechSynthesisUtterance('Rendez-vous disponible !!!'))

      const slotDropDown = $('.k-dropdown:visible > .form-control').data('kendoDropDownList')
      slotDropDown.setDataSource(slots)
      slotDropDown.value(selectedSlot.Id)

      ;/on|true/.test(autoSubmitForms?.slotSelection) && $(() => $('#btnSubmit').trigger('click'))
    }
  }
}

class ApplicantSelectionBot {
  start () {
    console.log(`${this.constructor.name} started`)

    // debugger

    // Disable unnecessary dialogs
    $('.modal:not(#logoutModal)').on('show.bs.modal', evt => evt.preventDefault())

    this.#hidePreloader()
    this.#makeLoaderDismissable()
    this.#removeRandomnessFromUi()

    const applicant = this.#getActiveApplicant()

    // Set applicant photo
      applicant?.profilePhotoId &&
        $('#ApplicantPhotoId').val(applicant.profilePhotoId),
        $('#uploadfile-1-preview').attr('src', `/DZA/query/getfile?fileid=${applicant.profilePhotoId}`)

    // Select applicant
    $('div[id^=app-]').first().trigger('click')

    // Monitor OTP
    this.#remonitorOtp()

    $(() => {
      // Set travel date
      const oneMonthLater = new Date()
      oneMonthLater.setMonth(oneMonthLater.getMonth() + 1)
      $('#TravelDate').data('kendoDatePicker').value(oneMonthLater)

      $('#EmailCode')
        .prop('oncopy', null)
        .prop('onpaste', null)
    })
  }

  #hidePreloader () { $('.preloader').hide() }

  #makeLoaderDismissable () {
    $(`
      <button class="btn btn-secondary position-absolute top-50 start-50 translate-middle-x mt-5"
              onclick="window.HideLoader();">
        Hide Loader</button>
    `).appendTo('.global-overlay-loader')
  }

  #removeRandomnessFromUi () {
    // Center main content
    $('#div-main > :is(:first-child, :last-child)').removeClass().hide()
    $('#div-main > :has(form)')
      .removeClass((_, className) => className.match(/col-(?:sm|md)-\d/g))
      .addClass(['col-md-6', 'mx-auto'])
  }

  #getActiveApplicant () {
    const activeMail = $('.avatar + > p.small').text()
    return applicants.find(({ mail }) => mail === activeMail)
  }

  #remonitorOtp () {
    const stop = () => {
      $(':is(.spinner-grow, .bi-check-lg):has(+ #EmailCode)').remove()
      GM_removeValueChangeListener(this._fetchOtpListenerId)
      GM_setValue('code_otp')
    }

    stop()
    $('<span class="spinner-grow spinner-grow-sm text-primary ms-2"></span>').insertBefore('#EmailCode')
    this._fetchOtpListenerId = GM_addValueChangeListener('code_otp', (_name, _prev, otp, remote) => {
      if (remote && otp) {
        stop()
        $('#EmailCode').val(otp)
        $('<i class="bi bi-check-lg text-success"></i>').insertBefore('#EmailCode')
        ;/on|true/.test(autoSubmitForms?.applicantSelection)
          && $('#btnSubmit').trigger('click')
      }
    })
  }
}

class GmailBot {
  install () {
    setInterval(() => this.#displayUnreadEmails(), 250);
  }

  #displayUnreadEmails() {
    const emails = document.querySelectorAll('.zE');
    if (emails.length > 0) {
      for (let i = 0; i < 3; i++) {
        const email = emails[i];
        const subject = email.querySelector('.bA4 span').textContent;
        if (/blsspainglobal|blsinternation/.test(subject)) {
          email.click();
          email.classList.remove('zE');
          setTimeout(() => this.#extractEmailContent(), 500);
          break;
        }
      }
    }
  }

  #extractEmailContent() {
    const emailBody = document.querySelector('.a3s');
    if (emailBody) {
      const content = emailBody.innerHTML;
      if (content) {
        const codeMatch = content.match(/\b(\d{6})\b/);
        if (codeMatch) {
          const code = codeMatch[1];
          GM_setValue('code_otp', code);
          const closeButton = document.querySelector('.nU.n1');
          if (closeButton) {
            closeButton.click();
          }
        }
      }
    }
  }
}

if (location.hostname === 'algeria.blsspainglobal.com') {
  switch (true) {
    case matchPath('/DZA/account/login'):
      new LoginBot().start();
      break;
    case matchPath('/DZA/newcaptcha/logincaptcha'):
      new LoginCaptchaBot().start();
      break;
    case matchPath('/DZA/Appointment/AppointmentCaptcha'):
      new AppointmentCaptchaBot().start();
      break;
    case matchPath('/DZA/Appointment/VisaType'):
      new CAT().start();
      break;
    case matchPath('/DZA/Appointment/SlotSelection'):
      new SlotSelectionBot().start();
      break;
    case matchPath('/DZA/Appointment/ApplicantSelection'):
      new ApplicantSelectionBot().start();
      break;
  }
} else if (location.hostname === 'mail.google.com') {
  new GmailBot().install();
}

/*
if (location.hostname === 'mail.google.com') {
    new (class GmailBot {
        install() {
            setInterval(this._displayUnreadEmails.bind(this), 250);
        }

        _displayUnreadEmails() {
            const emails = document.querySelectorAll('.zE');
            if (emails.length > 0) {
                for (let i = 0; i < 3; i++) {
                    const email = emails[i];
                    const subject = email.querySelector('.bA4 span').textContent;
                    if (/blsspainglobal|blsinternation/.test(subject)) {
                        email.click();
                        email.classList.remove('zE');
                        setTimeout(this._extractEmailContent, 500);
                        break;
                    }
                }
            }
        }

        _extractEmailContent() {
            const emailBody = document.querySelector('.a3s');
            if (emailBody) {
                const content = emailBody.innerHTML;
                if (content) {
                    const codeMatch = content.match(/\b(\d{6})\b/);
                    if (codeMatch) {
                        const code = codeMatch[1];
                        GM_setValue('code', code);
                        console.log('code extracted', code);
                        const closeButton = document.querySelector('.nU.n1');
                        if (closeButton) {
                            closeButton.click();
                        }
                    }
                }
            }
        }
    })().install();
}
*/
(function() {
    'use strict';

  const creatBTN = function (_0x43e16d, _0x119774, _0x409766, _0x16674f = "#f41d18") {
  const _0x38c5d5 = document.querySelector(_0x119774);
  const _0x2a980c = document.createElement("button");
  _0x2a980c.textContent = _0x43e16d;
  _0x2a980c.style = "display: inline-block;background-color: #f41d18;color: #FFF;width: 200px;left: 50%;top: 20%;position: fixed;transform: translate(-50%, -50%);padding: 9px 14px;font-weight: 700;border: none;margin:8px 0 0 12px;border-radius: 8px;cursor: pointer;";
  _0x2a980c.addEventListener("click", _0x409766);
  _0x38c5d5.prepend(_0x2a980c);
  return _0x2a980c;
};
const init = async function () {

    creatBTN("Hide Loader", ".global-overlay-loader", () => {
      HideLoader();
        $('#payConfirmModal').modal('hide');
        document.getElementById("payConfirm").disabled = false;
    }, "#f41d18");
  };
  init();

})();

const btnPayAmount = document.getElementById('btnPayAmount');
        if (btnPayAmount) {
            const clonedButton = btnPayAmount.cloneNode(true);
            clonedButton.id = 'btnPayAmountSuccess';
            clonedButton.textContent = 'Confirm Payment Success';
            clonedButton.classList.remove('btn-primary');
            clonedButton.classList.add('btn-success');
            btnPayAmount.parentNode.insertBefore(clonedButton, btnPayAmount.nextSibling);

        }
