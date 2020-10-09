let $template = document.getElementById("input");

class InputGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$ip = this.shadowRoot.getElementById("ip");
    this.$label = this.shadowRoot.getElementById("label");
    this.$error = this.shadowRoot.getElementById("error");
  }
  static get observedAttributes() {
    return ["label", "type", "error", "value"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "label") {
      this.$label.innerHTML = newValue;
    } else if (name == "type") {
      this.$ip.type = newValue;
    } else if (name == "error") {
      this.$error.innerHTML = newValue;
    } else if (name == "value") {
      this.$ip.value = newValue;
    }
  }
  get value(){
     return this.$ip.value;
  }
  set error(msg){
      this.setAttribute("error",msg)
  }
}

window.customElements.define("input-group", InputGroup);
