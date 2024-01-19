import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from './firebase.js';


const loginForm = document.querySelector('#login-form')

const googleButton = document.querySelector('#googleLogin');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // Validación del lado del cliente
  if (!email || !password) {
    showErrorAlert('Por favor, ingresa el correo y la contraseña.');
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Inicio de sesión exitoso
      const user = userCredential.user;
      console.log('Usuario autenticado:', user);

      // Redirige a la página después del inicio de sesión exitoso
      window.location.href = './principal.html';
    })
    .catch((error) => {
      // Manejo de errores aquí
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorMessage);
      console.log(errorCode);


      switch (errorCode) {
        case 'auth/network-request-failed':
          showErrorAlert('El email es invalido .');
          break;
        case 'auth/invalid-email':
          showErrorAlert('Correo electrónico inválido');
          break;
        case 'auth/invalid-credential':
          showErrorAlert('Contraseña incorrecta');
          break;
        default:
          showErrorAlert(`Error: ${errorMessage}`);
          break;
      }
      // Muestra un mensaje de error al usuario
    });
});


googleButton.addEventListener('click', () => {
  console.log('Clic en el botón de Google');

  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((credentials) => {
      console.log(credentials);
      window.location.href = './principal.html';
    })
    .catch((error) => {
      console.error('Error al manejar clic en el botón de Google:', error);

    });
});


function showErrorAlert(message) {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: message,
    showConfirmButton: false,
    timer: 3000, // Duración en milisegundos
  });
}

function showSuccessAlert(message) {
  Swal.fire({
    icon: 'success',
    title: 'Registro Exitoso',
    text: message,
  });
}
