const $template=document.getElementById("template-form-register")

class FormRegister extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name=this.shadowRoot.getElementById("name");
        this.$email=this.shadowRoot.getElementById("email");
        this.$password=this.shadowRoot.getElementById("password");
        this.$passwordConfirmation=this.shadowRoot.getElementById("password-confirmation");
        

        console.log(this);
        
        this.$formRegister=this.shadowRoot.querySelector(".form-register");
        this.$formRegister.onsubmit= (event)=>
        {
            // console.log(this);
             event.preventDefault();
            this.register();
            // let email=this.$email.value;
            // let name=this.$name.value;
            // let password=this.$password.value;
            // let passwordConfirmation=this.$password.value;

            // console.log(name,email,password,passwordConfirmation)
        }
    }   
    register()
    {
        //Lay du lieu
        // console.log(this);
        
        // event.preventDefault();
        let email=this.$email.value;
        let name=this.$name.value;
        let password=this.$password.value;
        let passwordConfirmation=this.$passwordConfirmation.value;

        console.log(name,email,password,passwordConfirmation)
        //Check du lieu
        if(this.validate(name,email,password,passwordConfirmation))
        {
            alert("dang nhap thanh cong")
        }
    }
    validate(name,email,password,passwordConfirmation)
    {
        let isPassed=true;
        if(name=="")
        {   
            isPassed=false;
            this.$name.error="Nhap lai ten";
            
        }else
        {
            this.$name.error=""
        }
        if(email=="")
        {
            isPassed=false;
            this.$email.error="Nhap email";
            
        }else{
            this.$email.error=""
        }
        if(password=="")
        {
            isPassed=false;
            this.$password.error="Nhap vao mat khau";
        }else
        {
            this.$password.error="";
        }
        if(passwordConfirmation == "" || passwordConfirmation !=password)
        {   
            isPassed=false;
            this.$passwordConfirmation.error="Nhap lai mat khau";
        }else
        {
            this.$passwordConfirmation.error="";
        }
        return isPassed;
    }
} 

window.customElements.define("form-register",FormRegister)