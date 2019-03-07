<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/4 0004
 * Time: 下午 9:19
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="welcome.php" method="post">
    <label for="name">Name: </label><input type="text" name="name" id="name">
    <?php
        if(isset($_GET['xx'])){
            echo "<span>error name</span>";
        }
    ?>
    <br><label for="pwd">Password: </label><input type="text" name="pwd" id="pwd">
    <?php
    if(isset($_GET['yy'])){
        echo "<span>error password</span>";
    }
    ?>
    <br><input type="submit" value="submit">
</form>
</body>
</html>