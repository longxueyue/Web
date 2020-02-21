/**********************************
 *      dialog()的方法
 *********************************/

$(document).ready(function () {
    $('#reg').dialog({
        title:'王欣',
        buttons:{
            '提交':function () {
                alert('正在检测中.....');
            },
            '取消':function () {
                $(this).dialog('close');
            }
        },
        width:400,
        height:200,
        autoOpen:true
    });
   /* $('#reg_a').click(function (e) {
        $('#reg').dialog('open');       //打开
        e.stopPropagation();
    });
    $(document).click(function () {
        //$('#reg').dialog('close');      //关闭
        //$('#reg').dialog('destroy');       //删除对话框，连同元素
    });*/
    //alert($('#reg').dialog('isOpen'));      //判断对话框是否打开
    //$('#reg').dialog('open');
    //$('#reg').dialog('widget').css('font-size','30px'); //widget返回的是整个对象
                                                            //故在对整个对象操作

    //alert($('#reg').dialog('option','title'));  //获取某个属性值
    $('#reg').dialog('option','title','路飞桑');  //设置某个属性的值
    /*$('#reg').on('dialogopen',function (e) {
        alert('打开了');
     });*/

    //dialog('widget');//返回的是jquery对象，包含生成的包装器
    $('#reg').dialog('widget').find('button').eq(1).button('disable');
    //寻找禁用的button




});
