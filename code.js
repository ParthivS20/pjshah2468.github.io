var cbCounter = 0;
var transDelay = 100;
hideElement("surveyInput");
onEvent("getStartedBtn", "click", function( ) {
  setScreen("toDoListScreen");
});
toDoCB("mathHWcb");
toDoCB("englishHWcb");
toDoCB("scienceHWcb");
toDoCB("historyHWcb");
toDoCB("chorescb");
onEvent("takeSurveyBtn", "click", function( ) {
  setScreen("surveyScreen");
});
onEvent("greatRadBtn", "click", function( ) {
  hideElement("surveyInput");
});
onEvent("notRadBtn", "click", function( ) {
  showElement("surveyInput");
});
onEvent("submitSurveyBtn", "click", function( ) {
  if (getChecked("greatRadBtn")) {
    setScreen("greatSurScreen");
  } else if ((getChecked("notRadBtn"))) {
    setScreen("notForMeSurScreen");
  } else {
    textLabel("surveyTryAgain", "You must pick one to submit.");
    button("tryAgainBtn", "OK");
    onEvent("tryAgainBtn", "click", function( ) {
      deleteElement("tryAgainBtn");
      deleteElement("surveyTryAgain");
    });
  }
});
onEvent("returnHomeBtn", "click", reset);
onEvent("returnHomeBtn1", "click", reset);
function toDoCB(id) {
  onEvent(id, "click", function( ) {
    if (getChecked(id)) {
      cbCounter = cbCounter+1;
      setText("part1", cbCounter);
    } else if ((!getChecked(id))) {
      cbCounter = cbCounter-1;
      setText("part1", cbCounter);
    }
    if (cbCounter == 5) {
      setTimeout(function() {
        setScreen("completionScreen");
      }, transDelay);
    }
  });
}
function reset() {
  setScreen("homeScreen");
  cbCounter = 0;
  setText("part1", cbCounter);
  setChecked("mathHWcb", false);
  setChecked("englishHWcb", false);
  setChecked("scienceHWcb", false);
  setChecked("historyHWcb", false);
  setChecked("chorescb", false);
  setChecked("greatRadBtn", false);
  setChecked("notRadBtn", false);
  setText("surveyInput", "");
}
