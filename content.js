chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    console.log(message)
    if(message.color){
        let para = document.getElementsByTagName('p');
        for ( key of para) {
            key.style['background-color'] = message.color
        }
    }
}