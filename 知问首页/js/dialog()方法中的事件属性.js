$(document).ready(function () {

    /*************************************

        dialog()方法的事件

     ************************************/




        //对话框被激活以及每次被点击时调用回调函数
    /*$('#login').dialog({
       focus:function (e) {
           alert('已弹出');
       }

    });
    $('#reg').dialog({
        focus:function (e) {
            alert('已弹出1');
        }
    });*/


    $('#login').dialog({

       /* create:function (e) {  //只要被创建出来就会回调
            alert('被创建');
        },
        autoOpen:false,*/

        open:function (e) {     //只要显示出来就会回调
            alert('打开');
        }

        /*beforeClose:function (e) {    //将要关闭时回调
            alert('将要关闭');
            return false;//返回false将不会关闭
        }*/

       /* close:function (e) {
            alert('关闭');
        }*/

       /*drag:function () {   //移动的时候回调
           alert("正在移动！");
       }
       drag:function (e,ui) {
            alert("正在移动！"+'left'+ui.position.left
            +'top'+ui.position.top);
        }*/

       /*dragStart:function (e,ui) {    //开始移动的时候会回调
           alert('left：'+ui.position.left+'\n'
               +'top：'+ui.position.top);
       }*/

       /* dragStop:function (e,ui) {    //移动停下的时候会回调一次
            alert('left：'+ui.position.left+'\n'
                +'top：'+ui.position.top);
        }*/

        /*resize:function (e,ui) {        //每一次改变对话框大小就会回调
            alert('width：'+ui.size.width+'  height：'+ui.size.height+'\n'+
                'left：'+ui.position.left+'  top：'+ui.position.top+'\n'+
                'originalSize：'+ui.originalSize.width+' | '+ui.originalSize.height+'\n'+
                'originalPosition：'+ui.originalPosition.top+' | '+ui.originalPosition.left);
        }*/

        /*resizeStart:function (e,ui) {        //开始改变对话框大小就会回调
            alert('width：'+ui.size.width+'  height：'+ui.size.height+'\n'+
                'left：'+ui.position.left+'  top：'+ui.position.top+'\n'+
                'originalSize：'+ui.originalSize.width+' | '+ui.originalSize.height+'\n'+
                'originalPosition：'+ui.originalPosition.top+' | '+ui.originalPosition.left);
        }*/
        /*resizeStop:function (e,ui) {        //结束改变对话框大小就会回调
            alert('width：'+ui.size.width+'  height：'+ui.size.height+'\n'+
                'left：'+ui.position.left+'  top：'+ui.position.top+'\n'+
                'originalSize：'+ui.originalSize.width+' | '+ui.originalSize.height+'\n'+
                'originalPosition：'+ui.originalPosition.top+' | '+ui.originalPosition.left);
        }*/

    });

});