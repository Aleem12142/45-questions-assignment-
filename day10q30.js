var usernames = ['admin', 'user1', 'user2', 'user3', 'user4'];
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see status report?');
    }
    else {
        console.log('Hello', username, ', thank you for loging in again.');
    }
});
