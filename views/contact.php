<section name="contact" class="contact notch">
  <div class="content">
      <div class="contactcontent">
          <div class="left-about contactsection cell">
              <div class="label">Contact</div>
              <h2><span>Ronald</span> <span>Troyer</span></h2>
              <div>
                  Current location: Columbus, OH
              </div>
              <div id="phonenum">
                  Phone: (614) 906-9069
              </div>
          </div>

          <form id="contactform" class="right-about contactsection cell" action="./email.php" method="post">
              <input type="text" name="name" id="name" value="" placeholder="Name *" data-reg="^[A-Za-z\s\.-]{2,}$"><div class="after">Please enter a valid name</div>
              <input type="email" name="email" id="email" value="" placeholder="Email *" data-reg="^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$"><div class="after">Please enter a valid email</div>
              <textarea placeholder="Message *" name="message" id="message" data-reg="^.{1,}$"></textarea><div class="after">Please enter a message</div>
              <input type="submit" value="Submit" class="clearbutt">
          </form>
          <div class="right-about status"></div>
      </div>


  </div>
</section>
