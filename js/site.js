$(function () {

    $(".i_bock3_item").mouseenter(function () {
        $(this).find(".i_bock3_item_float").css("display", "block");
    })
    $(".i_bock3_item").mouseleave(function () {
        $(this).find(".i_bock3_item_float").css("display", "none");
    })

})