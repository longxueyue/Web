
function BoyWalk() {
    var container = $('#content');

    var visualWidth = container.width(),
        visualHeight = container.height();//获得可视距离

//得到路的数据
    var getValue = function (className) {
        var data = $(className);
        return ({
            height:data.height(),
            top:data.position().top,
        });
    };

//获取y轴的值，加括号来执行函数
    var pathY = function () {
        var data = getValue('.a_background_middle');
        return data.top + data.height/2;
    }();

    var $boy = $('#boy'),
        boy_height = $boy.height();

    $boy.css({
        top: pathY - boy_height + 25 + 'px',
    });
    /********  动画的实现  ***************/

    function restoreWalk() {
        $boy.removeClass('pauseWalk');
    }
    function slowWalk() {
        $boy.addClass('slowWalk');
    }
    function pauseWalk() {
        $boy.addClass('pauseWalk');
    }
//计算移动距离
    function calculateDist(direction,speed) {
        return (direction == 'x'?visualWidth:visualHeight)*speed;
    }
//做运动
    function startRun(options,runTime) {
        var playDelay = $.Deferred();//创建
        //恢复走路
        restoreWalk();
        //运动的属性，
        $boy.animate(
            options,
            runTime,
            'linear',
            function () {
                playDelay.resolve();//成功
            }
        );
        return playDelay;
    }

//开始走路
    function startWalk(time,disX,disY) {
        var time = time || 3000;//如果time为0则是3000，否则为time

        // 进行走路动画
        slowWalk();
        var d1 = startRun({
            'left':disX + 'px',
            'top':disY?disY:undefined,
        },time);
        return d1;
    }

    return {
        //开始走
        walkTo:function (time,speedX,speedY) {
            var distX = calculateDist('x',speedX);
            var distY = calculateDist('y',speedY);
            return startWalk(time,distX,distY);
        },
        //停止走路
        stopWalk:function () {
            return pauseWalk();
        },
        setColor:function (value) {
            $boy.css('background-color',value);
        }

    }
}

