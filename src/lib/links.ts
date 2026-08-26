/**
 * Liens sortants vers le dashboard.
 *
 * Ces URL etaient auparavant ecrites en dur, sept fois, sur
 * `http://localhost:3002` : en production les boutons « Se connecter » et
 * « Demarrer gratuitement » renvoyaient donc le visiteur vers un port de sa
 * propre machine. Un seul point de verite evite que ca se reproduise.
 *
 * La valeur par defaut est celle de la PRODUCTION, volontairement : c'est le
 * defaut qui part en ligne si la variable manque, et un defaut de dev est
 * exactement ce qui a cause la panne. En local, poser
 * NEXT_PUBLIC_APP_URL=http://localhost:3002 dans `.env.local`.
 *
 * NEXT_PUBLIC_* est inline au BUILD par Next : changer l'URL impose de
 * reconstruire l'image, un simple redemarrage ne suffit pas.
 */
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://app.getbuildr.fr";

export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;
