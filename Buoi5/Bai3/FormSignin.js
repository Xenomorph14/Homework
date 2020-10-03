const $template=document.getElementById("template-form-signin");

class FormSignin extends HTMLElement
{
   constructor()
   {
       super();
       this.attachShadow({mode : "open"});
       this.shadowRoot.appendChild($template.content.cloneNode(true));

       this.$email= this.shadowRoot.getElementById("email");
       this.$password= this.shadowRoot.getElementById("password");
       this.$formSignin=this.shadowRoot.querySelector(".form-signin");
   }
}

window.customElements.define("form-signin",FormSignin);
