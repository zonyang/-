<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/7 0007
 * Time: 下午 1:56
 */
class User_model extends CI_Model
{
    public function login($name, $pwd)
    {

        return $this->db->get_where("t_user", array(
            "name" => $name,
            "password" => $pwd
        ))->row();
    }

    public function selectAll()
    {
        return $this->db->get("t_user")->result();
    }

    public function insert($name, $pwd)
    {
        $this->db->insert("t_user", array(
            "name" => $name,
            "password" => $pwd
        ));
        return $this->db->affected_rows();
    }

    public function delete($id)
    {
        $this->db->delete("t_user", array(
            "user_id" => $id
        ));
        return $this->db->affected_rows();
    }

    public function update($name, $pwd, $id)
    {
        $this->db->where("user_id", $id);
        return $this->db->update("t_user", array(
            "name" => $name,
            "password" => $pwd
        ));
    }

    public function queryName($name)
    {
        return $this->db->get_where("t_user", array(
            "name" => $name
        ))->row();
    }

}

