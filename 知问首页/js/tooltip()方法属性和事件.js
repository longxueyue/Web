$(document).ready(function () {

    $('[title]').tooltip({
        //disabled:true,禁用title提示
        //content:'我是阿贝！',改变title中的内容
        //item:'input',限制只有input中的才能显示title
        tooltipClass: 'a',//自定义的样式类
        hide:false,
        show:false,
        //track:true,//跟踪鼠标显示
        position:{
            my: 'left center',   //my的参考对象是以左下角来对应title的位置
            at: 'right+15 center' //at相对于my来确定的
        },

                    /*初始化方法的事件*/
        //open:function (e,ui) {
         //   alert('hello ');
        //}           //打开事件，另外还有close和create事件
    });

    //初始化后加入的事件
   /* $('#user').tooltip('open');//打开，刷新完就处于打开
    $('#user').tooltip('close');//关闭
    $('#user').tooltip('disable');//禁用
    $('#user').tooltip('enable');//启用
    $('#user').tooltip('destroy');//删除提示
    $('#user').tooltip('widget');//获取其jQuery对象
    $('#user').tooltip('option','content');//取值
    $('#user').tooltip('option','content','和平');//设置值*/

   //on方法
    /*$('#user').on('tooltipopen',function (e) {
       alert('hello');
       e.stopPropagation();
    });
    $('#user').on('tooltipclose',function (e) {
        alert('bye');
        e.stopPropagation();
    });*/
});