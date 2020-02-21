$(function () {
/*          默认不加参数的效果
    $('.show').click(function () {
        $('#box').show();
    })
    $('.hide').click(function () {
        $('#box').hide();
    })
    //有两个参数，一个是持续时间，另一个是回调函数
    $('.show').click(function () {
        $('#box').show(1000);
    })
    $('.hide').click(function () {
        $('#box').hide(1000);
    })
  //关于时间还有三个预设速度，slow normal fast 600ms 400ms 200ms
    $('.show').click(function () {
        $('#box').show('slow');
    })
    $('.hide').click(function () {
        $('#box').hide('normal');
    })
    //假如传入的参数有错，则默认是400ms


    //队列动画，逐个显示
    $('.show').click(function () {
        $('.test').first().show('slow',function showTest() {
            $(this).next().show('fast',showTest);
        });
    });
    $('.hide').click(function () {
        $('.test').last().hide('slow',function hideTest() {
            $(this).prev().hide('fast',hideTest);
        })
    })

    $('.toggle').click(function () {
        $('#box').toggle(1000);
    })     //切换函数


    $('.show').click(function () {
        $('#box').slideDown(1000);  //向下展开
    });
    $('.hide').click(function () {
        $('#box').slideUp(1000);    //向上卷缩
    });
    $('.toggle').click(function () {
        $('#box').slideToggle(1000);    //向上卷缩
    });

 */
    $('.show').click(function () {
        $('#box').fadeIn(1000);  //淡入
    });
    $('.hide').click(function () {
        $('#box').fadeOut(1000);    //淡出
    });
    $('.toggle').click(function () {
        $('#box').fadeToggle(1000);    //切换淡入淡出
    });
    $('.to').click(function () {
        $('#box').fadeTo('fast',0.5);    //透明度到
    });
});