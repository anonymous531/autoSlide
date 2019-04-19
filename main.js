var allButtons = $('#buttons > button')
for(let i=0;i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -275
        movePx.call(undefined,p,index,'pink')
        n = index
    })
}
var n = 0
var timer = setInterval(function(){
    var num = n%allButtons.length
    var a = num * -275
    movePx.call(undefined,a,num,'pink')
    n++
},1000)
$('#window').on('mouseenter',function(){
    window.clearInterval(timer)
})
$('#window').on('mouseleave',function(){
    timer = setInterval(function(){
        var num = n%allButtons.length
        var a = num * -275
        movePx.call(undefined,a,num,'pink')
        n++
    },1000)
})

//功能函数
function movePx(px,index,className){
    $('.images').css({
        transform:'translateX('+ px +'px)'
    })
    allButtons.eq(index).addClass(className).siblings('.pink').removeClass(className)
}