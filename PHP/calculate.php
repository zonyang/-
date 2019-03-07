<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/5 0005
 * Time: 下午 2:04
 */
$result = "";
$tag = "";
$first = "";
$second = "";
if (isset($_POST['submit'])) {
    $first = $_POST['first'];
    $second = $_POST['second'];
    $tag = $_POST['tag'];
    if (!preg_match('/^[0-9]+$/', $first)) {
        $result .= "第一个不是数字。";
    }
    if (!preg_match('/^[0-9]+$/', $second)) {
        $result .= "第二个不是数字。";
    }
    if ($second === '0' && $tag === '/' || $second === '0' && $tag === '%') {
        $result .= "除数不能为0。";
    }
    if ($result === "") {
        switch ($tag) {
            case "+":
                $result = $first + $second;
                break;
            case "-":
                $result = $first - $second;
                break;
            case "*":
                $result = $first * $second;
                break;
            case "/":
                $result = $first / $second;
                break;
            case "%":
                $result = $first % $second;
                break;
        }
    }
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
    <table>
        <tr>
            <td><input type="text" name="first" value="<?php echo $first ?>"></td>
            <td><select name="tag" id="">
                    <option value="+" <?php if ($tag === "+") {
                        echo "selected";
                    } ?>>+
                    </option>
                    <option value="-" <?php if ($tag === "-") {
                        echo "selected";
                    } ?>>-
                    </option>
                    <option value="*" <?php if ($tag === "*") {
                        echo "selected";
                    } ?>>*
                    </option>
                    <option value="/" <?php if ($tag === "/") {
                        echo "selected";
                    } ?>>/
                    </option>
                    <option value="%" <?php if ($tag === "%") {
                        echo "selected";
                    } ?>>%
                    </option>
                </select></td>
            <td><input type="text" name="second" value="<?php echo $second ?>"></td>
            <td><input type="submit" name="submit"></td>
        </tr>
        <tr>
            <td colspan="4">
                <?php
                echo $result;
                ?>
            </td>
        </tr>
    </table>
</form>
</body>
</html>
