class Header extends HTMLElement {
    constructor() {
        super();
}

connectedCallback() {
    this.innerHTML = `
        <div class="container-fluid">

        <div class="row">
        <a href="index.html"><img id = "headLogo" src="images/Logo.png" class="mx-auto d-block" alt="the whisk logo"></a>
        </div>

       <div class="row pb-5">
            <div class="container">
                <nav>
                    <ul class="nav justify-content-center">
                        <li class="nav-item"><a class="nav-link" id="navPortfolio" href="portfolio.html">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" id="navCV" href="cv.html">Ciriculum Vitae</a></li>
                        <li class="nav-item"><a class="nav-link" id="navServices" href="services.html">Services</a></li>
                        <li class="nav-item"><a class="nav-link" id="navAbout" href="about.html">About Me</a></li>
                        <li class="nav-item"><a class="nav-link" id="navContact" href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div> 
        `;
    }
}

customElements.define('header-component', Header);

function setActive(page) {
    document.getElementById(page).style.color= "#8b8b8b";
    document.getElementById(page).setAttribute("aria-current","page");
}

if (document.title === "theWHISK.dev Portfolio"){
    setActive("navPortfolio");
} else if (document.title === "theWHISK.dev Ciriculum Vitae"){
    setActive("navCV");
} else if (document.title === "theWHISK.dev Services"){
    setActive("navServices");
} else if (document.title === "theWHISK.dev About Me"){
    setActive("navAbout");
} else if (document.title === "theWHISK.dev Contact"){
    setActive("navContact");
}
