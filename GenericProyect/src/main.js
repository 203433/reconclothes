
import { createApp } from 'vue'
import App from './Entrada.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiCorn, BiGraphUp, MdMailoutlineTwotone, BiFacebook, CoWhatsapp, BiInstagram, BiLinkedin, BiTelephoneFill, IoLocationSharp, MdEmail, BiClockFill } from "oh-vue-icons/icons";
addIcons(GiCorn, BiGraphUp, MdMailoutlineTwotone, BiFacebook, CoWhatsapp, BiInstagram, BiLinkedin, BiTelephoneFill, IoLocationSharp, MdEmail, BiClockFill);


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faUserSecret  } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'


import { faTwitter, faFacebook, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBars, faTwitter, faFacebook, faStackOverflow, faGithub, faUser, faUserSecret )
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component("v-icon", OhVueIcon)
.mount('#app')

