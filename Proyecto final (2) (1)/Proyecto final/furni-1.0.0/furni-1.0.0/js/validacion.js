document.addEventListener('DOMContentLoaded', function() {
    var enviarMensajeBtn = document.getElementById('enviarMensaje');
    enviarMensajeBtn.addEventListener('click', function() {
      var fname = document.getElementById('fname').value.trim();
      var lname = document.getElementById('lname').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();
  
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var phoneRegex = /^[0-9]{10}$/;
  
      if (fname === '') {
        alert('Por favor, ingresa tu primer nombre.');
        return;
      }
  
      if (lname === '') {
        alert('Por favor, ingresa tu apellido.');
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
      }
  
      if (!phoneRegex.test(message)) {
        alert('Por favor, ingresa un número de teléfono válido.');
        return;
      }
  
      alert('Mensaje enviado');
    });
  });
