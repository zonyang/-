<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/5 0005
 * Time: 下午 6:27
 */
session_start();
$result = [];
if (isset($_SESSION['user'])) {
    $result = $_SESSION['user'];
}
if (isset($_POST['submit'])) {
    $arr = [];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $arr[] = $name;
    $arr[] = $age;
    $result[] = $arr;
    $_SESSION['user'] = $result;
}
if (isset($_POST['del'])) {
    array_pop( $_SESSION['user']);
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
    <label for="name">Name: </label><input name="name" id="name" type="text"><br>
    <label for="age">Age: </label><input name="age" id="age" type="text"><br>
    <input type="submit" value="submit" name="submit">
    <input type="submit" value="delete" name="del">
</form>
<table>
    <tr>
        <td>id</td>
        <td>Name</td>
        <td>Age</td>
    </tr>
    <tr>
        <?php
        foreach ($result as $index => $rows) {
            echo "<tr><td>" . ($index + 1) . "</td>";
            foreach ($rows as $value) {
                echo "<td>$value</td>";
            }
            echo "</tr>";
        }
        ?>
    </tr>
</table>
</body>
</html>

