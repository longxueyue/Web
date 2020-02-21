$(document).ready(function () {

    var host = ['aaa','aa','bb','aaaaaa'];
    $('#email').autocomplete({
        source:host,
        //disabled:true,//禁止
        minLength:0,//自动补全最小长度为2
        //autoFocus:true,//自动选中第一个选项
        /*position:{
            my:'',
            at:''
        }默认就好*/

        //初始化的方法事件
       /* focus:function (e,ui) {
            ui.item.value += '123';
        }//自动补全获得焦点时调用
       select:function (e,ui) {
           alert(ui.item.label);//label是选定的文本，value是输入框的值
       }//自动补全被选定时触发
       change:function (e) {
           alert('失去焦点，内容被惨淡的修改！');
       }
       search:function (e) {
           alert('自动补全搜索完毕！！');
       } */
    });

    //初始化完毕之后的方法
                //大多雷同不写啦！
    //$('#email').autocomplete('search','a');//自动展现补全结果
    //$('#email').autocomplete('search','');//为空时只要minLength为0就能全部展现



    //on()方法事件
    $('#email').on('autocompleteclose',function () {
       alert('Hello!');
    });


});