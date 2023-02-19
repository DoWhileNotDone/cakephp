<?php

namespace App\Controller;

class UsersController extends AppController
{
    public function index()
    {
        $this->viewBuilder()->setLayout('ajax');
        $this->loadComponent('Paginator');
        $users = $this->Paginator->paginate($this->Users->find());
        $this->set(compact('users'));
    }
}