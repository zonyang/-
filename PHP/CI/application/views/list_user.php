<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/7 0007
 * Time: 下午 3:23
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
    <table border="1">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Password</td>
            <td>Change</td>
            <td>Delete</td>
        </tr>
        <?php
            foreach ($users as $user){
                echo "<tr>";
                echo "<td>$user->user_id</td>";
                echo "<td>$user->name</td>";
                echo "<td>$user->password</td>";
                echo "<td><a href='user/change?user=$user->user_id'>Change</a></td>";
                echo "<td><a href='user/delete?user=$user->user_id'>Delete</a></td>";
                echo "<tr>";
        }
        ?>
    </table>
</body>
</html>
