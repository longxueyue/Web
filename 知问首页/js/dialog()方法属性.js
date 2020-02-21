$(document).ready(function () {

    /*******************************************
                    开启多个dialog
                    修改dialog样式
                  dialog()方法的属性
     *******************************************/



    $('#search_button').button();
    /*$('#login_a').click(function () {
        $('#reg').dialog();//显示弹框
    });*/

    //$('#login').dialog();不同的id可以开启多个对话框



/*
    $('#reg').dialog({
        title:'知问注册',//优先级大于html中设的
        buttons:{
            '提交':function () {
                alert('正在检测中.....');
            },
            '取消':function () {
                $(this).dialog('close');
            }
        },//加入按钮
        //position:{my: "right top", at: "right top", of: window},
        width:200,
        height:300,//设置其高与宽,内置px故不需要设置
        minWidth:100,
        minHeight:100,
        maxWidth:300,//最大与最小高与宽
        maxHeight:400,
            //显示与关闭对话框时默认淡入淡出效果
        //show:true,
        //hide:true
            //效果的其余参数
        //show:'blind',
        //hide:'blind'

            //dialogd的行为选项
        autoOpen:false,  //默认是true显示，为false不可见，调用open方法显示

        //draggable:false,    //不可移动

        //resizable:false,    //不可调整其大小

        modal:true,  //为true时无法操作对话框外

        closeText:'关闭',//设置关闭按钮的title文字
    });*/
    /*$('#login_a').click(function () {
        $('#reg').dialog('open');
    });
*/
});