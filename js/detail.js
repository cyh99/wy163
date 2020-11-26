// 点击购物车跳转
var carBtn = document.querySelector('.car-btn')
carBtn.onclick = function () {
    window.location.href = './shop-car.html'
}
// 移入选择列表替换展示图片
var imgList = document.querySelector('.img-list')
var showImg = document.querySelectorAll('.img-list img')
var dataShow = document.querySelector('.data-show-img')
var bigImg = document.querySelector('.data-big-img')

imgList.onmouseover = function (e) {
    var e = e || window.event
    var target = e.target || e.srcElement
    if(target.nodeName.toLowerCase() == 'img'){
        dataShow.src = target.src
        bigImg.src = target.src
    }
}

// 放大镜效果
var smallImgBox = document.querySelector('.show-img')
var bigImgBox = document.querySelector('.big-img')
var mask = document.querySelector('.mask')

// 鼠标移入移除展示图片时放大镜图片的显示与影藏
smallImgBox.onmouseenter = function() {
    mask.style.display = 'block'
    bigImgBox.style.display = 'block'
}
smallImgBox.onmouseleave = function() {
    mask.style.display = 'none'
    bigImgBox.style.display = 'none'
}

smallImgBox.onmousemove = function (e) {
    e = e || window.event
    var maskLeft = e.pageX - offset(smallImgBox).left - mask.clientWidth/2
    var maskTop = e.pageY - offset(smallImgBox).top - mask.clientHeight/2
    // 限制 mask 出移动范围
    if(maskLeft < 0){
        maskLeft = 0
    }
    if(maskTop < 0){
        maskTop = 0
    }
    if(maskLeft >= smallImgBox.clientWidth - mask.clientWidth){
        maskLeft = smallImgBox.clientWidth - mask.clientWidth + 1
    }
    if(maskTop >= smallImgBox.clientHeight - mask.clientHeight){
        maskTop = smallImgBox.clientHeight - mask.clientHeight + 1
    }

    mask.style.left = maskLeft + 'px'
    mask.style.top = maskTop + 'px'

    // 计算小图移动的百分比
    var scaleX = maskLeft/(smallImgBox.clientWidth - mask.clientWidth)
    var scaleY = maskTop/(smallImgBox.clientHeight - mask.clientHeight)

    // 大图跟着移动(大图移动反向跟小图移动反向相反)
    bigImg.style.left = -scaleX * (bigImgBox.clientWidth - mask.clientWidth) + 'px'
    bigImg.style.top = -scaleY * (bigImgBox.clientHeight - mask.clientHeight) + 'px'
}

// 商品规格图片切换
var size = document.querySelector('.size')
size.onclick = function (e) {
    e = e || window.event
    var target = e.target || e.srcElement
    if (target.nodeName.toLowerCase() == 'img'){
        dataShow.src = target.src
        bigImg.src = target.src
    }
    // if(target.nodeName.toLowerCase() == 'img') {
        // target.style.border = '2px solid #B5A178'
    // }
}

// 增加减少按钮选项
var goodsNum = document.querySelector('.goods-num')
var cut = document.querySelector('.cut')
var add = document.querySelector('.add')
add.onclick = function () {
    console.log(goodsNum.value)
    goodsNum.value ++
    if(goodsNum.value >= 2){
        goodsNum.value = 2
        add.style.cursor = 'not-allowed'
        add.style.color = '#ccc'
    }
    else {
        cut.style.cursor = 'pointer'
        cut.style.color = '#333'
    }
}
cut.onclick = function () {
    goodsNum.value --
    if(goodsNum.value <= 0){
        goodsNum.value = 0
        cut.style.cursor = 'not-allowed'
        cut.style.color = '#ccc'
    }else {
        add.style.cursor = 'pointer'
        add.style.color = '#333'
    }
} 

goodsNum.oninput = function () {
    if(goodsNum.value >= 2){
        goodsNum.value = 2
        add.style.cursor = 'not-allowed'
        add.style.color = '#ccc'
    }else {
        add.style.cursor = 'pointer'
        add.style.color = '#333'
    }
    if(goodsNum.value <= 0){
        goodsNum.value = 0
        cut.style.cursor = 'not-allowed'
        cut.style.color = '#ccc'
    }else {
        cut.style.cursor = 'pointer'
        cut.style.color = '#333'
    }
}



// 获取元素到最外层定位父级的距离
function offset(dom, bool) {
	var t = 0, l = 0
	var bdl = dom.clientLeft // 保存当前元素的左边框
	var bdt = dom.clientTop// 保存当前元素的上边框
	while (dom) {
		l += dom.offsetLeft + dom.clientLeft
		t += dom.offsetTop + dom.clientTop
		// 每次循环完让当前dom元素等于他的定位父级
		dom = dom.offsetParent
	}
	if (bool) {// 包含自身边框
		return { left: l, top: t }
	} else {// 不包含自身边框
		return { left: l - bdl, top: t - bdt }
	}
}
