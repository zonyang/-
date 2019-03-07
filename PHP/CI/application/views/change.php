<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/7 0007
 * Time: 下午 5:29
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
<h1>修改</h1>
<form action="user/update" method="post">
    <label for="name">Name: </label><input name="name" id="name" type="text"><br>
    <label for="pwd">Age: </label><input name="pwd" id="pwd" type="text"><br>
    <input type="hidden" name="id" value="<?php echo $user?>">
    <input type="submit" value="确定更改" name="login">
</form>

</body>
</html>
