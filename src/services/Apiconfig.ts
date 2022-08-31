/**
 * This is base URL for api call
 */


export var BASE_URL = "";
export var CHECKVPN = "";
export var CRYPTO_SECRET = "";
export var SOCKET_URL = "";
export var BASE_PATH = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    BASE_URL = "http://localhost:8080/api/";
    CRYPTO_SECRET = "I_LOVE_DOCTOR_APP";
    SOCKET_URL = "http://localhost:8080";
    BASE_PATH = "http://localhost:3000/";

} else {
    BASE_URL = "https://bw-petrolpump-node-ryraq.ondigitalocean.app/api/";
    CRYPTO_SECRET = "ss71AUVotev5geHS";
    SOCKET_URL = "https://bw-petrolpump-node-ryraq.ondigitalocean.app/";
    BASE_PATH = "https://https://master.drcm5puwh59ip.amplifyapp.com/";
}


/**
 * Basic URLs
 */

export const LOGIN_URL = BASE_URL + "authenticate";
export const LOGOUT_URL = BASE_URL + "session/USER_ID/logout";

// export const RELOAD_BACKGROUND = "https://source.unsplash.com/random/"+document.body.clientWidth+"x"+document.body.clientHeight;
export const RELOAD_BACKGROUND = "https://source.unsplash.com/random/" + document.body.clientWidth + "x" + document.body.clientHeight + "/?wildlife,natural,city,car,nature,Fruits,food,table,water,plant,tree,animals,forest,road,cup,architecture,aerial"
// export const VPN_CONNECTION ="https://api.ipdata.co?api-key=82537d89fc8d2eeb8e021fa690a7921e9b49c8475ac2cb0e293651dd";
export const VPN_CONNECTION = "https://api.ipdata.co?api-key=302dfe833304031a8b463b68570efb291ec71bed37e1a87cafa96f0c";