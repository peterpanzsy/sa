<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>PatternFly</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	
	<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script src="js/jquery/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="bootstrap/js/holder.min.js"></script>
	 
  </head>
  
  <body class="background">
  	<div class="header">
  		<span class="title" role="banner" id="logo" title="open interface project" href="#">
             SMART GRID SCADA SYSTEM </span>
    </div>
    
    <div class="container">
	<div class="row">
		<div id="sensordiv" class="span6" style="float:left;text-align:center;padding-bottom:10px;">
			<h3>SENSOR</h3>
			<button class="btn" type="button">启动</button>
			<button class="btn" type="button">关闭</button>
			<button class="btn" type="button">重启</button><br>
			<div style="margin-top:20px;margin-bottom:20px;">
				<span class="execute">命令执行:</span>
				<input style="width:310px;" type="text" placeholder="command...">
				<button class="btn" type="button" style="line-height:0.9">执行</button>
			</div>
			<textarea rows="7" cols="60" readonly="readonly">
			</textarea>
		</div>
		<div id="actuatordiv" class="span6" style="float:right;text-align:center;padding-bottom:10px;">
			<h3>ACTUATOR</h3>
			<button class="btn" type="button">启动</button>
			<button class="btn" type="button">关闭</button>
			<button class="btn" type="button">重启</button>
			<div style="margin-top:20px;margin-bottom:20px;">
				<span class="execute">命令执行:</span>
				<input style="width:310px;" type="text" placeholder="command...">
				<button class="btn" type="button" style="line-height:0.9">执行</button>
			</div>
			<textarea rows="7" cols="60" readonly="readonly">
			</textarea>
		</div>
	</div>
	<div class="row">
		<div class="span12">
		</div>
	</div>
	</div>

  </body>
</html>
