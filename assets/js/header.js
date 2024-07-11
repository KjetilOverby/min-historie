class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <div>
    <nav style='margin-bottom: 3rem' id="menu">
    <header class="major">
      <h2>Meny</h2>
    </header>
    <ul>
      <li><a href="index.html">Hjem</a></li>
      <li><a href="generic.html">Min historie</a></li>
      <li><a href="elements.html">Bok</a></li>
      <li><a href="elements.html">Salg</a></li>
      <li><a href="elements.html">Bilder</a></li>
      <li><a href="elements.html">om meg</a></li>
     
      
   
  
    </ul>
    
  </nav>


  <section>
 <header class="major">
              <h2>Boklansering</h2>
            </header>
            <div class="mini-posts">
              <article>
                <a href="#" class="image"
                  ><img src="https://www.norli.no/media/catalog/product/9/7/9788269288001_1.jpg?auto=webp&format=pjpg&width=728&height=910&fit=cover" alt=""
                /></a>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore aliquam.
                </p>
                <ul class="actions">
                <li><a href="#" class="button">Les mer</a></li>
              </ul>
              </article>
           
            
           
          </section>

  
  <section>
  <header style='margin-top: 5rem' class="major">
    <h2>Kontakt</h2>
  </header>
 
  <ul  class="contact">
    <li class="icon solid fa-envelope">
      <a href="#">per_erling@mail.com</a>
    </li>
    <li class="icon solid fa-phone">90 909 909</li>
    <li class="icon solid fa-home">
      Norge
    </li>
  </ul>
</section>

  <section>
<!-- Footer -->
<footer style='margin-top: 5rem' id="footer">
  <p class="copyright">
    &copy; Untitled. All rights reserved. 
   Design:
    <a href="https://html5up.net">HTML5 UP</a>.
  </p>
</footer>
    </div>
      `;
  }
}

customElements.define("custom-header", HeaderElement);
