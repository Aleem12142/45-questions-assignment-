var current_user = ['user1', 'admin', 'user3', 'user5'];
var new_user = ['User1', 'User6', 'User7', 'admin', 'User9'];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase(); })) {
        console.log(newUser, ', will need to enter a new username');
    }
    else {
        console.log(newUser, 'is available.');
    }
});
