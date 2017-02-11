// DEMO CODES ONLY

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

Timeline.init( "timeline", 4, 100, ["Alex", "Bob", "Alice", "John"]);
Timeline.fillCell( 0, 78, 10, getRandomColor());
Timeline.fillCell( 1, 3, 3, getRandomColor());
Timeline.fillCell( 2, 4, 5, getRandomColor());
Timeline.fillCell( 2, 13, 10, getRandomColor());
Timeline.fillCell( 2, 34, 43, getRandomColor());
Timeline.fillCell( 3, 3, 94, getRandomColor());