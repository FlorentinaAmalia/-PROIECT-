function myFunction(event) {
    if(event.currentTarget.nodeName == "BODY"){
        let rec = document.getElementById("reclama_noVisibility");
        rec.id = "reclama";
        setTimeout(function () {
            rec.id = "reclama_noVisibility";
        }, 5000);
    }
  }


//   window.onload = myFunction;