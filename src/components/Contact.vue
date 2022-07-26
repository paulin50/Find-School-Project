<template>
  <div class="about">
      <div style="
        background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg);
      " class="jumbotron bg-cover text-white">
      <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">Contact</h1>
        <p class="font-italic mb-0"></p>
        <!--p class="font-italic">
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p-->
        <!--a href="#" role="button" class="btn btn-primary px-5">See All Features</a-->
     </div>
    
    </div>

    <div class="container px-4 py-5" id="hanging-icons">
      <h2 class="pb-2 border-bottom">Informations</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
          <div
            class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#toggles2" />
            </svg>
          </div>
          <div>
            <h2>Localisation</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>

          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div
            class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#cpu-fill" />
            </svg>
          </div>
          <div>
            <h2>contact</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>

          </div>
        </div>
        <div class="col d-flex align-items-start">
          <div
            class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#tools" />
            </svg>
          </div>
          <div>
            <h2>E-mail</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and
              probably just keep going until we run out of words.</p>

          </div>
        </div>
      </div>
    </div>

    <div class="formcont">
      <form>
        <label>Nom</label>
        <input type="text" v-model="name" name="name" placeholder="Votre nom" />
        <label>Email</label>
        <input type="email" v-model="email" name="email" placeholder="Your Email" />
        <label>Sujet</label>
        <input type="text" v-model="sujet" name="sujet" placeholder="Sujet" />
        <label>Message</label>
        <textarea name="message" v-model="message" cols="30" rows="5" placeholder="Message">
      </textarea>

        <input type="submit" value="Envoyer" />
      </form>
    </div>


    <!-- <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class=" lh-1 mb-3">Prendre contact avec nous</h1>
        <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput">
            <label for="floatingInput">nom et prenom</label>
          </div>
           <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput">
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" >
            <label for="floatingInput">telephone</label>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          
          <button class="w-100 btn btn-lg btn-primary" type="submit">Envoyer</button>
          <hr class="my-4">
          <small class="text-muted">notre service client vous repondra dans les prochaines 24heures</small>
        </form>
      </div>
    </div>
  </div> -->
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">La société It Innovation</h1>
        <p>La société It Innovation a été fondée en 2018. Elle est spécialisée dans le développement et la
          commercialisation des solutions informatiques innovantes. Il s’agit principalement des solution Web, Mobile,
          Desktop API et autres dans plusieurs secteurs d’activités (Transport, Gestion, santé, Hôtels, Agriculture,
          Mécanique, Professions libérales, écoles etc…) </p>
        <p>La société It Innovation a été fondée en 2018. Elle est spécialisée dans le développement et la
          commercialisation des solutions informatiques innovantes. Il s’agit principalement des solution Web, Mobile,
          Desktop API et autres dans plusieurs secteurs d’activités (Transport, Gestion, santé, Hôtels, Agriculture,
          Mécanique, Professions libérales, écoles etc…) </p>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      sujet: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          e.target,
          "YOUR_USER_ID",
          {
            name: this.name,
            email: this.email,
            sujet: this.sujet,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.sujet = "";
      this.message = "";
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app>div>div>div>div>div.col-10.col-sm-8.col-lg-6>img {
  max-width: 86%;
}

#hero {
  padding: 100px !important;
  align-content: center !important;
}

.bd-placeholder-img {
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {}
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

#texte1 {
  text-align: left;
}

@media (min-width: 992px) {
  .rounded-lg-3 {
    border-radius: .3rem;
  }
}

* {
  box-sizing: border-box;
}


label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.formcont {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>
