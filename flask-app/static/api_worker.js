onmessage = function(e) {
    let httpRequest = new XMLHttpRequest();
    function addSpotifyElements(){
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            // Everything is good, the response was received.
            if (httpRequest.status === 200) {
                postMessage(JSON.parse(httpRequest.responseText));
            }
        }
    }
    httpRequest.open('GET', e.data, true);
    httpRequest.onreadystatechange = addSpotifyElements;
    httpRequest.send();
}