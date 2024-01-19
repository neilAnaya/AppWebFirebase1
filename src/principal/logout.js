import { signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { } from '../app/firebase.js';

const logout = document.querySelector('#logout')

logout.addEventListener('click', () => {
    signOut()
})