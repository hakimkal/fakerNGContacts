import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
console.log("I am the client");
var fakeUsers = [
  {
        "address": "karmo behind pw camp fct abuja",
        "email": "chimezie.ukpai@example.com",
        "firstName": "Ukpai",
        "mobile_number": "088813972820",
        "sex": "M",
        "surname": "Chimezie"
      },
      {
        "address": "no 18a gambia lane mile ii diobu, port-harcourt rivers state.",
        "email": "orekoya.chidi@devmeetup.com",
        "firstName": "Chidi",
        "mobile_number": "088805515760",
        "sex": "M",
        "surname": "Orekoya"
      },
      {
        "address": "nwoka's compound ogbele ahoada east, rivers state.",
        "email": "ikpe.gabriel@devmeetup.com",
        "firstName": "Gabriel",
        "mobile_number": "088806621485",
        "sex": "F",
        "surname": "Ikpe"
      },

];

Template.myFirstMeteorTemplate.onRendered(function () {
  try{
    Meteor.call("pullFromFaker", function(error, result){
    if(error){
      console.log("error", error);

    }
    if(result){
     //console.log(result.data.response);
     Session.set("dummyUsers",result.data.response);
    }
  });
  }

  catch(e){
    console.log(e) ;

  }
});
Template.myFirstMeteorTemplate.helpers({



fakePeople: function(){
//  return fakeUsers;

return Session.get("dummyUsers");
}

});
Template.registerHelper("incHelper", function(index){
index++;
return index;
});
