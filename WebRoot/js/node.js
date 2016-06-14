$(document).ready(function(){
	/*
	 * 节点列表
	 */
	$('#nodelist').dataTable( {
	       "ajax": './data/nodes.txt',
			"language": {
				"url":"js/DataTables-1.10.4/Chinese.json"
			}
	   } );
	
	/*
	 * sensor
	 */
	$("#sensordiv>button[name='start']").click(function(){
		alert("传感器进程已启动!");
		$("#sensordiv>button[name='start']").attr('disabled',true); 
	});
	$("#sensordiv>button[name='stop']").click(function(){
		alert("传感器进程已关闭!");
		$("#sensordiv>button[name='start']").attr('disabled',false); 
	});
	$("#sensordiv>button[name='restart']").click(function(){
		alert("传感器进程已重启!");
		$("#sensordiv>button[name='start']").attr('disabled',true); 
	});
	
	$("#sensordiv button[name='telnet']").click(function(){//telnet登陆
		if($("#sensordiv>button[name='start']").attr("disabled") != "disabled"){
			alert("请先启动Sensor进程！");
			return;
		}
		var $ip = $("#sensordiv input[name='ip']").val();
		var $port = $("#sensordiv input[name='port']").val();
		if($ip!="" && $port!=""){
			alert("已通过telnet登陆设备!");
			$("#sensordiv button[name='telnet']").attr('disabled',true); 
			$("#sensordiv button[name='logout']").attr('disabled',false);
		}else{
			alert("请补全登陆信息！");
		}
	});
	$("#sensordiv button[name='logout']").click(function(){//登出
		if($("#sensordiv>button[name='start']").attr("disabled") != "disabled"){
			alert("请先启动Sensor进程！");
			return;
		}
		alert("已登出设备!");
		$("#sensordiv button[name='telnet']").attr('disabled',false); 
		$("#sensordiv button[name='logout']").attr('disabled',true);
	});
	
	$("#sensordiv button[name='execom']").click(function(){//执行命令
		if($("#sensordiv button[name='telnet']").attr("disabled") != "disabled"){
			alert("请先登陆设备！");
			return;
		}
		var $ip = $("#sensordiv input[name='ip']").val();
		var $port = $("#sensordiv input[name='port']").val();
		var $command = $("#sensordiv input[name='command']").val();
		switch(true){
   		case /help/.test($command):
   			var str = $("#sensordiv textarea[name='output']").val() + "\nFollowing commands are recognized:\n";
   			str += 
   				 "	help		Show the helps.\n"
   				+"	version 	Show the version.\n"
   				+"	get 		Get the parameter value.\n"
   				+"	set 		Set the parameter value.\n";   			
   			$("#sensordiv textarea[name='output']").val(str);  			
			break;
		case /version/.test($command):
   			var str = $("#sensordiv textarea[name='output']").val() + "\nVersion 2.0\n";		
   			$("#sensordiv textarea[name='output']").val(str);  			
			break;
		case /get/.test($command):
			var $param = $command.split(" ")[1];
   			var str = $("#sensordiv textarea[name='output']").val() + "\n"+$param+" is 10.\n";		
   			$("#sensordiv textarea[name='output']").val(str);  			
			break;
		case /set/.test($command):
			var $param = $command.split(" ")[1];
			var $value = $command.split(" ")[2];
   			var str = $("#sensordiv textarea[name='output']").val() + "\n"+$param+" is setted "+$value+".\n";		
   			$("#sensordiv textarea[name='output']").val(str);  			
			break;
   		case /telnet/.test($command):
   			var str = $("#sensordiv textarea[name='output']").val() + ""+$ip+"\n";
   			$("#sensordiv textarea[name='output']").val(str);  			
			break;
   		default:
   			alert("命令不存在！");
			break;
		}
	});
	/*
	 * actuator
	 */
	$("#actuatordiv>button[name='start']").click(function(){
		alert("执行器进程已启动!");
		$("#actuatordiv>button[name='start']").attr('disabled',true); 
	});
	$("#actuatordiv>button[name='stop']").click(function(){
		alert("执行器进程已关闭!");
		$("#actuatordiv>button[name='start']").attr('disabled',false); 
	});
	$("#actuatordiv>button[name='restart']").click(function(){
		alert("执行器进程已重启!");
		$("#actuatordiv>button[name='start']").attr('disabled',true); 
	});
	
	$("#actuatordiv button[name='telnet']").click(function(){//telnet登陆
		if($("#actuatordiv>button[name='start']").attr("disabled") != "disabled"){
			alert("请先启动Actuator进程！");
			return;
		}
		var $ip = $("#actuatordiv input[name='ip']").val();
		var $port = $("#actuatordiv input[name='port']").val();
		if($ip!="" && $port!=""){
			alert("已通过telnet登陆设备!");
			$("#actuatordiv button[name='telnet']").attr('disabled',true); 
			$("#actuatordiv button[name='logout']").attr('disabled',false);
		}else{
			alert("请补全登陆信息！");
		}
	});
	$("#actuatordiv button[name='logout']").click(function(){//登出
		if($("#actuatordiv>button[name='start']").attr("disabled") != "disabled"){
			alert("请先启动Sensor进程！");
			return;
		}
		alert("已登出设备!");
		$("#actuatordiv button[name='telnet']").attr('disabled',false); 
		$("#actuatordiv button[name='logout']").attr('disabled',true);
	});
	$("#actuatordiv button[name='execom']").click(function(){//执行命令
		if($("#actuatordiv button[name='telnet']").attr("disabled") != "disabled"){
			alert("请先登陆设备！");
			return;
		}
		var $ip = $("#actuatordiv input[name='ip']").val();
		var $port = $("#actuatordiv input[name='port']").val();
		var $command = $("#actuatordiv input[name='command']").val();
		switch(true){
   		case /help/.test($command):
   			var str = $("#actuatordiv textarea[name='output']").val() + "\nFollowing commands are recognized:\n";
   			str += 
   				 "	help		Show the helps.\n"
   				+"	version 	Show the version.\n"
   				+"	get 		Get the parameter value.\n"
   				+"	set 		Set the parameter value.\n"
   				+"	startd		Start the device.\n"
   				+"	rebootd		Restart the device.\n"
   				+"	shutdownd	Shutdown the device.\n";   			
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
		case /version/.test($command):
   			var str = $("#actuatordiv textarea[name='output']").val() + "\nVersion 2.0\n";		
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
		case /get/.test($command):
			var $param = $command.split(" ")[1];
   			var str = $("#actuatordiv textarea[name='output']").val() + "\n"+$param+" is 10.\n";		
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
		case /set/.test($command):
			var $param = $command.split(" ")[1];
			var $value = $command.split(" ")[2];
   			var str = $("#actuatordiv textarea[name='output']").val() + "\n"+$param+" is setted "+$value+".\n";		
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
		case /startd/.test($command):
   			var str = $("#actuatordiv textarea[name='output']").val() + "\nThe device is started...\n";		
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
		case /shutdownd/.test($command):
   			var str = $("#actuatordiv textarea[name='output']").val() + "\nThe device is shutdowned...\n";		
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
		case /rebootd/.test($command):
   			var str = $("#actuatordiv textarea[name='output']").val() + "\nThe device is rebooted...\n";		
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
   		case /telnet/.test($command):
   			var str = $("#actuatordiv textarea[name='output']").val() + ""+$ip+"\n";
   			$("#actuatordiv textarea[name='output']").val(str);  			
			break;
   		default:
   			alert("命令不存在！");
			break;
		}
	});
	
});
