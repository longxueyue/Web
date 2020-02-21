$(function(){

    //alert($('input').length);//有两个表单元素
    //alert($('input[type=password]').val());//属性选择器
    //alert($('input[type=password][name=pass]').val());//可以找多个属性


    //alert($('input').length);这个方法只能识别form里面的
    //alert($(':input').length);//可以识别出所有的表单元素
    //alert($(':input[name=city]').length);
    //alert($(':button').length);
    //alert($(':radio').length);
    //alert($(':radio').eq(1).val());
    //alert($('form :hidden').length);

    //表单过滤器
    //alert($('form :enabled').length);//选取可用元素   要使元素不可用，加上disable属性
    //alert($('form :disabled').length);//选取不可用元素
    //alert($('form :checked').length);//选取单选和复选被选取的字段
    alert($('form :selected').length);//选取下拉列表被选取的字段
    //alert($('form :selected').get(0));//
});