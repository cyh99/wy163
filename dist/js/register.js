"use strict";

// const { ajax } = require("jquery");
$.validator.setDefaults({
  submitHandler: function submitHandler() {
    var name = $('#name').val();
    var account = $('#account').val();
    var password = $('#password').val();
    $.ajax({
      url: "../json/account.json",
      type: "get",
      dataType: "json",
      success: function success(data) {
        console.log(account);
        console.log(data);
        var flag = false;

        for (var i = 0, len = data.length; i < len; i++) {
          if (account == data[i].account) {
            console.log(account);
            console.log(data[i].account);
            flag = true;
            break;
          }
        }

        if (flag) {
          console.log('我不会走这儿');
          alert('账号已存在，请重新输入');
        } else {
          alert('注册成功，请登录');
          window.location.href = './login.html';
        }
      }
    });
  }
});
$().ready(function () {
  $("#register").validate({
    rules: {
      name: {
        required: true,
        minlength: 1,
        maxlength: 20
      },
      account: {
        required: true,
        minlength: 4,
        maxlength: 12
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 16
      }
    },
    messages: {
      name: {
        required: "请输入昵称",
        maxlength: "最多由20个字符组成"
      },
      account: {
        required: "请输入账号",
        minlength: "最少由4个字符组成",
        maxlength: "最多由12个字符组成"
      },
      password: {
        required: '请输入密码',
        minlength: "最少由6个字符组成",
        maxlength: "最多由16个字符组成"
      }
    }
  });
});