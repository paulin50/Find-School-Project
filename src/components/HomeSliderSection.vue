<template>

<!-- Banner Section -->
<section id="banner">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators"  id="caro2">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/img/3.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Bienvenue sur Findschola</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <a href="#" class="btn btn-warning">Lire plus</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/img/1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Des écoles de renommées à découvrir ici</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <a href="#" class="btn btn-warning">Lire plus</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/img/2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Cherchez votre école de rêve ici</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <a href="#" class="btn btn-warning">Lire plus</a>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Précédent</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Suivant</span>
        </a>
    </div>
</section>
<!-- End Banner Section -->

</template>

<script>
    export default{
        name:"HomeSliderSection"
    };
</script>

<style>

/* banner css */
.carousel-caption {
    background-color: rgb(0 0 0 / 46%);
    text-align: left;
    padding: 25px;
    border-radius: 10px;
}
ol #caro2 {
    display: block;
    left: auto;
    bottom: 50px;
    right: 15px;
}
.carousel-indicators li {
    height: 5px;
    background-color: #ffeb3b;
    opacity: .6;
}
/* End banner css */

</style>