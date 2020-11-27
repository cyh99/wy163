// 轮播图1
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })

// 轮播图2
var mySwiper2 = new Swiper ('.swiper2', {
    loop: true,

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable :true,
  })
  
// 左侧导航
var aside = document.querySelector('.aside-left')
var li = document.querySelectorAll('.aside-left li')
window.onscroll = function () { 
    // 控制导航栏的定位
    if(window.scrollY > 605) {
        aside.style.position = 'fixed'
    } else {
        aside.style.position = 'absolute'
    }
    // if(window.scrollY < 605) {
    //     aside.style.position = 'absolute'
    // }

    // 控制导航栏的颜色
    if(window.scrollY < 1142){
        li[1].className = 'current'
        li[2].className = ''
    } else if (window.scrollY >=1142 && window.scrollY <1882) {
        li[1].className = ''
        li[2].className = 'current'
        li[3].className = ''
    } else if (window.scrollY >=1882 && window.scrollY <2505) {
        li[2].className = ''
        li[3].className = 'current'
        li[4].className = ''
    } else if (window.scrollY >=2505 && window.scrollY <3313) {
        li[3].className = ''
        li[4].className = 'current'
        li[5].className = ''
    } else if (window.scrollY >=3313 && window.scrollY <4413) {
        li[4].className = ''
        li[5].className = 'current'
        li[6].className = ''
    } else if (window.scrollY >=4413 && window.scrollY <4906) {
        li[5].className = ''
        li[6].className = 'current'
        li[7].className = ''
    } else if (window.scrollY >=4906 && window.scrollY <5706) {
        li[6].className = ''
        li[7].className = 'current'
        li[8].className = ''
    } else if (window.scrollY >=5706 && window.scrollY <6506) {
        li[7].className = ''
        li[8].className = 'current'
        li[9].className = ''
    } else if (window.scrollY >=6506 && window.scrollY <7285) {
        li[8].className = ''
        li[9].className = 'current'
        li[10].className = ''
    } else if (window.scrollY >=7285) {
        li[9].className = ''
        li[10].className = 'current'
    }
 }

// 存储数据到本地
$.ajax({
    url : "../json/account.json",
    type : "get",
    dataType : "json",
    success : function (data) {
        imAccount(data)
    },
    error: function(status){
        console.log(status)
    }
})
function imAccount(data) {
    window.localStorage.setItem('account',JSON.stringify(data))
}

// 拿到用户登录的 id
var topUl = document.querySelector('.topUl')
var loginName = document.querySelector('.loginName')
var loadId = getUrlParms('id') || ''
console.log(loadId)

// 通过用户的 id,拿到用户名
var storage = JSON.parse(window.localStorage.getItem('account'))

var name    // 定义变量接收用户账号名

storage.forEach(function (value,index) {
    if(value.id == loadId){
        name = value.name
    }
})
// 通过用户 id 来改变顶部导航的状态名
if(loadId !==  '' || loadId === 0){
    loginName.remove()
    var accountName = document.createElement('li')
    var accountLink = document.createElement('a')
    accountLink.innerHTML = name
    accountName.append(accountLink)
    topUl.insertBefore(accountName,topUl.childNodes[0])
}

// 购物车跳转
var carBtn = document.querySelector('.car-btn')
carBtn.onclick = function () {
    window.location.href = './shop-car.html'
}

//  数据渲染
// 居家生活版块
var homeList = document.querySelector('.home-list')
$.ajax({
    url:'../json/index.json',
    type: 'get',
    dataType : 'json',
    success : function (data){
        var str = ''
        data['new'].forEach(function(value,index){
            str += 
            `
            <div>
                        <a href="#" class="img">
                            <img src="${value.url}">
                        </a>
                        <span>${value.tag}</span>
                        <a href="#" class="p">
                            <p>${value.msg}</p>
                        </a>
                        <em>
                            <i>${value.price}</i> <strong>${value.oldPrice}</strong>
                        </em>
                    </div>
            `
        })
        homeList.innerHTML = str
    },
    error : function (status) {
        console.log(status)
    }
})

// 服饰鞋包版块
var clothingList = document.querySelector('.clothing .common-list')
$.ajax({
    url:'../json/index.json',
    type: 'get',
    dataType : 'json',
    success : function (data){
        var str = ''
        // console.log(data['new'])
        data['clothing'].forEach(function(value,index){
            str += 
            `
            <div>
                        <a href="#" class="img">
                            <img src="${value.url}">
                        </a>
                        <span>${value.tag}</span>
                        <a href="#" class="p">
                            <p>${value.msg}</p>
                        </a>
                        <em>
                            <i>${value.price}</i> <strong>${value.oldPrice}</strong>
                        </em>
                    </div>
            `
        })
        clothingList.innerHTML = str
    },
    error : function (status) {
        console.log(status)
    }
})

//获取地址栏参数，name:参数名称
function getUrlParms(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null)
        return unescape(r[2]);
    return null;
}