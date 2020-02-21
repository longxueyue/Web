$(document).ready(function () {
    /*************************************
            button()方法的属性和方法
     *************************************/

    $('#search_button').button({
        //disabled:true  //按钮设置成未激活
        //label:'哈喽',   //改变按钮中的文本，未设置则使用HTML中所设置的
        icons:{       //加图标
            primary: "ui-icon-arrow-1-ne",
            secondary: "ui-icon-triangle-1-s"
        },
        /*'create':function (e,ui) {
            alert('啊，我被创建啦！！！！');  //当按钮被创建时调用
        }*/
    });

    //方法


    //$('#search_button').button('disable');//禁用button
    //$('#search_button').button('enable');//启用button
    //$('#search_button').button('destroy');//移除button功能

    /*var str = $('#search_button').button('option','disabled');//查询属性的值
    alert(str);*/
    //$('#search_button').button('option','label','哈喽');//设置某个属性的值
    /*$('#search_button').button('option',{
        'label':'哈喽',
        'disabled':'true'
    });*/   //对象键值对的方式设置

    //$('#search_button').button('refresh');


    /********************************
     单选框与复选框的操作
     *******************************/

    $('#reg input[type=radio]').button();//有间隔的
    $('#reg').buttonset();//无间隔
    /*<div id="reg">
            <input type="radio" name="sex" value="male" id="male"><label for="male">男</label></input>
            <input type="radio" name="sex" value="female" id="female"><label for="female">女</label></input>
            <!--复选框同上-->
        </div>
        <input id="login">

        </div>*/
    //复选框同上
});