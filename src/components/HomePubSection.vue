<template>

<!-- Pub Section-->
<div id="innov" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators" id="caro">
        <li data-bs-target="#innov" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#innov" data-bs-slide-to="1"></li>
        <li data-bs-target="#innov" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="../assets/img/courslumiere.jpg" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left align-self-center">
                            <h1 class="h1 text-success"> Cours Lumière</h1>
                            <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="../assets/img/mariam.jpg" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left">
                            <h1 class="h1">Mariam International</h1>
                            <h3 class="h2">Lorem Ipsum Lorem Ipsum</h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="container">
                <div class="row p-5">
                    <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                        <img class="img-fluid" src="../assets/img/esgis.jpg" alt="">
                    </div>
                    <div class="col-lg-6 mb-0 d-flex align-items-center">
                        <div class="text-align-left">
                            <h1 class="h1">ESGIS Togo</h1>
                            <h3 class="h2">Lorem Ipsum Lorem Ipsum </h3>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#innov" role="button" data-bs-slide="prev">
        <i class="fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#innov" role="button" data-bs-slide="next">
        <i class="fas fa-chevron-right"></i>
    </a>
    
  </div>
<!--End Pub Section-->

</template>

<script>
    export default{
        name:"HomePubSection"
    };
</script>

<style scoped>
/* Pub Section*/

/* Hero Carousel */
#innov { background: #efefef !important;}

/* Carousel Hero */
#innov #caro li {
    margin-top: -50px;
    background-color: #59ab6e;
  }
  #innov .carousel-control-next i,
  #innov .carousel-control-prev i {
    color: #59ab6e !important;
    font-size: 2.8em !important;
  }
  /* Carousel Brand */
  .tempaltemo-carousel .h1 {
    font-size: .5em !important;
    color: #000 !important;
  }
/*Pub Section*/
</style>