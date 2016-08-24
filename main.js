$(document).ready(function(){
  $.get('http://json-data.herokuapp.com/forms', function(data){
    var htmlStr = '';
    data.forEach(function(item){
    	if (item.type === 'text') {
    		htmlStr += "<input type='text' placeHolder='" + item.label + "' id='" + item.id + "' />";
    	}
    	if (item.type === 'email') {
    		htmlStr += "<input type='email' placeHolder='" + item.label + "' id='" + item.id + "' />";
    	}
    	
    	if (item.type === 'select') {
    		htmlStr += "<input type='select' placeHolder='" + item.label + "' id='" + item.id + "' options='" + item.option + "'  />";
    	}

    	if (item.type === 'textarea') {
    		htmlStr += "<input type='textarea' placeHolder='" + item.label + "' id='" + item.id + "' />";
    	}

    	if (item.type === 'tel') {
    		htmlStr += "<input type='tel' placeHolder='" + item.label + "' id='" + item.id + "' />";
    	}
  
    })

    $("#forms").html(htmlStr)

  })
});

// 




















// $.getJSON('http://gotohere.com', function(resp){
//  
// })




// [
// {
// type: "text",
// label: "First Name",
// id: "user-first-name",
// icon: "fa-user",
// options: [ ]
// },
// {
// type: "text",
// label: "Last Name",
// id: "user-last-name",
// icon: "fa-user",
// options: [ ]
// },
// {
// type: "email",
// label: "Email Address",
// id: "user-email",
// icon: "fa-envelope",
// options: [ ]
// },
// {
// type: "text",
// label: "Current website url",
// id: "user-website",
// icon: "fa-globe",
// options: [ ]
// },
// {
// type: "select",
// label: "Select Language",
// id: "user-language",
// icon: "",
// options: [
// {
// label: "English",
// value: "EN"
// },
// {
// label: "French",
// value: "FR"
// },
// {
// label: "Spanish",
// value: "SP"
// },
// {
// label: "Chinese",
// value: "CH"
// },
// {
// label: "Japanese",
// value: "JP"
// }
// ]
// },
// {
// type: "textarea",
// label: "Your Comment",
// id: "user-comment",
// icon: "fa-comments",
// options: [ ]
// },
// {
// type: "tel",
// label: "Mobil Number",
// id: "user-mobile",
// icon: "fa-mobile-phone",
// options: [ ]
// },
// {
// type: "tel",
// label: "Home Number",
// id: "user-phone",
// icon: "fa-phone",
// options: [ ]
// }
// ]






