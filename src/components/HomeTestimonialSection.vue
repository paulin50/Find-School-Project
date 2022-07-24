<template>

<!-- Testimonial Slide Section -->
<section id="testimonial-slider" class="bg-light py-5">
    <div class="container">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="col-sm-8 mx-auto">
                <div class="row text-center py-3">
                    <div class="col-lg-12 m-auto">
                        <h1 class="h1">Témoignages</h1>
                    </div>
                </div>
                <div class="carousel-inner text-center text-white py-5">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <div class="user-photo shadow">
                            <img src="../assets/img/user.jpg" class="img-fluid" alt="testimonial slider">
                        </div>
                        <div class="slider-caption mt-3">
                            <p class="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <figcaption class="blockquote-footer mt-3 text-white fs-5"><cite>Gurdeep Dahiya</cite></figcaption>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <div class="user-photo shadow">
                            <img src="../assets/img/user.jpg" class="img-fluid" alt="testimonial slider">
                        </div>
                        <div class="slider-caption mt-3">
                            <p class="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <figcaption class="blockquote-footer mt-3 text-white fs-5"><cite>Rajnish Kumar</cite></figcaption>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                        <div class="user-photo shadow">
                            <img src="../assets/img/user.jpg" class="img-fluid" alt="testimonial slider">
                        </div>
                        <div class="slider-caption mt-3">
                            <p class="fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <figcaption class="blockquote-footer mt-3 text-white fs-5"><cite>Pardeep Dahiya</cite></figcaption>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</section>
<!-- End Testimonial Slide Section -->

</template>

<script>
    export default{
        name:"HomeTestimonialSection"
    };
</script>

<style>
/* Testimonial slider css */
.user-photo {
    width: 120px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto;
}
.testimonial-slider {
    background-color: #EFEFEF;
}
.fs-5 {
    color: #000;
}
cite {
    color: #000;
}
/* End Testimonial slider css */
</style>