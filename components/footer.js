class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="pt-5">
            <div class="container-fluid">
                <p class="text-center fw-light fs-6">&#169;2021 William Smallman-K&#246;pf</p>
            </div>
        </footer> 
      `;
    }
  }
  
  customElements.define('footer-component', Footer);