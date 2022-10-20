// 返回顶部模块start
$(function () {
   //搜索栏手风琴效果
   $('.search input').click(function(){
      $('.slist').slideDown();
   });
   $('.slist').mouseleave(function(){
      $(this).delay(3000).slideUp();
   });
   $('.slist ol li').hover(function(){
    $(this).addClass('slist-li').siblings().removeClass('slist-li');
    $(this).find('a').css('color','#fff').parent().siblings().find('a').css('color','#ff5d4c');
    $(this).find('span').css('color','#fff').parent().siblings().find('span').css('color','#b7b8b7');
   },function(){

   })

   //窗口滚动时间
   $(window).scroll(function () {
      //获取当前窗口与页面顶端距离

      let top = $(this).scrollTop();

      if(top>=300){
         //显示回到顶部的小火箭
         $('.top').fadeIn();
      }else{
         $('.top').fadeOut();
         
      }
   })
   //点击火箭回到顶部
   $('.top').click(function () {
      
      $('html,body').animate({
         scrollTop:0
      },'slow');
      
     
   });
//移入显示登出模块
 $('.user').mouseenter(function(){
    $('.logout').slideDown(400);
 }); 
 
 $('.logout').mouseleave(function(){
   $('.logout').delay(1000).slideUp(400);
 });



})


