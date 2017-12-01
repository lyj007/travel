//验证
function validate(){
	 var flag=true;
	 var tellphone = document.getElementById('tellphone').value;
	 var username = document.getElementById('username').value;
	 var address = document.getElementById('address').value;
	 var email = document.getElementById('email').value;
	 
	 //用户名
	if(username==""){
		document.getElementById('usernameInfo').innerHTML="姓名不能为空!";
		flag=false;
	}
	else{
		document.getElementById('usernameInfo').innerHTML="";
	}
	//电话号码
	if(tellphone.length!=11)
			{
				document.getElementById('tellphoneInfo').innerHTML="手机号码必须11位！";
				flag =false;
			}
			else
			{
				//判断开头必须是13 | 15 | 14 |17 | 18  
				var prefix = tellphone.substring(0,2);
				if(prefix!=13&&prefix!=14&&prefix!=15&&prefix!=17&&prefix!=18)
				{
					document.getElementById('tellphoneInfo').innerHTML="手机号码格式错误!";
					flag =false;
				}
				else
				{
					if(isNaN(tellphone))
					{
						document.getElementById('tellphoneInfo').innerHTML="手机号码必须为数字！";
						flag =false;
					}
					else
					{
						document.getElementById('tellphoneInfo').innerHTML="";
					}
				}
				
			}
	//地址
	if(address=="")
	{
		document.getElementById('addressInfo').innerHTML="地址不能为空!";
		flag=false;
	}
	else{
		document.getElementById('addressInfo').innerHTML="";
	}
	//电子邮箱
	if(!/^[0-9a-z_]+@(([0-9a-z]+)[.]){1,2}[a-z]{2,3}$/.test(email)) {
			document.getElementById('emailInfo').innerHTML = "邮箱格式不正确！";
			flag = false;
		} else {
			document.getElementById('emailInfo').innerHTML = "";
			
		}
	return flag;
}