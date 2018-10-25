/************************************************************************
  Font Awesome 5 SVG Icons
  Based on https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs
*************************************************************************/

// need this for the plugin to work
import Vue from 'vue'
// import core SVG icons
import { library } from '@fortawesome/fontawesome-svg-core'

/*******************************************************************
  👉  Import the icons you want to use from the appropriate set,
  then add them to the library.
  You have to add each icon twice for it to work.
  Use camelCase instead of kebab-case, and list alphabetically.
********************************************************************/

// free SOLID icon set (fas)
// @https://fontawesome.com/icons?d=gallery&s=solid&m=free
import {
  faCode,
  faCoffee,
  faHourglassHalf
} from '@fortawesome/free-solid-svg-icons'

library.add(faCode, faCoffee, faHourglassHalf)

// free BRANDS icon set (fab)
// https://fontawesome.com/icons?d=gallery&s=brands&m=free
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter)

/**************************************************************************
  👉  To use font awesome icons in components, once they are registered here:
    <font-awesome-icon :icon="['fas', 'code']" />
    <font-awesome-icon :icon="['fab', 'twitter']" />

  The first argument is the set (fas or fab) and the second argument is
  the name of the icon without 'fa'.

  No need to import the font-awesome-icon component; it's globally imported!
***************************************************************************/

// Import and globally register a component called font-awesome-icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
