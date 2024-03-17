function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album('Artist One', 'The First ALbum'));
console.log(make_album('The Artist Two', 'The Second Album'));
console.log(make_album('The Artist Third', 'The Third Album', 15));
console.log(make_album('The Artist Fourth', 'The FOurth Album', 30));
