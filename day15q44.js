function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Making a sandwich with:', items.join(','), '.');
}
make_sandwich('Ketchup', 'Onions', 'lattuce');
make_sandwich('Garlic Sause', 'Tomato', 'Pepper', 'Cucumber');
make_sandwich('Mayo', 'Olives', 'Sprouts', 'Avacado');
