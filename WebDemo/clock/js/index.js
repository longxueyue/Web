window.onload = function () {


    var oImg = document.getElementById('container').getElementsByTagName("img");
    var date = new Date();

    var currentTime = addZero(date.getHours()) + addZero(date.getMinutes()) + addZero(date.getSeconds());
    var nextTime = "";
    var arr = [];
    var i, time = null;
    /*给当前时间添加图片*/
    for (i = 0; i < currentTime.length; i++) {
        oImg[i].src = "./images/" + currentTime[i] + ".png";
    }
    /*当前时间添加图片结束*/

    setInterval(toChange,1000);

    /*记录下一秒时间开始*/
    function toChange() {
        var date1 = new Date();
        nextTime = addZero(date1.getHours()) + addZero(date1.getMinutes()) + addZero(date1.getSeconds());
        timeChange(currentTime, nextTime);
        currentTime = nextTime;
    }

    /*记录下一秒时间结束*/

    /*时间改变的数字记录开始*/
    function timeChange(curr, next) {
        arr = [];
        for (i = 0; i < curr.length; i++) {
            if (curr[i] != next[i]) {
                arr.push(i);
            }
        }
        toStart();
    }

    /*时间改变的数字记录结束*/

    /*时间动画改变开始*/
    function toStart() {
        var speed = -4;
        time = setInterval(function () {
            for (i = 0; i < arr.length; i++) {
                if (oImg[arr[i]].offsetHeight == 0) {
                    speed = 4;
                    oImg[arr[i]].src = "./images/" + nextTime[arr[i]] + ".png";
                }
                oImg[arr[i]].style.height = oImg[arr[i]].offsetHeight + speed + "px";
                //console.log(oImg[arr[i]].offsetHeight/2)
                if (oImg[arr[i]].offsetHeight == 36) {
                    clearInterval(time);
                }
            }
        }, 10);
    }

    /*时间动画改变结束*/


    function addZero(num) {
        if (num < 10) {
            return "0" + num;
        } else {
            return num + "";
        }
    }
};