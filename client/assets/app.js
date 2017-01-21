var app = angular.module('app', []);

app.controller('gameController', ['$scope',  function($scope){
    $scope.tableDiscards = [];
    $scope.tableDiscard = undefined;
    $scope.players = [];
    var turn = 0;

    //cycling turn tracker
    function nextTurn(){
        if(turn >= 3){
            turn = 0;
        }
        else {
            turn++;
        }
    }

    // TurnFunction, Work in progress
    function normalTurn(playerNum){
        var draw = newWall.wall.pop();
        players[playerNum].hand.push(draw);
    }

    function newDiscard(tile){
        console.log(tile);
        $scope.tableDiscards.push($scope.tableDiscard);
        $scope.tableDiscard = tile;
    }


    //Tile Class
    function Tile (suit, value){
        this.suit = suit;
        this.value = value;
    }


    //Wall Class
    function Wall() {
        this.wall = [];
        for(var j = 1; j <= 4; j++){
            for(var i = 1; i <= 9; i++){
                this.wall[this.wall.length] = new Tile('bamboo', i);
                this.wall[this.wall.length] = new Tile('aspot', i);
                this.wall[this.wall.length] = new Tile('char', i);
            }
            this.wall[this.wall.length] = new Tile("north", null);
            this.wall[this.wall.length] = new Tile("east", null);
            this.wall[this.wall.length] = new Tile("south", null);
            this.wall[this.wall.length] = new Tile("west", null);
            this.wall[this.wall.length] = new Tile("middle", null);
            this.wall[this.wall.length] = new Tile("prosperity", null);
            this.wall[this.wall.length] = new Tile("white", null);
            this.wall[this.wall.length] = new Tile("flower", null);
            this.wall[this.wall.length] = new Tile("season", null);
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

    Wall.prototype.dealTiles = function(){
        function dealFour(){
            for(var idx = 0; idx < $scope.players.length; idx++){
                for(var i = 1; i <= 4; i++){
                    $scope.players[idx].hand.push(newWall.wall.pop());
                }
            }
        }
        dealFour();
        dealFour();
        dealFour();
        dealFour();
    };


    //Player Class
    function Player(name){
        this.name = name;
        this.hand= [];
    }
    Player.prototype.drawTile = function(){
        this.hand.push(newWall.wall.pop());
    };
    Player.prototype.discard = function(index){
        var discard = this.hand.splice(index, 1);
        if(this.hand.length){
            newDiscard(discard[0]);
        }
    };
    Player.prototype.sortBy = function (key, minor) {
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
    Player.prototype.sortHand = function(){
        this.hand.sort(this.sortBy('suit', this.sortBy('value')));
    };

    //Tests
    var playerOne = new Player("1");
    var playerTwo = new Player("2");
    var playerThree = new Player("3");
    var playerFour = new Player("4");

    $scope.players.push(playerOne, playerTwo, playerThree, playerFour);

    var newWall = new Wall();
    newWall.shuffle();
    newWall.dealTiles();
    $scope.players[0].sortHand();
    }
]);

//sort command
//wall.sort(sortBy('suit', sortBy('value')))
