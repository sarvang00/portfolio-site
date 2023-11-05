document.getElementById('submit').addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let email = document.getElementById('email').value;

    let messagesRef = firebase.database().ref();

    messagesRef.child("Info").push().set({
        name: name,
        email: email,
        message: message
    });
    
    reset();

});

function reset(){
    document.getElementById('name').value = "";
    document.getElementById('message').value ="";
    document.getElementById('email').value ="";
}