import './register.html';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.register.events({
    'submit form'(event) {
        event.preventDefault();

        let email = $('[name=email]').val();
        let password = $('[name=password]').val();

        Accounts.createUser({
            email: email,
            password: password
        });

        FlowRouter.go('/');
    }
});