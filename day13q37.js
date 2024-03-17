function $make_shirt(size, messege) {
    if (size === void 0) { size = 'larg'; }
    if (messege === void 0) { messege = 'I like coding'; }
    console.log('Make a', size, 'sirt with the messege', messege, 'written on it.');
}
$make_shirt();
$make_shirt('medium');
$make_shirt('small', 'Dive in coding');
