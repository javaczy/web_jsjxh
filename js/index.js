// /*********波浪动画**********/
$(function() {
    var marqueeScroll = function(id1, id2, id3, timer) {
        var $parent = $("#" + id1);
        var $goal = $("#" + id2);
        var $closegoal = $("#" + id3);
        $closegoal.html($goal.html());
        function Marquee() {
            if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
                $parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
            } else {
                $parent.scrollLeft($parent.scrollLeft() + 1);
            }
        }
        setInterval(Marquee, timer);
    }

    var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
    var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);

});
/******************登录**********************/
function foLogin() {
    var oUname = document.getElementById("uname");
    var oError = document.getElementById("error_box");
    var oUpass = document.getElementById("upass");

    var isError = true;
    oError.innerHTML = "<br>";

    if (oUname.value.length < 6 || oUname.value.length > 12) {
        oError.innerHTML = "学号需要6-12位";
        isError = false;
        return;
    }else for (var i=0;i<oUname.value.length;i++){
        if((oUname.value.charCodeAt(i)<48)||(oUname.value.charCodeAt(i)>57)&&(oUname.value.charCodeAt(i)<58)&&(oUname.value.charCodeAt(i)>97)){
            oError.innerHTML="学号只能为数字和字母";
            return;
        }
    }



    if (oUpass.value.length < 6 || oUpass.value.length > 12) {
        oError.innerHTML = "密码要6-12位";
        isError = false;
        return;
    }
}
/*********吸顶效果**********/
$(function(){

    var ceilingTop = $('.floor').offset().top;

    $(document).on('scroll',function(){
        if($(document).scrollTop() > ceilingTop){
            $('.floor').css({
                "position":"fixed",
                "top":0,
            })
        }else{

            $('.floor').css({
                "position":"absolute",
                "top":"557px",
                "background-color":"#8c8c8c",
            })
        }
    })
})

/*********楼层特效**********/
//          第一种点击li元素到相应的楼层的方法,可以直接用锚点的方式,然后加上点击后的效果
//          $(".floor li").click(function(){
//              $(this).addClass("active").siblings().removeClass("active")
//          })

//          第二种点击li元素到相应的楼层的方法，锚点要去掉
var flag = true //设置标识。防止出现跑马灯
$(".floor li").click(function(){
    flag = false
    $(this).addClass("active").siblings().removeClass("active")
    var index = $(this).index()//获取当前点击元素的索引
    var top = $(".banner").eq(index).offset().top;//获取每个banner到顶部的距离
    $("html,body").stop(true).animate({"scrollTop":top},function(){flag = true})
})

//          滚轮滑动切换楼层
$(window).scroll(function(){
    if(flag){
        //浏览器可视窗口的一半，也可以根据自己需求设定
        var winH = $(window).innerHeight()/1;
        var scrollT = $(window).scrollTop()
        var len = $(".banner").size()
        for(var i=0;i<len;i++){
            //注意这里banner对象加了i之后变成了js对象,所以用offsetTop
            var bannerGap = $(".banner")[i].offsetTop - scrollT
            if(bannerGap < winH){
                $(".floor li").eq(i).addClass("active").siblings().removeClass("active")
            }
        }
    }
})
