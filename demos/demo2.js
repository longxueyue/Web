
$(function () {
    var firstNum = new Array(20);
    var secondNum = new Array(20);
    var i=0,j=0;
    var ch,flag=true;
    $('.symbol').on('click',function () {
        getVal($(this).val());
    });
    if(flag){
        $('.number').on('click',function () {
            getValN($(this).val());
        });
    }
    else {
        $('.number').on('click',function () {
            $('#result').val(0);
            getValN($(this).val());
        });
    }

    function getValN(num) {
        if(flag)
            firstNum[i++] = num;
        else{
            secondNum[j++] = num;
        }
        if($.trim($('#result').val())==0)   /*trim()删除字符串开始和末尾的空格*/
        {
            $('#result').val(num);
        }
        else {
            var con = $('#result').val();
            /*  var patt = new RegExp(/\d/);
              var len = patt.exec(con).length;*/
            var len = con.match(/[0-9]/g).length;
            if(len%3==0){     //解析一个字符串并返回一个整数
                $('#result').val(con+','+num);
            }
            else
                $('#result').val(con+num);
        }
    }
    function getVal(str) {
        ch = str;
        var sum = 0 ;
        if(flag)
            for(var i=0 in firstNum)
                sum = sum * 10 + parseInt(firstNum[i]);
        else
            for(var i=0 in secondNum)
                sum = sum * 10 + parseInt(firstNum[i]);
        $('#Pre').val(sum+ch);
        flag=false;
    }
});


