var hand = [];
var wall = [];
function Tile (suit, value){
    this.suit = suit;
    this.value = value;
}

function generateWall(){
    for(var j = 1; j <= 4; j++){
        for(var i = 1; i <= 9; i++){
            wall[wall.length] = new Tile('bamboo', i);
            wall[wall.length] = new Tile('aspot', i);
            wall[wall.length] = new Tile('char', i);
        }
        wall[wall.length] = new Tile("north", null);
        wall[wall.length] = new Tile("east", null);
        wall[wall.length] = new Tile("south", null);
        wall[wall.length] = new Tile("west", null);
        wall[wall.length] = new Tile("middle", null);
        wall[wall.length] = new Tile("prosperity", null);
        wall[wall.length] = new Tile("white", null);
        wall[wall.length] = new Tile("flower", null);
        wall[wall.length] = new Tile("season", null);
    }
}
generateWall();
console.log(wall);
console.log(wall.length);

wall.sort();
var sortBy = function (key, minor) {
    return function (o, p) {
        var a, b;
        if (o && p && typeof o === 'object' && typeof p === 'object') {
            a = o[key];
            b = p[key];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }
    };
};

console.log(wall.sort(sortBy('suit', sortBy('value'))));
