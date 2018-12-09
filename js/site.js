$(function () {
    $("#footer").load("footer.html");

    $(".i_bock3_item").mouseenter(function () {
        $(this).find(".i_bock3_item_float").css("display", "block");
    })
    $(".i_bock3_item").mouseleave(function () {
        $(this).find(".i_bock3_item_float").css("display", "none");
    })
    $("body").on('click', '.scroll_top', function () {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    })
    /*人才招聘*/
    $(".r_bock1_btn").click(function () {
        $(".r_bock1_btn").removeClass('r_btn_active');
        $(this).addClass('r_btn_active');
        //当前索引
        var index = $(this).parent().index();
        $(".r_job_info").css('display', 'none');

        $(".r_job_info").eq(index).css('display', 'block');
    })
    /*人才招聘*/


})