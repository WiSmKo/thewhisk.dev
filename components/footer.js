class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="pt-5 d-print-none">
            <div class="container-fluid">
              <div class="row">
                <div class="col">
                </div>
                <div class="col-12 col-lg-4">
                  <p>&#169;2021 William Smallman-K&#246;pf</p>
                  <p><a href="mailto:william@thewhisk.dev">william@thewhisk.dev</a></p>
                  <p>The WHISK web design and web development services</p>
                  <p>Birmingham, UK</p>
                </div>
                <div class="co-12 col-lg-4 mt-5">
                  <p>All stock photography from <a href="https://unsplash.com/">Unsplash</a></p>
                </div>
              </div>
            </div>
        </footer> 

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  