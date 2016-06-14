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
	<script src="js/jquery/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="bootstrap/js/holder.min.js"></script>
	<link rel="stylesheet" type="text/css" href="js/DataTables-1.10.4/css/jquery.dataTables.css">
	<link rel="stylesheet" href="js/jqueryUI/themes/smoothness/jquery-ui.css">
	<script type="text/javascript" charset="utf8" src="js/DataTables-1.10.4/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" charset="utf8" src="js/DataTables-1.10.4/js/dataTables.bootstrap.js"></script> 
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script src="js/node.js"></script>
	 
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
			<button name="start" class="btn" type="button">启动</button>
			<button name="stop" class="btn" type="button">关闭</button>
			<button name="restart" class="btn" type="button">重启</button><br>
			<div style="margin-top:20px;margin-bottom:20px;">
				<span class="execute">IP:</span>
				<input name="ip" style="width:220px;" type="text">
				<span class="execute">端口:</span>
				<input name="port" style="width:45px;" type="text">
				<button name="telnet" class="btn" type="button" style="line-height:0.9">登陆</button>
				<button name="logout" class="btn" type="button" style="line-height:0.9">登出</button>
			</div>
			<div style="margin-top:20px;margin-bottom:20px;">
				<span class="execute">命令:</span>
				<input name="command" style="width:345px;" type="text">
				<button name="execom" class="btn" type="button" style="line-height:0.9">执行</button>
			</div>
			<textarea name="output" rows="7" cols="60" readonly="readonly">
			</textarea>
		</div>
		
		<div id="actuatordiv" class="span6" style="float:right;text-align:center;padding-bottom:10px;">
			<h3>ACTUATOR</h3>
			<button name="start" class="btn" type="button">启动</button>
			<button name="stop" class="btn" type="button">关闭</button>
			<button name="restart" class="btn" type="button">重启</button>
			<div style="margin-top:20px;margin-bottom:20px;">
				<span class="execute">IP:</span>
				<input name="ip" style="width:220px;" type="text">
				<span class="execute">端口:</span>
				<input name="port" style="width:45px;" type="text">
				<button name="telnet" class="btn" type="button" style="line-height:0.9">登陆</button>
				<button name="logout" class="btn" type="button" style="line-height:0.9">登出</button>
			</div>
			<div style="margin-top:20px;margin-bottom:20px;">
				<span class="execute">命令:</span>
				<input name="command" style="width:345px;" type="text">
				<button name="execom" class="btn" type="button" style="line-height:0.9">执行</button>
			</div>
			<textarea name="output" rows="7" cols="60" readonly="readonly">
			</textarea>
		</div>
	</div>
	
	
	<div class="row nodetable">
		<div class="span12">
		<table id="nodelist" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>序号</th>
                <th>IP</th>
                <th>类型</th>
                <th>状态</th>
                <th>pg</th>
                <th>qg</th>
                <th>va</th>
                <th>vm</th>
            </tr>
        </thead>
    	</table>
		</div>
	</div>
	</div>

  </body>
</html>
<script>

</script>