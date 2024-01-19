import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from '../app/firebase.js';


  const signupForm = document.querySelector('#signup-form')


  
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    const replypassword = signupForm['reply-signup-password'].value;

    if (password !== null && replypassword !== null && password === replypassword) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Registrado exitosamente

          const user = userCredential.user;
          console.log(user);
          showSuccessAlert('Registro de usuario exitoso');
          // ...
          // Redirige a principal.html después del registro exitoso
          //window.location.href = './principal.html';


        })
        .catch((error) => {
          // Manejo de errores aquí
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);

          // Mostrar mensaje de error al usuario con SweetAlert2 
          // NOTA: errorCode va sin espacios en medio
          switch (errorCode) {
            case 'auth/email-already-in-use':
              showErrorAlert('El email ya está en uso.');
              break;
            case 'auth/invalid-email':
              showErrorAlert('Correo electrónico inválido. Por favor, proporciona un correo electrónico válido.');
              break;
            case 'auth/missing-password':
              showErrorAlert('Ingrese la contraseña.');
              break;
            case 'auth/weak-password':
              showErrorAlert('La contraseña es débil. Por favor, elige una contraseña más segura.');
              break;
            default:
              showErrorAlert(`Error: ${errorMessage}`);
              break;
          }
        });
    } else {
      // Las contraseñas no coinciden, muestra un mensaje de error
      showErrorAlert('Las contraseñas no coinciden. Por favor, verifica tus contraseñas.');
    }

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
