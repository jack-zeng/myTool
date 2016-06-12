(function($){

 $.extend({
    /*把时间转换成数字*/
    ZtTimeconversion:function(string){
    	 var hours,minute,digital,arr;
    	if(string==null || string==undefined || string==""){
    		 return
        }
         if(typeof string == "string"){
         	 arr=string.split(":")
         }
         hours=arr[0]*60*60;
         minute=arr[1]*60;
         digital=parseInt(hours)+parseInt(minute)+parseInt(arr[2])
         return digital
   },
   /*数字不够10的时候返回"0"+数字*/
   Ztzero:function(num){
      if(num<=9){
      	return "0"+num
      }else{
      	return num
      }
   },
   /*倒计时 number为传入倒计时总时间  dom参数为页面显示标签元素*/
   Ztcountdown:function(number,dom){
   	 var hours,minute,seconds,day,time,timeout;
   	  timeout=setInterval(function(){
   	
   	   if(number==null || number==undefined || number=="" || typeof number!="number"){
    		 return
        }
       day=Math.floor(number/(24*60*60));
       hours=Math.floor(number/(60*60))-(day*24);
       minute=Math.floor(number/60)-(day*24*60)-(hours*60);
       seconds=Math.floor(number)-(day*24*60*60)-(hours*60*60)-(minute*60);
       number--
       time=day+"天"+hours+"小时"+$.Ztzero(minute)+"分钟"+$.Ztzero(seconds)+"秒";
       $(dom).text(time);
       if(number<=0){
       	clearInterval(timeout)
       }
     },1000)

   },
   /*日期   dom参数为页面显示标签元素 */
   Ztdate:function(dom){
   	setInterval(function(){
   	  var year,moon,dat,day,hours,minute,seconds,nowdate;
   	  var date=new Date();
   	  var week=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
   	  year=date.getFullYear();
   	  moon=date.getMonth()+1;
   	  dat=date.getDate();
   	  day=date.getDay();
   	  hours=date.getHours();
   	  minute=date.getMinutes();
   	  seconds=date.getSeconds();
   	  nowdate=year+"年"+moon+"月"+dat+"日"+week[day]+hours+"时"+$.Ztzero(minute)+"分"+$.Ztzero(seconds)+"秒";
      $(dom).text(nowdate)
},1000)

},
 /*格式化数字 */
 ZtnumberFormat:function(str,point){
    //判定str是否存在;
    if(typeof str != "string" && str.length == 0){
      return false;
  }
  //保留最小两位小数
  var pointDigit=!point?2:point<2?2:point;
    var strFloat=(parseFloat(str).toFixed(pointDigit));
    //截取.字符之前的字符串
    var formatNumBefor=strFloat.split(".")[0].split("").reverse();
    //截取.字符之后的字符串
    var formatNumAfter=strFloat.split(".")[1];
    var newStr="";
    for(var i=0;i<formatNumBefor.length;i++){
        newStr += formatNumBefor[i] + ((i + 1) % 3 == 0 && (i + 1) != formatNumBefor.length ? "," : "");
    }
    newStr=newStr.split("").reverse().join("")+"."+formatNumAfter;
    return newStr;
 }

})
}(jQuery))