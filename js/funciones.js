const d =document,
    w = window,
    ls = localStorage;

// Funcion de validacion de campos con expresiones regulares y envio de formulario

export function contactFormValidations(){
    const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input)=>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error","none");
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",(e)=>{
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
            pattern = $input.pattern||$input.dataset.pattern;

            if(pattern && $input.value !== ""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active");
            }

            if(!pattern){
                return $input.value===""
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active");
            }
        }
    })

    //Envio del fornulario 
   
    d.addEventListener("submit",(e)=>{
        //e.preventDefault();
        //alert("Enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");
    
    setTimeout(() => {
        $loader.classList.add("none");
        $response.classList.remove("none");
        $form.reset();  
        setTimeout(() => $response.classList.add("none"), 3000);      
    }, 3000);
    });
}
//Funcion para boton top

export function scrollTopButton(Btn) {
    const $scrollBtn = d.querySelector(Btn);
  
    w.addEventListener("scroll", (e) => {
      let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
      if (scrollTop > 400) {
        $scrollBtn.classList.remove("hidden");
      } else {
        $scrollBtn.classList.add("hidden");
      }
    });
  
    d.addEventListener("click", (e) => {
      if (e.target.matches(Btn)) {
        w.scrollTo({
          behavior:"smooth", 
          top: 0, 
          //left: 0
      })
      }});
  }

  // Funcion tema oscuro

  export function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
      $selectors = d.querySelectorAll("[data-dark]");
  
    let moon = "🌙",
      sun = "☀️";
  
    const lightMode = () => {
      $selectors.forEach(el => el.classList.remove(classDark));
      $themeBtn.textContent = moon;
      ls.setItem("theme", "light");
    }
  
    const darkMode = () => {
      $selectors.forEach(el => el.classList.add(classDark));
      $themeBtn.textContent = sun;
      ls.setItem("theme", "dark");
    }
  
  
    d.addEventListener("click", (e) => {
      if (e.target.matches(btn)) {
        if ($themeBtn.textContent === moon) {
          darkMode();
        } else {
          lightMode();
        }
      }
    });
  
    d.addEventListener("DOMContentLoaded", (e) => {
      if (ls.getItem("theme") === null) ls.setItem("theme", "light");
      if (ls.getItem("theme") === "light") lightMode()
      if (ls.getItem("theme") === "dark") darkMode()
    });
  }