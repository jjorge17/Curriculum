import {contactFormValidations, scrollTopButton, darkTheme} from "./funciones.js";
const d=document;

d.addEventListener("DOMContentLoaded", (e)=>{
    scrollTopButton(".scroll-top-btn");
    contactFormValidations();
})

darkTheme(".dark-theme-btn", "dark-mode");
