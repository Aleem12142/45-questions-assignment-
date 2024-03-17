var magicianss = ['Kareem', 'Kaleem', 'Kamran', 'Jabbar'];
function show_magicians(magicianss) {
    magicianss.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicianss) {
    var greatMagicians = [];
    magicianss.forEach(function (magician) {
        greatMagicians.push("The Great ".concat(magician));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicianss.slice());
console.log("Original Magicians:");
show_magicians(magicianss);
console.log("Great Magician:");
show_magicians(greatMagicians);
