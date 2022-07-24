<template>
  <div style="
        background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg);
      " class="jumbotron bg-cover text-white">
    <div class="container py-5 text-center">
      <h1 class="display-4 font-weight-bold" style="font-family:poppins;">Moyen de paiements
      </h1>
      <p class=" font-italic mb-0">
      </p>
      <!--p class="font-italic">
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p-->
      <!--a href="#" role="button" class="btn btn-primary px-5">See All Features</a-->
    </div>
  </div>
  <br>
  <br>
  <br>
  <div class="container">
    <div class="row" id="edmond">
      <div class="col">
        <H2 id="h"> Paiement Mobile</H2>
        <div class=" row">
          <div>
            <img src="../assets/images/3.png">
            <img src="../assets/images/5.png">
            <!-- <img src="../assets/images/3.png">
            <img src="../assets/images/5.png"> -->
          </div>
          <div class="col">

          </div>

        </div>
      </div>
      <div class="col">
        <H2 id="h"> Paiement via card</H2>
        <div class=" row">
          <div>
            <!-- <img src="../assets/images/3.png"> -->
            <img src="../assets/images/4.png">
            <!-- <img src="../assets/images/8.png"> -->
            <img src="../assets/images/9.png">
          </div>
          <div class="col">

          </div>

        </div>
      </div>
    </div>
    <div class="row">

      <div class="col">

        <div class="slider">
          <H2 id="he">Nos banques</H2>
          <div class="slide-track">
            <div class="slide">
              <img src="../assets/images/10.png" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/images/11.png" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/images/12.png" height="200" width="" alt="100" />
            </div>

            <div class="slide">
              <img src="../assets/images/13.jpeg" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/images/14.png" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/images/15.jpg" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/images/16.jpg" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/images/17.jpg" height="200" width="" alt="100" />
            </div>

            <!-- 
            
            <div class="slide">
              <img src="../assets/par3.png" height="200" width="" alt="100" />
            </div>

            <div class="slide">
              <img src="../assets/par1.png" height="200" width="" alt="100" />
            </div>
            <div class="slide">
              <img src="../assets/par2.png" height="200" width="" alt="100%" />
            </div>
            <div class="slide">
              <img src="../assets/par3.png" height="200" width="" alt="100" />
            </div> -->

          </div>
        </div>
      </div>

    </div>

  </div>



</template>
<style scoped>


@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 2));
  }
}
slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  margin: auto;
  overflow: hidden;
  position: relative;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider .slide-track {
  animation: scroll 10s linear infinite;
  display: flex;
  width: calc(250px * 3);
}

.slider .slide {
  width: 350px;
}

.slider {
  padding-top: 50px;
  padding-bottom: 20px;
  margin: 50px;
}

img {
  max-width: auto;
  max-height: 120px;
  margin-left:40px;
  
}

 .col{
      flex: 1 0 0%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
      }
 
 img,
 svg {
   vertical-align: middle;
   width: 150px;
 }
 #edmond {
   
  margin-top:15px;
  margin-bottom:0px;
   
  display: flex;
  align-items: center;
 }
 #h {
  font-family: poppins;
 }
 #he {
  font-family: poppins-extra-bold;
  text-align:center;
  font-size:50px;
  padding:-1000px;
 }
 #coli {
  background-color:red;
 }
 
</style>