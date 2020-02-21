$(function () {

    /*$('input[type=button]').bind('click',function () {
       alert("您已点击");
    });//bind是jQuery的处理表单事件的函数
    $('input[type=button]').bind('click',fn);
    function fn() {
        alert("您已点击,aa");
    }

    $('input[type=button]').bind('click mouseover',function () {
        $('div').html(function (index,value) {
           return  index+value;//value是原本div的值
        });
    });

    $('input').bind('mouseover mouseout',function () {
        alert('我是大帅帅');
    });
//通过对象键值对绑定多个参数
    $('input[type=button]').bind({
        mouseover:function() {
            alert('放上去');
        },
        mouseout:function() {
            alert('移出去');
        },
        click:function(){
            alert('点击');
        }
    });
    $('input[type=button]').bind('click mouseover',function () {
        alert("您已点击");
    });*/
    //$('input').unbind();//删除所有事件
    //$('input').unbind('click');

    //$('input[type=button]').bind('click',fn_1);
    //$('input[type=button]').bind('click',fn_2);
    /*function fn_1() {
        alert('fn1');
    }
    function fn_2() {
        alert('fn2');
    }
    function fn(index,value) {
        return index+value;
    }
    $('div').html(fn);*/

    //基础事件下
/*
    $('div').mouseenter(function () {
        $('div').css('background','red');
    });                                     //此两个方法不会影响到子节点,绑定的是哪个就是哪个
    $('div').mouseleave(function () {
        $('div').css('background','green');
    });
    $('div').mouseover(function () {     //over方法可以影响到子节点
        $('em').html(function (index,value) {
            return value+'1';
        })
    });
    $('div').mouseout(function () {   //同理哦，与over相对应的out方法也会影响到子节点
        $('em').html(function (index,value) {
            return value+'1';
        })
    });

    $('div').mouseenter(function () {
        $('em').html(function (index,value) {
            return value+'1';
        })
    });
    $('input').keydown(function () {
       alert('按下');
    });
    $('input').keyup(function () {
        alert('抬起');
    });
    $('input').keydown(function (e) {
        alert(e.keyCode);//keydown与keyup返回的是键码
    });
    $('input').keypress(function (e) {
        alert(e.keyCode);//keypress返回的字符编码，按下 1 返回49
    });
    $('input').focus(function () {
        alert('光标激活');
    });                             //这两个用于元素的当前事件
    $('input').blur(function () {
        alert('光标丢失');
    });

    $('div').focusout(function () {
        alert('光标丢失');
    });                         //这两个函数既可以用于元素的当前事件，也可以用于子元素的事件
    $('div').focusin(function () {
        alert('光标激活');
    });
*/


    //复合事件
    /*$('div').hover(function () {
        $('div').css('background','red');//此方法有两个参数，第一个是移入，第二个是移出
    },function () {
        $('div').css('background','green');
    })*/
    //$('div').toggle();//没有参数是隐藏效果
    //$('div').toggle('slow');//缓慢展现播放

    //实现多次点击出现不同效果的方法
    var flag=1;
    $('div').click(function () {
        if(flag == 1){
            $('div').css('background','red');
            flag=2;
        }//加上if-else if
        else if(flag == 2){
            $('div').css('background','green');
            flag=3;
        }
        else if(flag == 3){
            $('div').css('background','blue');
            flag=1;
        }
    })







});
