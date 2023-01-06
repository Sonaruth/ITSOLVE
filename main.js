var open = document.getElementById('open');
var list = document.getElementById('list');
var close = document.getElementById('close')

open.addEventListener('click', function(){
    list.style.display = 'block';
    open.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click', function(){
    list.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none';
})


var names = document.getElementById('names');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
var send = document.getElementById('send')

send.addEventListener('click', function(){
    if(names.value == ''){
        alert('Please enter your name')
       
    }
    else if(email.value == ''){
        alert('Please enter your email')
    }
    else if(phone.value == ''){
        alert('Please enter your phone number')
    }
    else if(subject.value == ''){
        alert('Please enter a subject')
    }
    else if(message.value == ''){
        alert('Please enter your message')
    }
})