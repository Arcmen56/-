$(function () {
    //获取图片个数
    let imglen = $('.u1').children().length; 
    //获取图片的宽度
    var imgwidth = $('.alp').width();
   //动态创建节点
   for(var i = 0;i<imglen;i++){
     var li = $("<li></li>");
     //记录当前小圆圈的索引号
     $('.u2').append(li);
   };
   $('.u2 li').eq(0).addClass('l2-cs');

    //获取小圆点长度
    var clen = $('.u2 li').length;
  //克隆第一张图
  var clone = $(".sub-banner-l1").eq(0).clone();
    $(".u1").append(clone);
     //获取图片数组的长度
     var len = $(".sub-banner-l1").length;
    
   //小圆点变色
   $('.u2 li').click(function(){
     //当我们点击了小圆点 就要把当前索引给circle和num
     circle=num=$(this).index();
     $(this).addClass('l2-cs').siblings().removeClass('l2-cs');
   });
   
  //点击圆点移动图片
 $('.u2 li').click(function(){
   //获取当前下标
   let index = $(this).index();
   $('.u1').stop().animate({
     left:-index*imgwidth
   },)
 })
    //移入显示箭头
    $(".alb-banner").mouseenter(function () {
      
      $(".prve").stop().animate(
        {
          left: 0,
        },
        300,
        "linear"
      );
      $(".next").stop().animate(
        {
          right: 0,
        },
        300,
        "linear"
      );
      clearInterval(timer);
      timer = null;//清除定时器变量
    });
    //离开隐藏箭头
    $(".alb-banner").mouseleave(function () {
      $(".prve").stop().animate(
        {
          left: -85,
        },
        300,
        "linear"
      );
      $(".next").stop().animate(
        {
          right: -85,
        },
        300,
        "linear"
      );
      timer = setInterval(function(){
      $('.next').click();
    },2000);
 
    });

    //点击箭头轮播事件
    function circleChange(){
 
      $('.u2 li').eq(circle).addClass('l2-cs').siblings().removeClass('l2-cs');
       
       $('.u1').stop().animate({
      left:-num*imgwidth
       },600,"linear");

   };
     //下一张
     var num = 0;
    
     var circle = 0;//控制小圆点变化

     $('.next').click(function(){
       //如果走到了最后复制的一张图片，此时我们的ul要快速复原left改为0
       if(num==6){
         $('.u1').stop().animate({
           left:0
         }
         ,0)
         num = 0
       }
         num++;
         //点击右侧箭头 小圆点跟随一起变化 可以再声明一个变量控制小圆点的播放
         circle++;  
         if(circle==6){
           circle = 0;
         };
         circleChange();

    });

  
      //上一张
    $('.prve').click(function(){
        
        if(num==0){
          num = len-1
         $('.u1').stop().animate({
           left:-num*imgwidth
         }
         ,0)
         
       }
         num--;
         //点击右侧箭头 小圆点跟随一起变化 可以再声明一个变量控制小圆点的播放
         circle--;  
         if(circle<0){
           circle = len-2;
         };
        circleChange();
     
  });

    //播放图标显示
    $('.cover-box').hover(function(){
      $(this).children('a').css('opacity',.5).siblings('.cover-box').css('opacity',1);
      
    },function(){ 
      $(this).children('a').css('opacity',1)
    });
    //自动轮播
    var timer = setInterval(function(){
      //调用点击事件
      $('.next').click();
    },2000);

    //手风琴效果
    $('.rank li').mouseenter(function(){
     $(this).stop().animate({
       width:224
     }).find('.small').fadeOut().siblings('.big').fadeIn();
    $(this).siblings('li').stop().animate({
      width:50
    }).find('.small').fadeIn().siblings('.big').fadeOut();
    
    
    
    
      });
  });

