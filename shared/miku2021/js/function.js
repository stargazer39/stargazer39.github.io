// mobile menu open/close -------------------------------------------------
jQuery(function() {

    var flag = false;
    $(".navBtn").click(function() {

        var scrollY = $(window).scrollTop();

        $("#nav").toggleClass("hide");
        $(".menu-trigger").toggleClass("active");
    });
});


//smooth scroll -----------------------------------------
jQuery(function() {
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#header" || href == "" ? 'html' : href);
        var position = target.offset().top - 80;
        $('html,body').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});


// backtotop ---------------------------------------------------
$(function() {
    var showFlag = false;
    var topBtn = $('#pageTop');
    topBtn.css('bottom', '-100px');
    var showFlag = false;
    //スクロールが100に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 60) {
            if (showFlag == false) {
                showFlag = true;
                topBtn.stop().animate({
                    'bottom': '30px'
                }, 200);
            }
        } else {
            if (showFlag) {
                showFlag = false;
                topBtn.stop().animate({
                    'bottom': '-100px'
                }, 200);
            }
        }
    });
    //スクロールしてトップ
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// lottie ---------------------------------------------------
lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../json/bg.json"
});