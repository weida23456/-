// ==UserScript==
// @name         jb51去广告
// @namespace    http://tampermonkey.net/
// @version      1.05
// @description  jb51去广告
// @author       lyc
// @match        *:/jb51.net
// @match        *://jb51.net/*
// @match        *://jb51.net/*
// @match        *://jb51.net/*
// @match        *://www.jb51.net
// @match        *://www.jb51.net/*

// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    //阅读全文
    $('#btn-readmore').click();
    // 获取当前地址url
    var url = location.href;
    // 正则匹配博客部分
    var jb51 = /jb51.net/;
    $(".ad").remove();
    if (jb51.test(url)) {
        //文章右侧隐藏
        $('.article-right').remove();
        $('#txtlink').remove();
        $('.mainlr').remove();
        $('.topimg').remove();
       // $('.mainlr').remove();
        //class="lbd clearfix"
       // $('.clearfix').remove();
        //$('.bPic').next().remove();
        $('.bPic').remove();
        $('.jb51ewm').remove();
        //class="tags clearfix"
        //clearfix不能被隐藏
       // $('.clearfix').remove();
        $('.tags').remove();
        $('#pic_container').remove();
         $('.pic_container').remove();
      //class="xgcomm clearfix"
        $('.xgcomm').remove();
        $('#footer').remove();
         $('.subnav').remove();
        $('.nav_top').remove();
        $('.header').remove();
        $('.topTools').remove();
        $('.NavBar').remove();
        $('.box').remove();
        $('.blank5').remove();
        //隐藏文章下面广告
        $('#content').nextAll().remove();
        //文章上面的内容
        $('#content').prevAll().hide();
        $('.title').show();
         $('.title').first().children('p').hide();
      // $('#bd-hl-content').remove();
        // $('.bd-hl-content').remove();
       $('.art_desc').remove();
        $('.right-share').remove();
          $('#right-share').remove();
        //class="w750 fl"文字主体
        //文字居中
       // class="article-content border"
         $('#content').css("float","left");
         $('#content').css("margin","auto");





    }



})();