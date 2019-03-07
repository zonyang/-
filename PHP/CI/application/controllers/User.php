<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/3/5 0005
 * Time: 下午 8:49
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller
{

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *        http://example.com/index.php/welcome
     *    - or -
     *        http://example.com/index.php/welcome/index
     *    - or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model("user_model");
    }

    public function index()
    {
        $this->load->view('login');
    }

    public function user_list()
    {
        $users = $this->user_model->selectAll();
        $this->load->view("list_user", array(
            "users" => $users
        ));
    }

    public function login()
    {
        $login = $this->input->post("login");
        $register = $this->input->post("register");
        if ($login) {
            $username = $this->input->post("name");
            $pwd = $this->input->post("pwd");
            $row = $this->user_model->login($username, $pwd);
            if ($row) {
                redirect('user/user_list');
            } else {
                echo "login fail";
            }
        }
        if ($register) {
            $this->load->view("register");
        }
    }

    public function register()
    {
        $username = $this->input->post("name");
        $pwd = $this->input->post("pwd");
        $row = $this->user_model->insert($username, $pwd);
        if ($row) {
            redirect(base_url('user/index'));
        } else {
            echo "register fail";
        }
    }

    public function delete()
    {
        $id = $this->input->get("user");
        $row = $this->user_model->delete($id);
        if ($row) {
            redirect('user/user_list');
        }
    }

    public function change()
    {
        $id = $this->input->get("user");
        $this->load->view("change", array(
            "user" => $id
        ));
    }

    public function update()
    {
        $id = $this->input->post("id");
        $username = $this->input->post("name");
        $pwd = $this->input->post("pwd");
        $row = $this->user_model->update($username, $pwd, $id);
        if ($row) {
            redirect('user/user_list');
        }
    }

    public function queryName()
    {
        $name = $this->input->get("username");
        $row = $this->user_model->queryName($name);
        if ($row) {
            echo "fail";
        } else {
            echo "success";
        }
    }
}