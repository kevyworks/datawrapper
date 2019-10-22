<?php

require_once ROOT_PATH . 'controller/account/activate.php';
require_once ROOT_PATH . 'controller/account/set-password.php';
require_once ROOT_PATH . 'controller/account/reset-password.php';

require_once ROOT_PATH . 'controller/team/activate.php';
require_once ROOT_PATH . 'controller/team/create.php';
require_once ROOT_PATH . 'controller/team/invites.php';
require_once ROOT_PATH . 'controller/team/leave.php';
require_once ROOT_PATH . 'controller/team/settings.php';

call_user_func(function() {
    global $app;

    Hooks::register(
        Hooks::GET_ACCOUNT_PAGES, function() {
        return array(
            'order' => 100,
            'controller' => function ($app, $user) {
              return function() use ($app, $user) {
                $app->render('account/edit-profile.twig', array(
                    "svelte_data" => [
                        "email" => $user->getEmail(),
                        "userId" => $user->getId()
                    ]
                ));
              };
            }
        );
    });

    Hooks::register(
        'render_account_pages',
        function () use ($app) {
            $user = Session::getUser();

            $context = array(
                "user" => $user
            );

            $pages = Hooks::execute(Hooks::GET_ACCOUNT_PAGES, $user);

            foreach ($pages as $page) {
                if (!isset($page['order'])) $page['order'] = 999;
            }


            usort($pages, function($a, $b) { return $a['order'] - $b['order']; });


            foreach($pages as $page) {
                call_user_func_array($page['controller']($app, $user), func_get_args());
            }
        }
    );

    // redirect to settings
    $app->get('/settings/?', function() use ($app) {
        $app->redirect('/account');
    });

    $app->get('/account(/:tab)?', function($tab = null) use ($app) {
        disable_cache($app);

        if (Session::isLoggedIn()) {
            $user = Session::getUser();

            $context = array(
                "user" => $user,
                'teams' => $user->getOrganizations()->asArray()
            );

            add_header_vars($page, 'account');

            $app->render('account.twig', $page);
        }
    });

});

