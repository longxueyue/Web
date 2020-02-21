$(function () {
/*
    $('.button').click(function () {
       $('#box').animate({left:'700px'},3000);
    });


    $('.button').click(function () {
        $('#box').animate({left:'400px'},1000)
            .animate({bottom:'200px'},1000)
            .animate({width:'250px'},1000)
            .animate({height:'250px'},1000)
    });
    $('.stop').click(function () {
        $('#box').stop(true);   //停止动画播放,不加参数的话，直接停止的是第一个动画
    });
    $('.button').click(function () {
        $('#box').animate({left:'400px'},1000)
            .animate({bottom:'200px'},1000)
            .animate({width:'250px'},1000)
            .animate({height:'250px'},1000)
    });
    $('.stop').click(function () {
        $('#box').stop(true,true);   //停止动画播放,不加参数的话，直接停止的是第一个动画
        //加入第二个参数是直接跳转到最后一个动画所在的位置
    });

    //递归执行，无限播放
    $('#box').slideToggle('slow',function () {
       $(this).slideToggle('slow',arguments.callee);
    });

    $('.button').click(function () {
       $(':animated').stop().css('background','orange');  //:animated查找正在运行的动画
    });
   // $.fx.off = true;//全局属性，关闭动画


   $('.button').click(function () {
        $('#box').animate({left:'400px'},3000,'swing') //.animate()还有一个参数，是easing运动方式
            .animate({bottom:'200px'},3000,'linear')        //swing缓动
            .animate({width:'250px'},3000,'swing')          //linear匀速运动
            .animate({height:'250px'},3000)
    });
*/
    $('.button').click(function () {
        $('#box').animate({left:'700px'},3000,'swing');
    });
    $('.button').click(function () {
        $('#box1').animate({left:'700px'},3000,'linear');
    });

});
