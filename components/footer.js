class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="pt-5 noprint">
            <div class="container-fluid">
                <p>&#169;2021 William Smallman-K&#246;pf</p>
                <p><a href="mailto:william@thewhisk.dev">william@thewhisk.dev</a></p>
                <p>Birmingham, UK</p>
            </div>
        </footer> 
      `;
    }
  }
  
  customElements.define('footer-component', Footer);