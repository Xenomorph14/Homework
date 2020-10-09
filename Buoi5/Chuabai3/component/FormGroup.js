let $template = document.getElementById("form-group");

class FormGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$email = this.shadowRoot.getElementById("email");
    this.$password = this.shadowRoot.getElementById("password");
    this.$btnLogin = this.shadowRoot.getElementById("btnLogin");
    this.$formGroup = this.shadowRoot.querySelector(".form-group");
    this.$formGroup.addEventListener("submit",(event)=>{
      console.log("thang dep trai");
      event.preventDefault();
    this.validate();
    });
  }
  validate(){
    let email=this.$email.value;
    let password=this.$password.value;
    if(email.trim()==""){
        this.$email.error="Email Invalid";
    }
    if(password.trim()==""){
        this.$password.error="Password Invalid";
    }
  }
}

window.customElements.define("form-group", FormGroup);
