<section name="contact" class="contact notch">
  <container>
      <div class="contactcontent">
          <div class="left-about contactsection cell">
              <div class="label">Contact</div>
              <h2 class="logo"><strong>Ronald</strong> Troyer</h2>
              <div>
                  Current location: Columbus, OH
              </div>
              <div id="phonenum">
                  Phone: <a href="tel:6149069069">(614) 906-9069</a>
              </div>
          </div>

          <form id="contactform" class="right-about contactsection cell" action="./email.php" method="post">
              <input type="text" name="name" id="name" value="" placeholder="Name *" pattern="^[A-Za-z\s\.-]{2,}$" title="Name must be at least two characters long">
              <input type="email" name="email" id="email" value="" placeholder="Email *" pattern="^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$"  title="Please enter a valid email address">
              <textarea placeholder="Message *" name="message" id="message" pattern="^.{1,}$"></textarea>
              <input type="submit" value="Submit" class="clearbutt">
          </form>
          <div class="right-about status"></div>
      </div>
  </container>
</section>
