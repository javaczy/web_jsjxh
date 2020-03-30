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

    var ceilingTop = $('.ceiling').offset().top;

    $(document).on('scroll',function(){
        if($(document).scrollTop() > ceilingTop){
            $('.ceiling').css({
                "position":"fixed",
                "top":0,
            })
        }else{

            $('.ceiling').css({
                "position":"absolute",
                "top":"557px",
                "background-color":"#8c8c8c",
            })
        }
    })
})