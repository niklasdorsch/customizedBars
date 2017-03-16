var indexVal = 50;

function indexChangeVal(newVal) {
        $("#proposed_index_slider_text").text("$" + newVal);
        indexVal = newVal;
  }

function functionX() {
        console.log("for you <3 : " + indexVal); 
        $("#resultsArea").append("<li>"+ indexVal+"</li>");
}        
