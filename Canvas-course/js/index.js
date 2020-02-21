var WINDOW_WIDTH = 800; //浏览器可用的宽度
var WINDOW_HEIGHT = 800;

var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
var RADIUS = 8;

/*var endTime = new Date(); //月份实际是需要减一的
endTime.setTime(endTime.getTime() + 3601 * 1000);*/

var curShowTimeSecond = 0;

var ball = [];
var color = ['#FFD700','#FFBBFF','#EE82EE','#EE0000','#C0FF3E','#B22222','#7A378B','#7A8B8B','#1C86EE','#000000'];

window.onload = function () {

    WINDOW_WIDTH = document.documentElement.clientWidth - 10;
    WINDOW_HEIGHT = document.documentElement.clientHeight -20;

    MARGIN_LEFT  = Math.round(WINDOW_WIDTH/10);
    MARGIN_TOP = Math.round(WINDOW_HEIGHT/4);

    RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    curShowTimeSecond = getCurShowTimeSecond();

    setInterval(function () {
        render(context);
        update();
    },
    50);

};
function getCurShowTimeSecond() {
    var curTime = new Date();//endTime.getTime() - curTime.getTime()
    var cur = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();

/*    cur = Math.round(cur/1000);*/  //时钟效果
    return cur>=0?cur:0;
}

function update() {
    var nextShowTimeSecond = getCurShowTimeSecond();

    var nextHours = parseInt(nextShowTimeSecond/3600),//强制转换格式从long到int
        nextMinutes = parseInt((nextShowTimeSecond-nextHours*3600)/60),
        nextSeconds = nextShowTimeSecond%60;

    var curHours = parseInt(curShowTimeSecond/3600),//强制转换格式从long到int
        curMinutes = parseInt((curShowTimeSecond-curHours*3600)/60),
        curSeconds = curShowTimeSecond%60;

    if(nextSeconds != curSeconds){
        if(parseInt(nextHours/10) != parseInt(curHours/10)){
            addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(curHours/10));
        }
        if(parseInt(nextHours%10) != parseInt(curHours%10)){
            addBalls(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(curHours%10));
        }

        if(parseInt(nextMinutes/10) != parseInt(curMinutes/10)){
            addBalls(MARGIN_LEFT + 39*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes/10));
        }
        if(parseInt(nextMinutes%10) != parseInt(curMinutes%10)){
            addBalls(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(curMinutes%10));
        }

        if(parseInt(nextSeconds/10) != parseInt(curSeconds/10)){
            addBalls(MARGIN_LEFT + 78*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds/10));
        }
        if(parseInt(nextSeconds%10) != parseInt(curSeconds%10)){
            addBalls(MARGIN_LEFT + 93*(RADIUS+1),MARGIN_TOP,parseInt(curSeconds%10));
        }
        curShowTimeSecond = nextShowTimeSecond;
    }
    updateBall();
    console.log(ball.length);
}

function updateBall() {
    for(var i=0;i<ball.length;i++){
        ball[i].x += ball[i].vx;
        ball[i].y += ball[i].vy;
        ball[i].vy += ball[i].g;

        if(ball[i].y >= WINDOW_HEIGHT - RADIUS){
            ball[i].y = WINDOW_HEIGHT - RADIUS;
            ball[i].vy = - ball[i].vy * 0.75;
        }
        if(ball[i].x >= WINDOW_WIDTH - RADIUS){
            ball[i].vx = -10 - ball[i].vx;
            ball[i].vy = - ball[i].vy * 0.75;
        }
    }
    var cnt=0;
    for(var i=0;i<ball.length;i++)
        if((ball[i].x-RADIUS)>=0){//&& (ball[i].x+RADIUS)<WINDOW_WIDTH
            ball[cnt++] = ball[i];
        }

        while (ball.length > Math.min(300,cnt)){
            ball.pop();
        }
}
function addBalls(x,y,num) {
    for(var i=0;i<digit[num].length;i++)
        for(var j=0;j<digit[num][i].length;j++)
            if(digit[num][i][j] == 1){
                var a_Ball = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    /*vx:Math.round(4*Math.random()+2)*Math.pow(-1,Math.floor(Math.random()*1000)),
                    vy:-5,*/
                    vx:4*Math.pow(-1,Math.ceil(Math.random()*1000)),
                    vy:-5,
                    g:1.5+Math.random(),
                    color:color[Math.floor(Math.random()*color.length)]
                };
                ball.push(a_Ball);
            }
}



function render(con) {
    //每次绘制刷新屏幕
    con.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

    var hours = parseInt(curShowTimeSecond/3600),//强制转换格式从long到int
        minutes = parseInt((curShowTimeSecond-hours*3600)/60),
        seconds = curShowTimeSecond%60;

    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),con);
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),con);
    renderDigit(MARGIN_LEFT + 30*(RADIUS+1),MARGIN_TOP,10,con);
    renderDigit(MARGIN_LEFT+ 39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),con);
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),con);
    renderDigit(MARGIN_LEFT + 69*(RADIUS+1),MARGIN_TOP,10,con);
    renderDigit(MARGIN_LEFT+ 78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),con);
    renderDigit(MARGIN_LEFT + 93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),con);

    for(var i=0;i<ball.length;i++){
        //con.fillStyle = rgb(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        con.fillStyle = ball[i].color;
        con.beginPath();
        con.arc(ball[i].x,ball[i].y,RADIUS,0,2*Math.PI);
        con.closePath();
        con.fill();
    }

}
function renderDigit(x,y,num,con) {

    con.fillStyle = '#005588';
    for(var i=0;i<digit[num].length;i++)
        for(var j=0;j<digit[num][i].length;j++)
            if(digit[num][i][j]==1){
                con.beginPath();
                con.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                con.closePath();
                con.fill();
            }
}