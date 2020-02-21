$(document).ready(function () {
    var search_input = $('#search_input');
    search_input.on('keyup',function () {
         var searchText = $('#search_input').val();      /*此函数是服务器的回掉函数*/
        /*$.get('http://api.bing.com/qsonhs.aspx?q='+searchText,function (d) {
            var d = d.AS.Results[0].Suggests;
            var html = "";
            d.each(function (index,value) {
                html += '<li>'+d[index].text()+'</li>';
                console.log(d[index].text());
            });
            $('#search_input').html(html);//设置完值之后显示样式
            $('#search_suggest').show().css({
            position:'absolute',
                top:search_form.height()+search_form.offset().top,
                left:search_form.offset().left
            });
        },'json');/*服务器返回的数据是json类型*/
        var jqueryInput = $(this);
        $.get('http://api.bing.com/qsonhs.aspx?q='+searchText);
        //解决跨域问题
       /* $.ajax({
            type: 'GET',
            url:'http://api.bing.com/qsonhs.aspx?type=cb&cb=a&q='+searchText,
            dataType:'jsonp',
            jsonp:'cb',
            success: function(msg){
                var ons = msg.AS.Results[0].Suggests;
                var html = '';
                for(var i=0;i<ons.length;i++){
                    html += '<li><a target="_blank" href='+ ons[i].Url +'>'+ons[i].Txt+'</a></li>';
                }
                $('#search_suggest').html(html);
                console.log('sad');
                $('#search-suggest').show().css({
                    top: 'search-form.offset().top + search-form.outerHeight()',
                    left: 'search_form.offset().left',
                    position: 'absolute'
                });
            },
            error: function(jqXHR){
                alert('错误：'+jqXHR.status)
            }
        });*/
    });
    $('#search_suggest').show().css({
        position:'absolute',
        top:search_form.height()+search_form.offset().top,
        left:search_form.offset().left
    });
});