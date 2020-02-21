$(function () {
/*
    $('.button').click(function () {
        $('#box').animate({
            width:'100px',
            height:'100px',
            opacity:0.5,
            fontSize:'15px'
        },2000,function () {
            alert('动画完毕！');
        });
    });   //其中的参数可有可无，凭自己控制

    $('.button').click(function () {
       $('#box').animate({
           left:'200px',
           top:'100px'
       },'slow');  //加入速度
    });

    $('.button').click(function () {
        $('#box').animate({
            left:'+=100px',   //提供了累加累减的功能
        },'slow');
    });

//利用回调函数来写
    $('.button').click(function () {
        $('#box').animate({
            width:'100px'
        },function () {
           $('#box').animate({
               height:'100px'
           },function () {
               $('#box').animate({
                  opacity:0.5
               },function () {
                   $('#box').animate({
                      fontSize:'25px'
                   });
               });
           });
        });
    });


    //在同一个元素的基础上实现队列动画，，可以使用连缀函数
    $('.button').click(function () {
        $('#box').animate({width:'100px'}).animate({height:'100px'});
    })
    //或者顺序排列调用
    $('.button').click(function () {
        $('#box').animate({width:'100px'});
        $('#box').animate({height:'100px'});
    })

    //如果不是同一个元素的话，，则队列动画怎么实现
    $('.button').click(function () {
        $('#box').slideUp('slow')
            .slideDown('slow')
            .queue(function () {
                $(this).css("background","orange");   //queue方法保证css方法不去干扰别的方法
            });
    });

    $('.button').click(function () {
        $('#box').slideUp('slow')
            .slideDown('slow')
            .queue(function (next) {
                $(this).css("background","orange");   //queue方法保证css方法不去干扰别的方法
                next();
            }).hide('slow');                        //如果想要在queue后面加入其余方法，则可以用next参数或者dequeue方法
    });

    $('.button').click(function () {
        $('#box').slideUp('slow')
            .slideDown('slow')
            .queue(function () {
                $(this).css("background","orange");   //queue方法保证css方法不去干扰别的方法
                $(this).dequeue();//以前的方法
            }).hide('slow');                        //如果想要在queue后面加入其余方法，则可以用next参数或者dequeue方法
    });
*/
    //清理队列方法
    $('.button').click(function () {
        $('#box').slideUp('slow')
            .slideDown('slow',function () {$(this).clearQueue()})  //清理队列的方法
            .queuefunction( (next) {
                $(this).css("background","orange");
                next();
            }).hide('slow');
    });







});