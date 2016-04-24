(function(window, undefined) {
  var dictionary = {
    "b4ef4519-cda0-4971-a277-2fbd6c842ac1": "signup screen",
    "fe31b1d6-84a2-413c-ae33-ca977d978c12": "Screen_1",
    "deb126e6-e71f-4518-867b-3b5aabd2b4b2": "Goals",
    "58d10a9d-f7f7-4cf9-8aeb-f1a2b243c3ad": "WelcomeScreen",
    "dffb2588-b85c-4b14-a645-6ec29632360a": "Account",
    "e9b3c36c-ac87-4132-8cfa-cb56c98df8cf": "Goals 1_new11",
    "4c588966-23f3-4159-82b3-acec889532ce": "Challenges 3",
    "c77ad7d9-a076-454d-bd24-160ba6e5b190": "Expenses1",
    "e64ea595-a304-4871-ab78-fbc570c376de": "Challenges 2",
    "b6fe5fc1-0e2e-4ed5-8617-a0e3a0078ed6": "Challenges 1",
    "da69963e-23d2-44a9-81b8-4b3d0669b61d": "Screen_Account_1",
    "41e79997-3473-4377-a244-5dedb9c408e3": "Stats_1",
    "0400bfbc-5dd6-4d94-9588-1a62bf116917": "Stats",
    "1432c19d-c891-4d09-9d9e-a0e9b91f9494": "login screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);