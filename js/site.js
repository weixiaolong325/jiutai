$(function () {
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
var webIndex = 1;
var appIndex = 1;
var webPageSize = 10;
var appPageSize = 6;

var pageCount = 0;
function iNext() {
    var imgs = $(".i_bock4imglist").find('img');
    if (pageCount == 0) {
        pageCount = imgs.length;
    }
    var appType = $(".i_bock4_web").css('display');
    if (appType == "block") {
        var currentCount = webIndex * webPageSize;
        if (currentCount >= pageCount) {
            //回到第一页
            webIndex = 0;
        }
        //下一页
        var nextCount = (webIndex + 1) * webPageSize;
        var currentIndex = webIndex * webPageSize + 1;
        //清掉旧的
        $(".i_bock4_web .i_bock_list").html("");
        for (var i = currentIndex; i <= nextCount; i++) {
            if (i <= pageCount) {
               //增加新的
                var html = '<div class="col-sm-20 i_bock4_item">' +
                    '<img src = "' + $(imgs[i - 1]).attr('src') + '" />' +
                    '</div >';
                $(".i_bock4_web .i_bock_list").append(html)
            }
            else {
                break;
            }
        }
        webIndex++;
    }
    else {
        var currentCount = appIndex * appPageSize;
        if (currentCount >= pageCount) {
            //回到第一页
            appIndex = 0;
        }
        //下一页
        var nextCount = (appIndex + 1) * appPageSize;
        var currentIndex = appIndex * appPageSize + 1;
        //清掉旧的
        $(".i_bock4_app .i_bock_list").html("");
        for (var i = currentIndex; i <= nextCount; i++) {
            if (i <= pageCount) {
                //增加新的
                var html = '<div class="col-xs-4 i_bock4_item">' +
                    '<img src = "' + $(imgs[i - 1]).attr('src') + '" />' +
                    '</div >';
                $(".i_bock4_app .i_bock_list").append(html)
            }
            else {
                break;
            }
        }
        appIndex++;
    }
}
//上一页
function iPre() {
    var imgs = $(".i_bock4imglist").find('img');
    if (pageCount == 0) {
        pageCount = imgs.length;
    }

    var appType = $(".i_bock4_web").css('display');
    if (appType == "block") {
        //向上取整
        var maxPage = Math.ceil(pageCount / webPageSize);
        if (webIndex == 1) {
            //回到第一页
            webIndex = maxPage;
        }
        else {
            webIndex--;
        }
        //上一页
        var nextCount = webIndex * webPageSize;
        var currentIndex = (webIndex-1) * webPageSize+1;
        //清掉旧的
        $(".i_bock4_web .i_bock_list").html("");
        for (var i = currentIndex; i <= nextCount; i++) {
            if (i <= pageCount) {
                //增加新的
                var html = '<div class="col-sm-20 i_bock4_item">' +
                    '<img src = "' + $(imgs[i - 1]).attr('src') + '" />' +
                    '</div >';
                $(".i_bock4_web .i_bock_list").append(html)
            }
            else {
                break;
            }
        }
    }
    else {
        //向上取整
        var maxPage = Math.ceil(pageCount / appPageSize);
        if (appIndex == 1) {
            //回到第一页
            appIndex = maxPage;
        }
        else {
            appIndex--;
        }
        //上一页
        var nextCount = appIndex * appPageSize;
        var currentIndex = (appIndex - 1) * appPageSize + 1;
        //清掉旧的
        $(".i_bock4_app .i_bock_list").html("");
        for (var i = currentIndex; i <= nextCount; i++) {
            if (i <= pageCount) {
                //增加新的
                var html = '<div class="col-xs-4 i_bock4_item">' +
                    '<img src = "' + $(imgs[i - 1]).attr('src') + '" />' +
                    '</div >';
                $(".i_bock4_app .i_bock_list").append(html)
            }
            else {
                break;
            }
        }
    }
}