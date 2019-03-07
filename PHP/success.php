<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/4 0004
 * Time: 下午 9:23
 */
$arr=[];
while(count($arr)!==5){
    $arr[]=mt_rand(0,9);
    $arr = array_unique($arr);
}
foreach ($arr as $value) {
    echo $value." ";
}