<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/7 0007
 * Time: 下午 3:45
 */
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <base href="<?php echo site_url() ?>">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>注册</h1>
<form action="user/register" method="post">
    <label for="name">Name: </label><input name="name" id="name" type="text"><span id="desc"></span><br>
    <label for="pwd">Password: </label><input name="pwd" id="pwd" type="text"><br>
    <input type="submit" value="注册" name="register">
</form>
<script src="js/jquery-3.3.1.min.js"></script>
<script>
    $(function () {
        $("#name").on("blur", function () {
            // console.log(this.value);
            $.get("user/queryName", {"username": this.value}, function (data) {
                    if (data === "success") {
                        $("#desc").html("名字不存在");
                    } else {
                        $("#desc").html("名字已存在");
                    }
                }, "text");
        })
    })
</script>
</body>
</html>
