$(document).ready(function () {
    //自定义的自动补全
    //利用回调函数来写

   /* $('#email').autocomplete({
       source:function (request,response) {
           response(['aa','aaa','aaaaaaa']);//展示结果
           //alert(request.term);   //得到你输入的值
       } 
    });*/

   /*var arr = [1,2,3],
        re = $.grep(arr,function (value,index) {
        return index>0;
    });
    alert(re);*/

    $('#email').autocomplete({
        autoFocus:true,
        delay:0,
        source:function (request,response) {
            var hosts = ['qq.com','163.com','263.com','gemail.com','hostemail.com'],
                term = request.term, //得到输入的数据
                name = term,  //用户名
                host = '', //域名
                ix = term.indexOf('@'), //@的位置
                result = [];  //结果

            result.push(term);

            if(ix>-1){
                name = term.slice(0,ix);  //获取到用户名
                host = term.slice(ix+1);  //获取到域名
            }

            if(name){
                var findedHosted = ( host ? $.grep(hosts,function (value,index) {
                    return value.indexOf(host)>-1;
                }): ''),
                    findedResult = $.map(findedHosted,function (value,index) {
                        return name + '@' + value;
                    });
            }
            result = result.concat(findedResult);
            response(result);
        }
    });

});