
// Find all the video links in the playlist.
var videos = document.getElementsByTagName("ytd-playlist-video-renderer");
for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var videoLink;
    
    var links = video.getElementsByTagName("a");
    for (var j = 0; j < links.length; j++) {
        if (links[j].className.indexOf("ytd-playlist-video-renderer") !== 0) {
            videoLink = links[j];
            break;
        }
    }

    if (!videoLink) {
        continue;
    }

    // Create a button which will open a link in a new tab.
    var button = document.createElement("a");
    button.className = "abandon-playlist-button";
    button.title = "Watch this video outside the playlist";
    button.target = "_blank";

    // Take the URL from the video link and remove everything after the video
    // ID. Since video links are always .../watch?v=VIDEO_ID&... we can just
    // strip everything from the first & character.
    var originalUrl = videoLink.href;
    var endOfId = originalUrl.indexOf("&");
    var newUrl = originalUrl.substr(0, endOfId);
    button.href = newUrl;

    // Create an image containing the icon to put into the <a> tag.
    var imageUrl = chrome.extension.getURL("shareIcon.svg");
    button.style["-webkit-mask-image"] = "url(" + imageUrl + ")";

    // Create a div to put the button into.
    var wrapperDiv = document.createElement("div");
    wrapperDiv.className = "abandon-playlist-wrapper";
    wrapperDiv.appendChild(button);

    // Finally, add the wrapper to the video element, after the menu button.
    video.insertBefore(wrapperDiv, video.lastChild);
}
