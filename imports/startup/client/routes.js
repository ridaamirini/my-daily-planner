import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/register/register.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/logout', {
    action() {
        Meteor.logout(() => {
            FlowRouter.go('/');
        });
    }
});

FlowRouter.route('/', {
    name: 'App.login',
    action() {
        BlazeLayout.render('App_body', { main: 'login' });
    },
});

FlowRouter.route('/home', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/register', {
    name: 'App.register',
    action() {
        BlazeLayout.render('App_body', { main: 'register' });
    },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
