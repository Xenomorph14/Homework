const $template=document.getElementById("template-input-wrapper");

class InputWrapper extends HTMLElement
{
    constructor()
    {
        super()
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$inputMain=this.shadowRoot.getElementById("input-main");
        this.$label=this.shadowRoot.getElementById("input-label");
        this.$inputError=this.shadowRoot.getElementById("input-error");
        this.$inputWrapper=this.shadowRoot.querySelector(".input-wrapper");
        
    }
    static get observedAttributes()
    {
        return ["label","type","error","value"];
    }
    attributeChangedCallback(name,oldValue,newValue)
    {
        if(name=="label")
        {
            this.$label.innerHTML=newValue;
        } else if(name=="type")
        {
            this.$inputMain.type=newValue;
        }else if(name=="error")
        {
            this.$inputError.error=newValue;
        }else if(name=="value")
        {
            this.$inputError.innerHTML=newValue;
        }
    }
}
window.customElements.define("input-wrapper",InputWrapper);