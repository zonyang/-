<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/5 0005
 * Time: 下午 2:49
 */
$arr = array('02-11'=>'出差','03-11'=>'上班');
$result = "";
if(isset($_POST['submit'])) {
    $date = $_POST['date'];
    if(isset($arr[$date])){
        $result= $arr[$date];
    }else {
        $result= "没安排";
    }
    echo "<script>alert('".$result."')</script>";
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    <label for="date">
        你要查询的日期：
    </label>
    <input type="text" name="date" id="date">
    <br>
    <input type="submit" value="查询" name="submit">
    <input type="reset" value="重置">
</form>
</body>
</html>
