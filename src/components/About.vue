<template>
   <div style="
        background: url(https://bootstrapious.com/i/snippets/sn-static-header/background.jpg);
      " class="jumbotron bg-cover text-white">
      <div class="container py-5 text-center">
        <h1 class="display-4 font-weight-bold">A Propos</h1>
        <p class="font-italic mb-0"></p>
        <!--p class="font-italic">
            <a href="https://bootstrapious.com" class="text-white">
                <u>Bootstrapious</u>
            </a>
        </p-->
        <!--a href="#" role="button" class="btn btn-primary px-5">See All Features</a-->
     </div>
    </div>
    <Section>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../assets/image.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
            width="700" height="400" loading="lazy">
        </div>
        <div class="col-lg-6" id="texte1">
          <h4 class=" fw-bold lh-1 mb-3">Historique </h4>
          <p>Un recruteur de talent a toujours besoin de consulter
            le curriculum vitae (CV) d’un candidat avant de le retenir pour un entretien
            pouvant conduire à une embauche. Ainsi le CV permet de connaitre :
          </p>
          <ul>
            <li>Les informations sur le candidat, </li>
            <li>L’expérience de travail du candidat, </li>
            <li>et tout ce qui englobe ses compétences. </li>
          </ul>
          <p>Malheureusement, tel n’est pas le cas pour des
             parents quand il s’agit de choisir les établissements scolaires
              pour leurs enfants, pas parce qu’ils ne veulent pas s’informer 
              avant de choisir mais parce que les informations nécessaires 
              pouvant permettre de choisir sont quasi inexistantes ou difficile à
               obtenir avec assurance si elles existent. 
          </p>
          <p>En effet, pour ce faire, nos parents choisissent les établissements suivant les critères suivants :</p>
          <ul>
            <li>Proximité de l’établissement, </li>
            <li>Recommandation d’un proche, </li>
            <li>Une quelque réputation non avérée</li>
          </ul>
        <p>Cherchant à résoudre ce problème, cette question a été posée : et s’il existait une plateforme d’information sur lequel les parents et les étudiants pourraient s’informer sur la capacité et les compétences des établissements scolaires avant de faire leur choix.
          </p>

        </div>
      </div>
    </div>

    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse g-5 py-5">
        <div class="col-lg-6" id="texte1">
          <h4 class=" fw-bold lh-1 mb-3">Plateforme Findschola.com </h4>
          <p>La plateforme Findschola.com a été créé en 2021 par la société It Innovation et a été mise en ligne 
            2022 et vient en réponse aux problèmes évoqués.  Le concept est né du constat selon lequel tout parent 
            devrait avoir la possibilité de choisir une école pour ses enfants en se basant sur
            les informations réelles telles que : 
          </p>
          <ul>
            <li>Informations générales sur les établissements (historique, autorisation, agrément des autorités, filières effectives etc.) ; </li>
            <li>Images et vidéos des salles de classe des établissements ;</li>
            <li>Réputation de l’école</li>
            <li>Qualification des enseignants </li>
            <li>Taux de réussite des apprenants aux examens</li>
            <li>Aménagement des salles de classe</li>
            <li>Politique de cadre des apprenants</li>
          </ul>
          <p>Avant la Mise en ligne de cette plat <br>

          </p>
          <p>Nous pensons arriver à la mise en place d’un outil intéressant qui permet aux écoles d’être visibles aux parents qui veulent le meilleures pour garantir une bonne éducation pour leur enfant. </p>
        </div>
          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../assets/image2.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"
            width="700" height="400" loading="lazy">
      </div>
      </div>
     <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">information suprementaire</h1>
        <p>La société It Innovation a été fondée en 2018. Elle est spécialisée 
          dans le développement et la commercialisation des solutions informatiques innovantes. Il s’agit principalement des solution Web, Mobile, Desktop API et autres dans plusieurs secteurs d’activités (Transport, Gestion, santé, Hôtels, Agriculture, Mécanique, Professions libérales, écoles etc…) </p>

      </div>
    </div>
      </div>
    
</Section>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app > div > div > div > div > div.col-10.col-sm-8.col-lg-6 > img{
      max-width: 86%;
}
#hero{
  padding: 100px !important; 
  align-content: center !important;
}
.bd-placeholder-img {
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}


.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

#app > div > section > div:nth-child(2) > div.p-5.mb-4.bg-light.rounded-3 > div > h1{
  color: #00394f;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
#texte1{
  text-align : left;
}

@media (min-width: 992px) {
  .rounded-lg-3 {
    border-radius: .3rem;
  }
}
</style>
