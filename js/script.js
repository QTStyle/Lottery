var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'],
    timer=null,
    flag=0;

window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

   // 键盘事件，按Enter开始抽奖，再按下Enter停止抽奖，Event对象的keyCoden属性用于得到键盘对应键的键码值
   document.onkeyup=function(event){
      event = event || window.event;//可通过console.log(event.keyCode)打印对应键的keyCode值，Enter键的keyCode值是13
      if(event.keyCode==13){
         if(flag==0){
           playFun();
           flag=1;
         }else{
           stopFun();
           flag=0;
         }
      }
   }
}

function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);//防止多次点击生成多个定时器，每次执行playFun方法时先清除定时器
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);//math.floor(x)返回小于参数x的最大整数  8 0-7
	   title.innerHTML=data[random];
	},50);
    play.style.background='#999';
}

function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}