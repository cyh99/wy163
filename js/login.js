// const { ajax } = require("jquery");

$.validator.setDefaults({
    submitHandler: function() {
        var act = $('#account').val()
        var psd = $('#password').val()
        $.ajax({
            url : "../json/account.json",
            type : "get",
            dataType : "json",
            success : function (data) {
                // console.log(typeof data)
                // console.log(data)
                var flag = false
                for (var i = 0,len = data.length; i < len ; i ++){
                    if(act == data[i].account && psd == data[i].password){
                        flag = true
                    }
                }
                if(flag){
                    window.location.href = './index.html'
                }else {
                    alert('账号或密码错误,请重新输入')
                }
            },
            error : function () {

            }
        })
    }
});
$().ready(function() {
    $("#login").validate({
        rules : {
            account:{
                required : true,
                minlength : 4,
                maxlength : 12
            },
            password:{
                required :true,
                minlength :6,
                maxlength : 16
            }

        },
        messages : {
            account : {
                required : "请输入账号",
                minlength : "最少由4个字符组成",
                maxlength : "最多由12个字符组成"
            },
            password : {
                required : '请输入密码',
                minlength : "最少由6个字符组成",
                maxlength : "最多由16个字符组成"
            }
        }
    }
    );
});


// $.ajax({
//     url:'../json/index-new.json',
//     type:'get',
//     dataType : 'json',
//     success:function (data){
//         console.log(data)
//     },
//     error : function (status){
//         console.log(status)
//     }
// })
