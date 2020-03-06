
var tossstate=0;
var tosswin=0;
var innings=2;

class Team{
    constructor(){
    this.player=[];
    this.totalPlayer=11;
    this.currentplayer=0;
    this.balls = 0;
    this.totalball=36;
    this.wicket=0;
    this.totalscores=0;
    this.teamname = '';
}
createTeam(name){
    this.teamname = name;
    for(var i=0;i<11;i++){
       this.player.push({Id:1,score:0,balls:0});
    }
}
bat()
{
    if(innings>0){
        this.totalball-=1;
        this.player[this.currentplayer].balls+=1;
        if(this.totalball>0){
            if(this.currentplayer<11){
                let run = Math.floor(Math.random()*7);
                if(run ==0){
                    this.currentplayer+=1;
                    this.wicket+=1;
                }
                if(this.player[this.currentplayer].balls==6){
                    this.currentplayer+=1;
                }
                else{
                    this.player[this.currentplayer].score+=run;
                    this.totalscores+=run;
                }
            }
        }
        else{
            alert("Innings is Ended.  Score is :" +this.totalscores);
            localStorage.setItem(this.teamname,JSON.stringify(this))
            innings -=1;
            if(tosswin==1){
                tosswin=2;
            }
            else if(tosswin==2){
                tosswin=1;
            }
        }

    }
    document.getElementById('scoreA').innerText=(teamA.totalscores)
    document.getElementById('scoreB').innerText=(teamB.totalscores)

}   
}

let teamA = new Team();
let teamB = new Team();
teamA.createTeam('Team A');
teamB.createTeam('Team B');
function toss(){
    if(tossstate==0){
    var headortail = Math.floor(Math.random()*2);
    if(headortail==0){
        tossstate=1;
        tosswin=1;
        document.getElementById('teams').innerHTML='Team A is batting';      
    }
    else{
        tossstate=1;
        tosswin=2;
        document.getElementById('teams').innerHTML='Team B is batting';
    }
}
}

document.getElementById('bat1').addEventListener("click", function(){
    if(tosswin==1)
        {teamA.bat();}

});
document.getElementById('bat2').addEventListener('click',function(){
    if(tosswin==2)
        { teamB.bat();}
});