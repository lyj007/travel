//往前过渡函数
	function pre()
	{
		//过渡距离
		var marginLeftNum =  document.getElementById('ul01').style.marginLeft; //0px
		var marginLeftNum1 =  document.getElementById('ul03').style.marginLeft;
		//把字符串转换成整数进行运算
		var marginString = marginLeftNum.substring(0,marginLeftNum.length-2); //0
		var marginString1 = marginLeftNum1.substring(0,marginLeftNum1.length-2); //0
		//强制转换下
		var magrinNumber =  Number(marginString);
		var magrinNumber1 =  Number(marginString1);
		
		//位置改变
	 	var result =  magrinNumber + 1160;
	 	var result1 =  magrinNumber1 + 1140;
	 	
	 	//判断是否到第一张 
	 	if(result==1160)
	 	{
	 		//回到最后张
	 		document.getElementById('ul01').style.marginLeft='-1160px';
	 	}
	 	else
	 	{
	 		
	 		document.getElementById('ul01').style.marginLeft=result +'px';
	 	}
		
	
	
		if(result1==1140)
	 	{
	 		//回到最后张
	 		document.getElementById('ul03').style.marginLeft='-1140px';
	 	}
	 	else
	 	{
	 		
	 		document.getElementById('ul03').style.marginLeft=result1 +'px';
	 	}
		
	}
	
	
	//往后过渡函数
	function next()
	{
		//过渡距离
		var marginLeftNum =  document.getElementById('ul01').style.marginLeft; //0px
		
		//把字符串转换成整数进行运算
		var marginString = marginLeftNum.substring(0,marginLeftNum.length-2); //0
		
		//强制转换下
		var magrinNumber =  Number(marginString);
		
		//位置改变
	 	var result =  magrinNumber - 1160;
	 	
	 	//判断是否到最后张
	 	if(result== -2320)
	 	{
	 		//回到最后张
	 		document.getElementById('ul01').style.marginLeft='0px';
	 	}
	 	else
	 	{
	 		
	 		document.getElementById('ul01').style.marginLeft=result +'px';
	 	}
		
		
		//过渡距离
		var marginLeftNum1 =  document.getElementById('ul03').style.marginLeft; //0px
		
		//把字符串转换成整数进行运算
		var marginString1 = marginLeftNum1.substring(0,marginLeftNum1.length-2); //0
		
		//强制转换下
		var magrinNumber1 =  Number(marginString1);
		
		//位置改变
	 	var result1 =  magrinNumber1 - 1140;
	 	
	 	//判断是否到最后张
	 	if(result1== -2280)
	 	{
	 		//回到最后张
	 		document.getElementById('ul03').style.marginLeft='0px';
	 	}
	 	else
	 	{
	 		
	 		document.getElementById('ul03').style.marginLeft=result1 +'px';
	 	}
		
	}
	

/*回到顶部功能*/
function returnTop()
{
	//开启定时器
	var timeid = setInterval(function(){
		
		//滚动函数
		scrollBy(0,-50);
		
		//判断滚动条是否到顶部，如果到达顶部关掉定时器
	 	/*console.info();*/
	 	var scrollnum= document.documentElement.scrollTop+document.body.scrollTop;
	 	
	 	//判断
	 	if(scrollnum==0)
	 	{
	 		clearInterval(timeid);
	 	}
		
	},10);/*以毫秒为单位*/
	
}