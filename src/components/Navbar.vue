<template>
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s" style="background-color:#006663 !important;">
        <a href="index.html" class="navbar-brand p-0">
            <img class="img-fluid me-3" src="../assets/find_logo2.png" alt="Icon" />
            <h1 class="m-0 text-primary"></h1>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
                <a href="#" class="nav-item nav-link active">
                    <router-link to="/">Accueil</router-link>
                </a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Etablissements</a>
                    <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="animal.html" class="dropdown-item">
                            <router-link to="/jardin" class="nav-link px-4" style="color: black !important;">jardin
                            </router-link>
                        </a>
                        <a href="membership.html" class="dropdown-item">
                            <router-link to="/primaire" class="nav-link px-4" style="color: black !important;">Primaire
                            </router-link>
                        </a>
                        <a href="#" class="dropdown-item">
                            <router-link to="/college" class="nav-link px-4" style="color: black !important;">College
                            </router-link>
                        </a>
                        <a href="testimonial.html" class="dropdown-item">
                            <router-link to="/lycee" class="nav-link px-4" style="color: black !important;">Lycée
                            </router-link>
                        </a>
                        <a href="404.html" class="dropdown-item">
                            <router-link to="/universite" class="nav-link px-4" style="color: black !important;">
                                Université
                            </router-link>
                        </a>

                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Information</a>
                    <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                        <a href="animal.html" class="dropdown-item">
                            <router-link to="/commentcamarche" class="nav-link px-4" style="color: black !important;">
                                Comment
                                ca marche?</router-link>
                        </a>
                        <a href="membership.html" class="dropdown-item">
                            <router-link to="/faq" class="nav-link px-4" style="color: black !important;">FAQ
                            </router-link>
                        </a>
                        <a href="visiting.html" class="dropdown-item">
                            <router-link to="/temoignage" class="nav-link px-4" style="color: black !important;">
                                Temoignage
                            </router-link>
                        </a>
                        <a href="#" class="dropdown-item">
                            <router-link to="/about" class="nav-link px-4" style="color: black !important">A'propos
                            </router-link>
                        </a>

                    </div>
                </div>
                <a href="#" class="nav-item nav-link">
                    <router-link to="/contact">Contact</router-link>
                </a>
                <a href="#" class="nav-item nav-link">
                    <router-link to="/connexion">Connexion</router-link>
                </a>


            </div>
            <a href="" class="btn btn-primary"
                style="background-color:#ff9100!important ; border-color: #ff9100; display: flex; align-content: center;">
                <router-link to="/inscription">Inscription</router-link><i class="fa fa-arrow-right ms-3"></i>
            </a>
        </div>
    </nav>
</template>



<script>
export default {
    name: 'NavBar'
};
</script>

<style scoped>
.navbar .navbar-brand img {
    max-height: 30px;
}

.navbar .dropdown-toggle::after {
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    vertical-align: middle;
    margin-left: 8px;
}

.navbar .navbar-nav .nav-link {
    margin-right: 30px;
    padding: 25px 0;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    outline: none;
}


.navbar .navbar-nav .nav-link:hover,
.navbar .navbar-nav .nav-link.active {
    color: var(--primary);
}

a {
    color: var(--bs-link-color);
    text-decoration: none;
}

.dropdown-item:hover:hover {
    background-color: whitesmoke;
}


@media (max-width: 991.98px) {
    .navbar .navbar-nav .nav-link {
        margin-right: 0;
        padding: 10px 0;
    }

    .navbar .navbar-nav {
        border-top: 1px solid #eeeeee;
    }
}

.navbar .navbar-nav .nav-link {
    color: var(--dark);
    font-weight: 500;
}

@media (min-width: 992px) {
    .navbar .nav-item .dropdown-menu {
        display: block;
        border: none;
        margin-top: 0;
        top: 150%;
        opacity: 0;
        visibility: hidden;
        transition: .5s;
        background-color: #ffffffa8;
    }

    .navbar .nav-item:hover .dropdown-menu {
        top: 100%;
        visibility: visible;
        transition: .5s;
        opacity: 1;
    }
}

#app>div>nav>div>div>ul>li:nth-child(2)>div>a>a {
    color: black !important;
}

#app>div>nav>div>div>ul>li:nth-child(3)>div>a>a {
    color: black !important;
}



#app>div>nav>div>div>ul>li:nth-child(2)>div {
    background-color: #ffffffa8;

}

#app>div>nav>div>div>ul>li:nth-child(3)>div {
    background-color: #ffffffa8;

}

#logo_find {
    max-width: 200px;
    max-height: 500px;
    margin: 5px;
    padding: 5px;
}
</style>