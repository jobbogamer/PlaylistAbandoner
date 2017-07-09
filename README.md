
# PlaylistAbandoner

Normally when you click a video on a YouTube playlist page, the video plays in
the context of the playlist, meaning the next video will play automatically
when the current video ends.

Playlist Abandoner is a Safari/Chrome extension which adds a button to each video
on a playlist page. Clicking that button will open the video on the normal watch
page, _outside_ the context of the playlist.

The Chrome version of the extension is available [on the Chrome webstore][chrome].

## Installation (Safari)

Since the Safari Extension Gallery now requires an Apple Developer Program
membership ($99/year), PlaylistAbandoner is not available from the gallery,
nor is it signed, so you'll have to install it yourself.

1. [Download a ZIP of this repository][download] and extract it.
2. Enable the Develop menu in Safari's preferences.
3. Go to `Develop → Show Extension Builder`.
4. Click the + button in the bottom left corner and choose `Add Extension...`
5. Choose the `PlaylistAbandoner.safariextension` directory that you downloaded.

You will not need to sign the extension to run it this way.

[download]: https://github.com/jobbogamer/PlaylistAbandoner/archive/master.zip
[chrome]: https://chrome.google.com/webstore/detail/playlist-abandoner/bofdplnnckbbkffmkpmndfljedbldafo
