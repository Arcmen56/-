$(function(){
    //密码框输入事件
    $('.password,.passwordX').on('focus',function(){
         $('.ee').attr('src','img/lc.png');
         $('.ss').attr('src','img/rc.png');

    });
    $('.password,.passwordX').on('blur',function(){
         $('.ee').attr('src','img/l.png');
         $('.ss').attr('src','img/r.png');   
    });
  $('.btn').click(function () {
      const username=$('.username').val();
      const password=$('.password').val();
      
      $.ajax({
          url:'http://127.0.0.1:8000/server-denglu',
          data:{username,password},
          type:'get',
          dataType:'json',
          success:function (data) {
              if(data===1){
                  // alert('登录成功')
                  $(location).attr('href','index.html')
              }else{
                  alert('账号或密码错误');
                  
              }
          },
          error:function () {
              console.log('出错了');
              
          }
      })

  })
  $('.btnX').click(function () {
      const usernameX=$('.usernameX').val()
      const passwordX=$('.passwordX').val()
      const phoneX=$('.phoneX').val()
      const addressX=$('.addressX').val()
      $.ajax({
          url:'http://127.0.0.1:8000/server-zhuce',
          data:{usernameX,passwordX,phoneX,addressX},
          type:'get',
          dataType:'json',
          success:function (data) {
              if(data){
                  console.log('正确');
              }else{
                  console.log('错误');
                 
              }
          },
          error:function () {
              console.log('出错了');
             
          }
      })

  })
  $('li').click(function () {
    $('.r1>div').eq($(this).index()).show().siblings().hide()
  })
})