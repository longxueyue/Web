$(function () {

    /*
    $('input').bind('click',function (e) {
        alert(e);
    })

    $('input').bind('click',function (e) {
        alert(e.type);    //获取到事件的类型
    })
    $('input').bind('click',function (e) {
        alert(typeof e.type);//获取到事件类型的数据类型
    })

    $('input').bind('click',function (e) {
        alert(e.target);    ///target 是获取触发元素，也就是点击哪个就会获取到哪个元素
    });
    $('div').bind('click',function (e) {
        alert(e.currentTarget);   //currentTarget 得到的是监听元素的DOM，你绑定的是哪个就获取到哪个
    });
//移入移出目标点进入或者离开的那个临近元素
    $('span').bind('mouseenter',function (e) {   //或者mouseover  移入
        alert(e.relatedTarget);
    })

   $('span').bind('mouseleave',function (e) {   //或者mouseout  移出
        alert(e.relatedTarget);
    })
    $(document).bind('click',function (e) {
        alert(e.pageX+":"+e.screenX+":"+e.clientX);
    })

    $(window).bind('click',function (e) {
        alert(e.pageY+":"+e.screenY+":"+e.clientY);
    })///pageX/Y 是相对于可视页面的原点，也就是窗口的左上角
    ///screenX/Y 是以显示器左上角为原点，相对于显示器屏幕位置来说
    ///clientX/Y 是相对于页面视口而非页面原点来说的

    $('input').bind('click',[123,'acv'],function (e) {
        alert(e.data[0]);
    })
     $('input').bind('click',function (e) {
            return 1223;
        });
        $('input').bind('click',function (e) {
            $('input:text').append(e.result);
            //alert(.result);
        })
   $('input').bind('click',function (e) {
        alert(e.timeStamp);//获取时间戳
    })
    $('input').bind('mousedown',function (e) {
        alert(e.which);//获取鼠标左中右点击(1,2,3)
    })
    $('input').bind('keydown',function (e) {
        alert(e.altKey);//按下alt建点击input会返回true
    })//同理还有shift和CTRL
*/

/*



    $('input').click(function (e) {
        e.stopPropagation()//阻止冒泡行为
        alert(e.isPropagationStopped());//判断是否执行了stopPropagation()方法
    });
//阻止默认行为
    $('a').click(function (e) {
        e.preventDefault();//阻止默认行为    //阻止了a的默认行为
        alert('baidu.com');
    })
    $('a').click(function (e) {
        e.preventDefault();//阻止默认行为    //阻止了a的默认行为
        alert(e.isDefaultPrevented());//判断是否执行了preventDefault()方法
    })
    //禁止表单提交
    $('from').submit(function (e) {
        e.preventDefault();//禁止了
    })
    */
    //冒泡行为
    $('input').click(function (e) {
        //e.stopPropagation()//阻止冒泡行为
        e.stopImmediatePropagation();//阻止冒泡行为
        alert('input');
        alert(e.isImmediatePropagationStopped());//判断是否使用了stopImmediate...()方法
    });
    $('div').click(function () {
        alert('div');
    });
    $(document).click(function () {
        alert('document');
    });





});