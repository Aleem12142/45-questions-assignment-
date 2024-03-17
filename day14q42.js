var $magicians = ['Kareem', 'Kaleem', 'Kamran', 'Jabbar'];
function $show_magicians($magicians) {
    $magicians.forEach(function (magician) {
        console.log(magician);
    });
}
$show_magicians($magicians);
function make_greate($magicians) {
    for (var i = 0; i < $magicians.length; i++) {
        $magicians[i] = $magicians[i] + ' the Greate';
    }
    ;
}
make_greate($magicians);
$show_magicians($magicians);
