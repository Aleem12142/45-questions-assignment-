var guestss = ['Wahab Ali', 'Abdul Rauf', 'Abid Ali'];
guestss.forEach(function (guest) {
    console.log(guest, ', would you be my guest on tonuights dinner?');
});
var unabletoattend = 'Abdul Rauf';
console.log(unabletoattend, 'is unable to attend tonights dinner,');
var newguest = 'Husnain';
guestss[guestss.indexOf(unabletoattend)] = newguest;
guestss.forEach(function (guest) {
    console.log(guest, ', would you join me on tonights dinner?');
});
