document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén los valores de los campos
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
  
    // Crea el cuerpo del correo
    var body = 'Nombre: ' + name + '\n';
    body += 'Correo Electrónico: ' + email + '\n';
    body += 'Mensaje: ' + message;
  
    // Envía el correo utilizando el servicio de envío de correo del navegador
    window.open('mailto:garcia.misael587@gmail.com?subject=Formulario de Contacto&body=' + encodeURIComponent(body));
  
    // Restablece el formulario
    document.getElementById('contact-form').reset();
  });