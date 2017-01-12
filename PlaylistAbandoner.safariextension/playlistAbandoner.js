
// Find all the video links in the playlist.
var videos = document.getElementsByClassName("pl-video");
for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    
    // Create the button for this video. YouTube uses <a> tags with a bunch of
    // classes for those nice grey buttons, so let's do that. Also add a custom
    // class as well, so we can target them with our injected CSS.
    var button = document.createElement("a");
    button.className = "yt-uix-button yt-uix-button-default yt-uix-button-size-default " +
                       "abandon-playlist-button";
    button.title = "Watch this video outside the playlist"

    // The data-video-id attribute on the video element gives the YouTube ID
    // of the video. By appending that to the normal YouTube video URL, we
    // can form a link to the video's watch page. Since we are being injected
    // into the page, we can use a relative URL so that we're not assuming
    // that we're on vanilla youtube.com.
    var url = "/watch?v=" + video.dataset.videoId;
    button.href = url;

    // Create an image containing the icon to put into the <a> tag.
    var image = document.createElement("img");
    image.src = safari.extension.baseURI + "buttonIcon.png"

    // Insert the image into the button.
    button.appendChild(image);

    // Create a table cell to put the button into, since the playlist is a
    // giant table.
    var tableCell = document.createElement("td");
    tableCell.class = "abandon-playlist-wrapper";
    tableCell.appendChild(button);

    // Finally, add the table cell to the video element. Luckily, the elements
    // we have been working with are the <tr> tags, so we can just add the <td>
    // directly to it, without having to traverse the DOM at all.
    video.appendChild(tableCell);
}
