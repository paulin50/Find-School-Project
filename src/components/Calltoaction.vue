<template>
    <!-- Start Footer -->
    <div id="centre">
        <div class="first">
            <div class="second">
                <div class="text">
                    <h1>Inscrivez-vous sur FindSchola</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quia cum quasi earum provident sint ipsam, <br> nulla molestias necessitatibus porro unde modi
                        repellat sequi veniam ipsum possimus,
                        voluptate aliquid deserunt repellendus.
                    </p>
                </div>
                <button type="button" class="btn"
                    style="width:20%;height:13%;font-size:100%;color:white; background-color: #ff5e00;">
                    <router-link to="/inscription" class="nav-link px-4 ">Inscription</router-link>
                </button>

            </div>
        </div>
        <img id="image" src="../assets/bg-call.jpg">
    </div>
</template>

<script>
export default {

}
</script>

<style>


h1{
    color: white;
}
a {
    color: white !important;
    text-decoration: none;
}

.foot {
    padding-top: 80px;
}

#centre {
    left: 0px;
    right: 0px;
    top: 90px;
    width: 100%;
    position: relative;
    display: block;
}

.text {
    color: white;
}

#image {
    width: 100%;
}

.second {
    display: block;
    align-content: center;
    text-align: center;
    margin-top: 12%;
}

@media (max-width: 992px) {
    #centre {
             
            top: -10px;
            width: 100%;
            position: relative;
            display: block;
            padding-top: 200px;
        }
}

.first {
    position: absolute;
    width: 100%;
    background-color: #000206;
    opacity: 80%;
    height: 100%;
}
</style>