import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from '../app/firebase';

const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', () => {
    console.log('Clic en el botón de Google');
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((credentials) => {
            console.log(credentials);
        })
        .catch((error) => {
            console.error('Error al manejar clic en el botón de Google:', error);
 
        });
});
