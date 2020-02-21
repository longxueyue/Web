$(document).ready(function () {
    $('#search_button').button();

    $('#reg input[type=radio]').button();
    $('#reg').dialog({
        title:'注册',
        autoOpen:true,  //对话框隐藏或显示
        modal:true,  //不可操作
        resizable:false,
        width:320,
        height:340,
        buttons:{
            '提交':function () {
                $(this).click(function () {
                    $('#reg').ajaxForm();
                });
            }
        }
    }).validate({
        submitHandler:function (form) {//表单成功提交后执行的函数
            console.log($(form).serialize());  //输出表单的结果
        },
        highlight:function (element,errorClass,validClass) {
          //console.log(element);//element是出错的元素，errorClass是错误添加的class
            //validClass是成功的class
            $(element).css('border','1px solid red');
            $(element).fadeOut(300).fadeIn(300);
        },
        unhighlight:function (element,errorClass,validClass) {
            $(element).css('border','1px solid #ccc');
            $(element).parent().find('span.aster').html('&nbsp;').addClass('succ');
        },
        showErrors:function (errorMap,errorList) {
            var errors = this.numberOfInvalids();
            if(errors>0){
                $('#reg').dialog('option','height',340+errors*20);
            }else{
                $('#reg').dialog('option','height',340);
            }
            this.defaultShowErrors();
        },
        errorLabelContainer:'ol.reg_error',
        errorElement:'li',
        rules : {
            user : {
                required : true,
                minlength:2,
                maxlength:10,
            },
            pass : {
                required : true,
                minlength:2,
                maxlength:10,
            },
            email:{
                required:true,
                email:true,
            },
        },
        messages : {
            user : {
                required: '帐号不得为空！',
                minlength: '最小长度为{0}位！',
                maxlength:'最大长度为10噢',
            },
            pass : {
                required: '密码不得为空！',
                minlength: '最小长度为{0}位！',
                maxlength:'最大长度为10噢',
            },
            email:{
                required:'请填写邮箱！',
                email:'请填写正确的邮箱！'
            },
        }
    });




});