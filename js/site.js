﻿$(function () {
    $("#footer").load("footer.html");

    $(".i_bock3_item").mouseenter(function () {
        $(this).find(".i_bock3_item_float").css("display", "block");
        $(this).find(".i_bock3_over").css("display", "block");
        
    })
    $(".i_bock3_item").mouseleave(function () {
        $(this).find(".i_bock3_item_float").css("display", "none");
        $(this).find(".i_bock3_over").css("display", "none");
    })
    $("body").on('click', '.scroll_top', function () {
        $('html,body').animate({ scrollTop: '0px' }, 800);
    })
    /*人才招聘*/
    $(".r_bock1 .r_bock1_btn").click(function () {
        $(".r_bock1_btn").removeClass('r_btn_active');
        $(this).addClass('r_btn_active');
        //当前索引
        var index = $(this).parent().index();
        $(".r_job_info").css('display', 'none');

        $(".r_job_info").eq(index).css('display', 'block');
    })

    /*新闻中心*/
    $(".n_block1 .r_bock1_btn").click(function () {
        $(".r_bock1_btn").removeClass('r_btn_active');
        $(this).addClass('r_btn_active');
        //当前索引
        var index = $(this).index();
        $(".n_newinfo").css('display', 'none');

        $(".n_newinfo").eq(index).css('display', 'block');
    })

    /*关于我们*/
    $(".a_block1 .r_bock1_btn").click(function () {
        $(".r_bock1_btn").removeClass('r_btn_active');
        $(this).addClass('r_btn_active');
        //当前索引
        var index = $(this).index();
        $(".a_rightcontent").css('display', 'none');

        $(".a_rightcontent").eq(index).css('display', 'block');
    })
     


})