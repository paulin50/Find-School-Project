<template>
  <div class="page-holder align-items-center py-4 bg-gray-100 vh-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 px-lg-4" v-if="userlogin || mode == 'login'">
          <div class="card">
            <div class="card-header px-lg-5">
              <div class="card-heading text-primary">Connexion</div>
            </div>
            <div class="card-body p-lg-5">
              <h3 class="mb-4">Salut, Bon retour parmis nous! 👋👋</h3>
              <p class="text-muted text-sm mb-5">
                Renseigner vos identifiants dans les champs suivants
              </p>
              <form id="loginForm" action="index.html">
                <div class="form-floating mb-3">
                  <input
                    v-model="email"
                    class="form-control"
                    id="floatingInput"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">Saisir votre Adresse e-mail</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    v-model="password"
                    class="form-control"
                    id="floatingPassword"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <label for="floatingPassword"
                    >Saisir votre Mot de passe</label
                  >
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label class="form-check-label" for="remember"
                    >Se souvenir de moi</label
                  >
                  <a class="atag" @click="user_lose()"> Mot de passe oublié? </a>
                </div>
                <button class="btn btn-primary" @click="login()">
                  <span v-if="status == 'loading'">Connexion en cours...</span>
                  <span v-else>Connexion</span>
                </button>
              </form>
            </div>
            <div class="card-footer px-lg-5 py-lg-4">
              <div class="text-sm text-muted">
                Vous n'avez pas de compte?
                <a class="atag" @click="user_register()">S'inscrire</a>
              </div>
            </div>
          </div>
        </div>

        <!-- register -->
        <div class="col-lg-6 px-lg-4" v-if="userregister || mode == 'create'">
          <div class="card">
            <div class="card-header px-lg-5">
              <div class="card-heading text-primary">S'inscrire</div>
            </div>
            <div class="card-body p-lg-5">
              <h3 class="mb-4">Salut, Bien venus parmis nous! 👋👋</h3>
              <p class="text-muted text-sm mb-5">
                Choisissez votre catégorie d’établissement et remplissez le
                formulaire
              </p>
              <form action="index.html">
                <select
                  class="form-select mb-3"
                  aria-label="Choix établissement"
                >
                  <option value="">Choisir votre établissement</option>
                  <option value="1">Jardin d’enfants</option>
                  <option value="2">Primaire</option>
                  <option value="3">Collège</option>
                  <option value="4">Lycée</option>
                  <option value="5">Université</option>
                </select>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Nom de l'établissement"
                    required
                  />
                  <label for="name">Nom de l’établissement</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    v-model="email"
                    class="form-control"
                    id="floatingInput"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                  <label for="floatingInput">Adresse e-mail</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="+228 90 00 00 00"
                    required
                  />
                  <label for="phone">Numero de l’établissement</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="type"
                    type="text"
                    placeholder="Type d'établissement"
                    required
                  />
                  <label for="type">Type de l’établissement</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="location"
                    type="text"
                    placeholder="lome - togo"
                    required
                  />
                  <label for="location">Localisation</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="souscription"
                    type="text"
                    placeholder="Souscription"
                    required
                  />
                  <label for="souscription">Souscription</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    v-model="password"
                    class="form-control"
                    id="floatingPassword"
                    type="password"
                    placeholder="Password"
                    required
                  />

                  <label for="floatingPassword">Mot de passe</label>
                </div>
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="agree"
                    id="agree"
                  />
                  <label class="form-check-label" for="agree"
                    >Je suis d'accord avec les
                    <a class="atag" href="#">termes et conditions</a>.</label
                  >
                </div>
                <div class="form-group">
                  <button
                    @click="createAccount()"
                    class="btn btn-primary"
                    id="regidter"
                    type="button"
                    name="registerSubmit"
                  >
                    <span v-if="status == 'loading'">Création en cours...</span>
                    <span v-else>Créer mon compte</span>
                  </button>
                </div>
              </form>
            </div>
            <div class="card-footer px-lg-5 py-lg-4">
              <div class="text-sm text-muted">
                Vous avez déjà un compte?
                <a class="atag" @click="user_login()">Connexion</a>.
              </div>
            </div>
          </div>
        </div>
        <!-- Password lose -->
        <div class="col-lg-6 px-lg-4" v-if="userlose">
          <div class="card">
            <div class="card-header px-lg-5">
              <div class="card-heading text-primary">Connexion</div>
            </div>
            <div class="card-body p-lg-5">
              <h3 class="mb-4">Mot de Passe oublié?</h3>
              <p class="text-muted text-sm mb-5">Saisir le code ici</p>
              <form id="loginForm" action="index.html">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="floatingPassword"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <label for="floatingPassword">Saisir le code</label>
                </div>
                <button class="btn btn-primary" type="button">
                  Se Connecter
                </button>
              </form>
            </div>
            <div class="card-footer px-lg-5 py-lg-4">
              <div class="text-sm text-muted">
                Vous n'avez pas de compte?
                <a class="atag" @click="user_register()">S'inscrire</a>.
              </div>
            </div>
          </div>
        </div>

        <!-- Password lose -->

        <div
          class="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"
        >
          <img
            class="img-fluid mb-4"
            width="300"
            src="https://therichpost.com/wp-content/uploads/2021/06/login_page_image.png"
            alt=""
            style="transform: rotate(10deg)"
          />
          <h1 class="mb-4">
            FindSholla.com <br class="d-none d-lg-inline" />Trouver votre
            établissement.
          </h1>
          <p class="lead text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//importing bootstrap 5 Modules and state vueex

import "bootstrap/dist/css/bootstrap.min.css";
import { mapState } from "vuex";

export default {
  name: "Connexion",
  methods: {
    //user login button click event
    user_login() {
      (this.userlogin = true),
        (this.userregister = false),
        (this.userlose = false);
    },

    //user register button click event
    user_register() {
      (this.userlogin = false),
        (this.userregister = true),
        (this.userlose = false);
    },
    //user lose passworld click event
    user_lose() {
      (this.userlogin = false),
        (this.userregister = false),
        (this.userlose = true);
    },
  },
  data: function () {
    return {
      userlogin: true,
      userregister: false,
      userlose: false,
      email: "",
      password: "",
    };
  },

  mounted: function () {
    if (this.$store.state.user.userId != -1) {
      this.$router.push("/profile");
      return;
    }
  },
  computed: {
    validatedFields: function () {
      if (this.mode == "create") {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.email != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    ...mapState(["status"]),
  },

  login: function () {
    const self = this;
    this.$store
      .dispatch("login", {
        email: this.email,
        password: this.password,
      })
      .then(
        function () {
          self.$router.push("/profile");
        },
        function (error) {
          console.log(error);
        }
      );
  },
  createAccount: function () {
    const self = this;
    this.$store
      .dispatch("createAccount", {
        email: this.email,
        password: this.password,
      })
      .then(
        function () {
          self.login();
        },
        function (error) {
          console.log(error);
        }
      );
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

/* * {
  font-family: "Poppins", sans-serif;
} */

.card-header:first-child {
  border-radius: calc(1rem - 1px) calc(1rem - 1px) 0 0;
}

.card-header {
  position: relative;
  padding: 2rem 2rem;
  border-bottom: none;
  background-color: white;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  z-index: 2;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 1rem;
}

.bg-gray-100 {
  background-color: #f8f9fa !important;
}

/* body {
  font-family: "Poppins" !important;
} */

.text-primary {
  color: #4650dd !important;
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  font-weight: 700;
  line-height: 1.2;
}

.text-muted {
  color: #6c757d !important;
}

.lead {
  font-size: 1.125rem;
  font-weight: 300;
}

.text-sm {
  font-size: 0.7875rem !important;
}

h3,
.h3 {
  font-size: 1.575rem;
}

.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);

  flex-wrap: wrap;
}

.atag {
  color: #4650dd !important;
  text-decoration: underline !important;
  cursor: pointer;
}
</style>
