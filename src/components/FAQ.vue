<template>
  <section>
    <div style="
        background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg);
      " class="jumbotron bg-cover text-white">
      <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">Foire Aux Questions</h1>
        <p class="font-italic mb-0"></p>
        <!--p class="font-italic">
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p-->
        <!--a href="#" role="button" class="btn btn-primary px-5">See All Features</a-->
      </div>
    </div>
    <main>
      <details open>
        <summary>How I solve this issue?</summary>
        <div class="faq__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            suscipit, iure tenetur eveniet, vero tempore delectus? Perferendis,
            quisquam ullam consequuntur?
          </p>
        </div>
      </details>
      <details>
        <summary>How to input your data on this board?</summary>
        <div class="faq__content">
          <p>
            Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque.
            Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
        </div>
      </details>
      <details>
        <summary>How to input your data on this board?</summary>
        <div class="faq__content">
          <p>
            Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque.
            Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
        </div>
      </details>
      <details>
        <summary>How to input your data on this board?</summary>
        <div class="faq__content">
          <p>
            Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque.
            Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
        </div>
      </details>
      <details>
        <summary>How to input your data on this board?</summary>
        <div class="faq__content">
          <p>
            Fugiat quo voluptas nulla pariatur? Et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque.
            Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo.
          </p>
        </div>
      </details>
    </main>
  </section>
  
</template>



<style>

section {
  font-size: 16px;
  font-weight: 400;
  color: black;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
  
}

h1 {
  font-size: clamp(20px, 4vw, 30px);
  line-height: 1.2;
  margin-bottom: 40px;
}

main {
  max-width: 70%;
  margin: 50px auto;
}

summary {
  font-size: 1.25rem;
  font-weight: 600;
  background-color: #fff;
  color: #333;
  padding: 1rem;
  margin-bottom: 1rem;
  outline: none;
  border-radius: 0.25rem;
  text-align: left;
  cursor: pointer;
  position: relative;
}

details[open] summary~* {
  animation: sweep 0.5s ease-in-out;
}

@keyframes sweep {
  0% {
    opacity: 0;
    margin-top: -10px;
  }

  100% {
    opacity: 1;
    margin-top: 0px;
  }
}

details>summary::after {
  position: absolute;
  content: "+";
  right: 20px;
}

details[open]>summary::after {
  position: absolute;
  content: "-";
  right: 20px;
}

details>summary::-webkit-details-marker {
  display: none;
}

</style>
