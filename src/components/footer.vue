
<template>

    <footer class="foot" id="tempaltemo_footer" style="background-color:#006663;color:#FFF000">
        <div class="container">
            <div class="row " style="color:red">

                <div class="col-md-3 pt-5 ">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Contact</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            <a class="text-decoration-none" href="#" tyle="color:#FFF000">Totsi(Lomé-TOGO)</a>
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="#" tyle="color:#FFF000">000-000-0000</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="#">info@Findschola.com</a><br>

                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="#">contact@Findschola.com</a>

                        </li>
                    </ul>
                </div>

                <div class="col-md-3 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Etablissement</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none">
                                <router-link to="/jardin">jardin</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/primaire">Primaire</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/college">Collége</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/lycee">Lycée</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/universite">Univérsité</router-link>
                            </a></li>
                        <!--li><a class="text-decoration-none" href="#">Popular Dress</a></li>
                    <li><a class="text-decoration-none" href="#">Gym Accessories</a></li>
                    <li><a class="text-decoration-none" href="#">Sport Shoes</a></li-->
                    </ul>
                </div>

                <div class="col-md-3 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Liens utiles</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none">
                                <router-link to="/commentcamarche">Comment ca marche</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/faq">Foire Aux Questions</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/temoignage">Temoignage</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/about">A'propos</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/contact">Contact</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/blog">Blog</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/tarif">Tarif</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/moyendepaiement">Moyen de paiement</router-link>
                            </a></li>

                    </ul>
                </div>

                <div class="col-md-3 pt-5 ">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Mentions legales</h2>
                    <ul class="list-unstyled text-light footer-link-list ">
                        <li><a class="text-decoration-none ">
                                <router-link to="/politiquedeconfidentialite">Politique de confidentilité</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/droitauteur">Droit d'auteur</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/conditionsgeneraleutilisation">Conditions d'utiisation</router-link>
                            </a></li>
                        <li><a class="text-decoration-none">
                                <router-link to="/limitationsderesponsabilite">Limitation de résponsabilité
                                </router-link>
                            </a></li>
                    </ul>
                </div>
            </div>
            <div class="row text-light mb-3">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i
                                    class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i
                                    class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i
                                    class="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="#"><i
                                    class="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-dark border-light" id="subscribeEmail"
                            placeholder="Email address">
                        <div class="input-group-text btn-success text-light">Envoyer</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3 primary btn-success">© 2022 Copyright:
            <a href="https://it-innovat.com/" style="color:#FFF000">IT INNOVATION</a>
        </div>

        <!-- Copyright -->
    </footer>
    <!-- End Footer -->
</template>

<style scoped>
a {
    color: white !important;
    text-decoration: none;
}

.foot {
    padding-top: 80px;
}

li {
    margin-top: 10px;
    margin-bottom: 10px;
}

#tempaltemo_footer > div.container > div.row.text-light.mb-3 > div:nth-child(3){
    display: flex;
    flex-direction: row;
    /* align-content: center; */
    align-items: center;
}
.list-inline-item{
padding: 6px;
}
</style>

<script>
export default {
    name: 'Footer',
}
</script>
