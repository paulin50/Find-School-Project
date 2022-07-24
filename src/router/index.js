import { createRouter, createWebHashHistory } from "vue-router";
import Acceuil from "../components/Acceuil"
import Contact from "../components/Contact.vue";
import Etablissement from "../components/Etablissement.vue";
import Information from "../components/Information.vue";
import Inscription from "../components/Inscription.vue";
import Jardin from "../components/Jardin.vue";
import Primaire from "../components/Primaire.vue";
import College from "../components/College.vue";
import Lycee from "../components/Lycee.vue";
import Universite from "../components/Universite.vue";
import Commentcamarche from "../components/Commentcamarche.vue";
import FAQ from "../components/FAQ.vue";
import Temoignage from "../components/Temoignage.vue";
import About from "../components/About.vue";
import Tarif from "../components/Tarif.vue";
import Moyendepaiement from "../components/Moyendepaiement.vue";
import Blog from "../components/Blog.vue";
import AllUniversite from "../components/AllUniversite";
import Politiquedeconfidentialite from "../components/Politiquedeconfidentialite.vue";
import Conditionsgeneraleutilisation from "../components/Conditionsgeneraleutilisation.vue";
import Droitauteur from "../components/Droitauteur.vue";
import Limitationsderesponsabilite from "../components/Limitationsderesponsabilite.vue";
import Collegedet from "../components/Collegedet";
import Lyceedet from "../components/Lyceedet";
import ContentSection from "../components/ContentSection";
import Images from "../components/Images";
import Structurel from "../components/Structurel";
import Academique from "../components/Academique";
import Enseignant from "../components/Enseignant";
import Actualite from "../components/Actualite";
import UnivDetails from "../components/UnivDetails";
import JardinList from "../components/JardinList";
import PrimaireList from "../components/PrimaireList";
import Jardindetails from "../components/Jardindetails";


const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Acceuil,
  },
  {
    path: "/etablissements",
    name: "Etablissement",
    component: Etablissement,
  },
  
  {
    path: "/information",
    name: "Information",
    component: Information,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/connexion",
    name: "Login",

    component: () => import("../views/Login.vue"),
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: Inscription,
  },
  {
    path: "/jardin",
    name: "Jardin",
    component: Jardin,
  },
  {
    path: "/primaire",
    name: "Primaire",
    component: Primaire,
  },
  {
    path: "/college",
    name: "College",
    component: College,
  },
  {
    path: '/collegedetails',
    name: 'collededet',
    component: Collegedet
  },
  ,
  {
    path: "/univdetails",
    name: "univdetails",
    component: UnivDetails,
  },
  {
    path: "/lycee",
    name: "Lycee",
    component: Lycee,
  },
  {
    path: "/jardinlist",
    name: "jardinlist",
    component: JardinList,
  },
  {
    path: "/primairelist",
    name: "primairelist",
    component: PrimaireList,
  },
  {
    path: "/jpdetails",
    name: "jpdetails",
    component: Jardindetails,
  },
  {
    path: '/lyceedetails',
    name: 'Lyceedet',
    component: Lyceedet
  },
  {
    path: "/universite",
    name: "Universite",
    component: Universite,
  },
  {
    path: "/alluniversite",
    name: "AllUniversite",
    component: AllUniversite,
  },
  {
    path: "/commentcamarche",
    name: "Commentcamarche",
    component: Commentcamarche,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/politiquedeconfidentialite",
    name: "Politiquedeconfidentialite",
    component: Politiquedeconfidentialite,
  },
  {
    path: "/conditionsgeneraleutilisation",
    name: "Conditionsgeneraleutilisation",
    component: Conditionsgeneraleutilisation,
  },
  {
    path: "/droitauteur",
    name: "Droitauteur",
    component: Droitauteur,
  },
  {
    path: '/generalites',
    name: 'generalites',
    component: ContentSection,
  },
  ,
  {
    path: '/structurel',
    name: 'structurel',
    component: Structurel
  },
  {
    path: '/actualite',
    name: 'actualite',
    component: Actualite
  },

  {
    path: '/Enseignant',
    name: 'Enseignant',
    component: Enseignant
  },

  {
    path: '/Images',
    name: 'Images',
    component: Images
  },

  {
    path: '/academique',
    name: 'academique',
    component: Academique
  },

  {
    path: "/limitationsderesponsabilite",
    name: "Limitationsderesponsabilite",
    component: Limitationsderesponsabilite,
  },
  {
    path: "/temoignage",
    name: "Temoignage",
    component: Temoignage,
  },
  {
    path: "/tarif",
    name: "Tarif",
    component: Tarif,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/moyendepaiement",
    name: "Moyendepaiement",
    component: Moyendepaiement,
  },
  {
    path: "/About",
    name: "about",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
