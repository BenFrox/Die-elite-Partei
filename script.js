// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Vielen Dank für Ihre Nachricht!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
});

document.getElementById('membershipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const memberName = document.getElementById('member-name').value;
    const memberEmail = document.getElementById('member-email').value;
    const memberMessage = document.getElementById('member-message').value;
    
    if (memberName && memberEmail && memberMessage) {
        alert('Vielen Dank für Ihr Interesse an einer Mitgliedschaft!');
        document.getElementById('membershipForm').reset();
    } else {
        alert('Bitte füllen Sie alle Felder aus.');
    }
});
