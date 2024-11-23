

const DownloadUser = () => {
  var OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
  if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
  if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

 

  if (OSName == "MacOS") {
   
    fetch("https://api.apispreadsheets.com/data/5GDmXxegDU8sZHWK/", {
      method: "POST",
      body: JSON.stringify({ "data": { "COUNT": "1", "DEVICE": "IOS", "DATE": `${new Date }`, "APP_TYPE": "USER"} }),
    }).then(res => {
     
    })
    window.location.replace("https://apps.apple.com/ng/app/kitchly/id6450870694");
   
  } else {

    fetch("https://api.apispreadsheets.com/data/5GDmXxegDU8sZHWK/", {
      method: "POST",
      body: JSON.stringify({ "data": { "COUNT": "1", "DEVICE": "ANDROID", "DATE": `${new Date}`, "APP_TYPE": "USER" } }),
    }).then(res => {
     
    })
    window.location.replace("https://play.google.com/store/apps/details?id=com.kitchly");
    
  }

}

export default DownloadUser