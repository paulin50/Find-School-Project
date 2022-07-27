<template>
    <nav class="navbar navbar-dark  navbar-expand-sm " style="background-color:#006663">
        <div class="container">
            <router-link class="navbar-brand" to="/">Findschola</router-link>
            <div class="">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link px-4">Accueil</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Etablissements</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item">
                                <router-link to="/jardin" class="nav-link px-4" style="color: black;" >jardin</router-link>
                            </a>
                            <a  class="dropdown-item">
                                <router-link to="/primaire" class="nav-link px-4" style="color: black;">Primaire</router-link>
                            </a>
                            <a class="dropdown-item">
                                 <router-link to="/college" class="nav-link px-4" style="color: black;">College</router-link>
                            </a>
                            <a class="dropdown-item">
                                <router-link to="/lycee" class="nav-link px-4" style="color: black;">Lycée</router-link>
                            </a>
                            <a class="dropdown-item">
                                <router-link to="/universite" class="nav-link px-4" style="color: black;">Université</router-link>

                            </a>
                            <!--div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Trash</a-->
                        </div>
                    </li>
                   <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Information</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item">
                                <router-link to="/commentcamarche" class="nav-link px-4" style="color: black;" >Comment ca marche?</router-link>
                            </a>
                            <a  class="dropdown-item">
                                <router-link to="/faq" class="nav-link px-4" style="color: black;">FAQ</router-link>
                            </a>
                            <a class="dropdown-item">
                                <router-link to="/temoignage" class="nav-link px-4" style="color: black;">Temoignage</router-link>
                            </a>
                            <a class="dropdown-item">
                                <router-link to="/about" class="nav-link px-4" style="color: black" >A'propos</router-link>
                            </a>
                            <!--div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">Trash</a-->
                        </div>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link px-4">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/connexion" class="nav-link px-4">Connexion</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/inscription" class="nav-link px-4 ">Inscription</router-link>
                    </li>
                  </ul>
            </div>
        </div>
        
    </nav>
</template>



<script>
export default {
    name: 'NavBar'
};
</script>

<style scoped>

#app > div > nav > div > div > ul > li:nth-child(2) > div > a > a {
     color: black !important;
}
#app > div > nav > div > div > ul > li:nth-child(3) > div > a > a {
     color: black !important;
}



#app > div > nav > div > div > ul > li:nth-child(2) > div{
background-color: #ffffffa8;

}

#app > div > nav > div > div > ul > li:nth-child(3) > div{
background-color: #ffffffa8;

}
</style>