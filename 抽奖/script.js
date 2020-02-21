var oTitle = ['埃罗芒阿老师','霞之丘诗羽','加藤惠','雷姆','焰灵姬','泷雪月','楪祈'],
    timeL = null,
    flag = 0;//定义计数器
window.onload = function () {
    var play = document.getElementById('play'),
        stop = document.getElementById('stop');
    /*    play.onmouseover = function () {
            play.style.backgroundColor = '#Faa'
      }
        /*
        play.onmouseout = function () {
            play.style.backgroundColor = '#046';
        }
    */
    play.onclick = playFun;
    stop.onclick = stopFun;
    //键盘事件
    document.onkeyup = function (ev) {
        ev = ev || window.event;
        if(ev.keyCode == 13){
            if(flag==0){
                playFun();
                flag=1;
            }else{
                stopFun();
                flag=0;
            }
        }
    }
}
function playFun() {
    var title = document.getElementById('title');
    var play = document.getElementById('play');
    //清除上一个计数器
    clearInterval(timeL);
    timeL = setInterval(function () {
        var rand = Math.floor(Math.random()*oTitle.length);
        title.innerHTML = oTitle[rand];
    },50);
    play.style.backgroundColor = '#999';
}
function stopFun() {
    clearInterval(timeL);
    var play = document.getElementById('play');
    play.style.backgroundColor = '#046';
}