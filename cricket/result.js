let a = JSON.parse(localStorage.getItem('Team A'));
let b = JSON.parse(localStorage.getItem('Team B'));
if(a.totalscores>b.totalscores){
    document.getElementById('result').innerText="TEAM A WON THE MATCH"
}
else{
    document.getElementById('result').innerText="TEAM B WON THE MATCH"
}