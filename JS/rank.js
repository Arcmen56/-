$(function(){
    $('.left-li').click(function(){
      $(this).addClass('selected').siblings().removeClass('selected')
      $(this).children().addClass('w-selected').parent().siblings().children().removeClass('w-selected')
    });
    $('.left-li').hover(function(){
     $(this).children().css('color','#31c2a5')
    },function(){
        $(this).children().css('color','black')
    });
    var myDate=new Date;
    var year=myDate.getFullYear();
    var month=myDate.getMonth()+1;
    var date=myDate.getDate();
    $('#current-time').html(year+'-'+month+'-'+date);

    $('#song li').mouseenter(function(){
     $(this).children('#menu').show();
    })
    $('#song li').mouseleave(function(){
      $(this).children('#menu').hide();
    })

   $('.m-play').hover(function(){

     $(this).css('background-position','-75px 4px')

   },function(){
    $(this).css('background-position','6px 4px')
   });
    
   $('.m-add').hover(function(){

    $(this).css('background-position','-75px  -156px')

    },function(){
    $(this).css('background-position','6px -156px')
    });

  // random()*(n-m)+m;生成m-n之间的随机数
 console.log('fsfsdf')
  let arr = new Array();
  for(var i=0;i<20;i++){
    
    arr[i]= parseInt(Math.random()*(150-10)+10);;
   
  };

 //序号
 for(var i = 0;i<($('#song li').length);i++){
   $('.songlist-number').eq(i).html(i+1);
   $('.songlist-rank p').eq(i+1).html('%'+arr[i]);
   $('#song li').eq(i+3).find('.songlist-number').css('color','black');
 };
 //动态添加歌曲信息
  var imgUrl=['img/1010.jpg','img/2.jpg','img/3.jpg',
              'img/4.jpg','img/5.jpg','img/6.jpg',
              'img/9.jpg','img/11.jpg','img/cover1.jpg',
              'img/6.jpg','img/5.jpg'
            ];
  var songText = ['陪你度过漫长岁月','你的背包','浮夸',
                   '最佳损友','不如不见','淘汰',
                   '阴天快乐','打回原形','孤勇者',
                   '爱情转移','白玫瑰'

];
var songTime = ['04:02','03:57','04:43',
                '03:53','04:09','04:45',
                '04:20','04:10','04:16',
                '04:19','04:00',


]
for(var i=1,j=0;i<($('#song li').length);i++,j++)
    {
      $('#song li').eq(i).find('img').attr('src',imgUrl[j]);
      $('#song li').eq(i).find('.songname-title').children('a').html(songText[j]);
      $('#song li').eq(i).find('#time').html(songTime[j])
    }
 //评论区
var vm = new Vue({
el:'.pl',
data:{
  textareaContent:'',
  num:300,
},
methods: {
  monitorInput(){
    var txtVal = this.textareaContent.length;
    this.num = 300 - txtVal;
  }
},
})

})