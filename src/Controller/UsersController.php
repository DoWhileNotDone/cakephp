<?php

namespace App\Controller;

use Cake\Mailer\Mailer;

class UsersController extends AppController
{
    public function index()
    {
        $mailer = new Mailer('default');
        $mailer->setSender('peter@mailtrap.io', 'Peter from Mailtrap')
            ->setTo('kate@mailtrap.io', 'Kate')
            ->setSubject('Test')
            ->deliver('Here');

        $this->viewBuilder()->setLayout('ajax');
        $this->loadComponent('Paginator');
        $users = $this->Paginator->paginate($this->Users->find());
        $this->set(compact('users'));
    }
}