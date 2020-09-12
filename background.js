// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete')
//             // chrome.tabs.executeScript(tabId, {code: 'document.body.style.backgroundColor="orange"'});
//             chrome.tabs.executeScript({
//                 code: 'document.body.style.backgroundColor="green"'
//             });
//         });
    
//     chrome.browserAction.onClicked.addListener(function(tab) {
//         alert('dd')
//     chrome.tabs.executeScript({
//         code: 'document.body.style.backgroundColor="green"'
//     });
//     });


    // chrome.runtime.onMessage.addListener(
    //     function(message, callback) {
    //       if (message == 'runContentScript'){
    //         chrome.tabs.executeScript({
    //           code: 'document.body.style.backgroundColor="orange"'
    //         });
    //       }
    //    });

    console.log('as')
    // chrome.browserAction.onClicked.addListener(funCall)
    // chrome.browserAction.onClicked.addListener(funCall);
    // function funCall(tab){
    //     // console.log('df')
    //     let msg = {
    //         txt : "hello"
    //     }
    //     chrome.tabs.sendMessage(tab.id,msg)
    // }