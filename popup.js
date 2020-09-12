
var button = document.getElementById("mybutton");
var person_name = "Roberto";

button.addEventListener("click", function() {
    
    var colorValue = document.querySelector('input[name="color"]:checked').value;
    let parms = {
        active :true,
        currentWindow :true
    }
    chrome.tabs.query(parms,gotTabs);

    function gotTabs(tab){
        let msg = {
            color : colorValue
        }
        chrome.tabs.sendMessage(tab[0].id,msg)
    }

});
