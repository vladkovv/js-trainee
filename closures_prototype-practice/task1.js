function makeTeam() {
 let players = [];
 for (let i = 0; i < 10; i++) {
 var player = function() { 
 console.log( i ); 
 };
 players.push(player);
 }
return players;
}
let team = makeTeam();
team[0]();
team[5]();
