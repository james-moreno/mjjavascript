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
            wall[wall.length] = new Tile('spot', i);
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
console.log(wall);
