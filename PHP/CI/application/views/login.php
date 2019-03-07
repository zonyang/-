<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/5 0005
 * Time: 下午 8:14
 */
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <base href="<?php echo site_url()?>">
    <title>Document</title>
</head>
<body>
<h1>登录</h1>
<form action="user/login" method="post">
    <label for="name">Name: </label><input name="name" id="name" type="text"><br>
    <label for="pwd">Password: </label><input name="pwd" id="pwd" type="text"><br>
    <input type="submit" value="登录" name="login">
    <input type="submit" value="注册" name="register">
</form>
</body>
</html>

