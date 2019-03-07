<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/4 0004
 * Time: 下午 4:23
 */
$name = $_POST['name'];
$pwd = $_POST['pwd'];
$str ="";
if($name===''){
    $str.="xx=1&";
    header("location:index.php?$str");
}
if($pwd===''){
    $str.="yy=1";
    header("location:index.php?$str");
}
//echo "$name,$pwd";

$link = new mysqli("localhost","root","","test");
$sql_select="SELECT * FROM t_user where name='$name' and password='$pwd'";
$sql_insert="insert INTO t_user(name,password) VALUES('$name','$pwd')";
//$res=$link->query($sql_insert);
$res=$link->query($sql_select);
//echo $link->insert_id;
//mysqli_query($link,'$sql_select');
//echo $name, $pwd;
//echo "$res";
if($res->fetch_assoc()){
    echo "yes";
}
//echo var_dump($res->fetch_assoc());
//header("location:success.php?xx=$name&yy=$pwd");