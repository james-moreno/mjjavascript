//tile class
console.log("Assembling Tiles and Wall");
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
function Player(name){
    this.name = name;
    this.hand= [];
}
Player.prototype.drawHand = function(){
    console.log("test");
};
var newWall = new Wall();
console.log(newWall.wall);
