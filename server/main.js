import { Meteor } from 'meteor/meteor';
import {HTTP}  from 'meteor/http';
Meteor.startup(() => {
  // code to run on server at startup
  console.log("I am the server");

});

Meteor.methods({
  pullFromFaker:function(){
    this.unblock();
    return HTTP.call("GET",
    'http://faker.abujadevmeetup.com/api/v1/faker/people/10',
    {});
  }
});
