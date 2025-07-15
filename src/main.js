import { createApp } from "vue";
import "./style.css";
import router from "./router";
import App from "./App.vue";
import "@fontsource/bricolage-grotesque/300.css";
import "@fontsource/bricolage-grotesque/400.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faTimes,
  faEnvelope,
  faArrowRight,
  faDownload,
  faCode,
  faPaintBrush,
  faCogs,
  faSun,
  faMoon,
  faPaperPlane,
  faExternalLinkAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faBehance,
  faDribbble,
  faVuejs,
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faBars,
  faTimes,
  faEnvelope,
  faArrowRight,
  faDownload,
  faCode,
  faPaintBrush,
  faCogs,
  faSun,
  faMoon,
  faPaperPlane,
  faExternalLinkAlt,
  faArrowLeft,
  faLinkedin,
  faGithub,
  faTwitter,
  faBehance,
  faDribbble,
  faVuejs,
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faCss3Alt
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
