(function(){

//Main JS for Wall and Players

tableDiscards = [];
tableDiscard = undefined;
players = [];

function newDiscard(tile){
    tableDiscards.push(tableDiscard);
    tableDiscard = tile;
}

function dealTiles(){
    function dealFour(){
        for(var idx = 0; idx < players.length; idx++){
            for(var i = 1; i <= 4; i++){
                players[idx].hand.push(newWall.wall.pop());
            }
        }
    }
    dealFour();
    dealFour();
    dealFour();
    dealFour();
    document.getElementById("wall").innerHTML = newWall.wall;
}


//Wall Class
function Wall() {
    this.wall = [];
    for(var j = 1; j <= 4; j++){
        for(var i = 1; i <= 9; i++){
            this.wall.push(i+"bam");
            this.wall.push(i+"spo");
            this.wall.push(i+"num");
        }
        this.wall.push("nor");
        this.wall.push("sou");
        this.wall.push("wes");
        this.wall.push("eas");
        this.wall.push("mid");
        this.wall.push("pro");
        this.wall.push("whi");
        this.wall.push(j+"sea");
        this.wall.push(j+"flo");
    }
}
Wall.prototype.shuffle = function(){
    var m = this.wall.length, t, i;

    while(m){
        i = Math.floor(Math.random() * m--);
        t = this.wall[m];
        this.wall[m] = this.wall[i];
        this.wall[i] = t;
    }
    return this.wall;
};

//Player Class
function Player(name){
    this.name = name;
    this.hand= [];
}
Player.prototype.drawTile = function(){
    console.log(this.hand);
    this.hand.push(newWall.wall.pop());
    document.getElementById("playerHand").innerHTML = this.hand;
    document.getElementById("wall").innerHTML = newWall.wall;
};
Player.prototype.discard = function(){
    var discard = this.hand.pop();
    if(this.hand.length){
        newDiscard(discard);
    }
    document.getElementById("playerHand").innerHTML = this.hand;
    document.getElementById("wall").innerHTML = newWall.wall;
    document.getElementById("discard").innerHTML = tableDiscard;
    document.getElementById("discardsPile").innerHTML = tableDiscards;
};

//Tests
var playerOne = new Player("1");
var playerTwo = new Player("2");
var playerThree = new Player("3");
var playerFour = new Player("4");

players.push(playerOne, playerTwo, playerThree, playerFour);
console.log(players);
console.log(playerOne);

var newWall = new Wall();
newWall.shuffle();
document.getElementById("wall").innerHTML = newWall.wall;

//onClick Funcitons
document.getElementById("dealButton").onclick = dealTiles;
document.getElementById("drawOne").onclick = playerOne.drawTile;
document.getElementById("discardOne").onclick = playerOne.discard;

})();
