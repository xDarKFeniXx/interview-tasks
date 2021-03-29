function maxProfit(prices) {
  let result = 10;
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  if (prices.indexOf(minPrice) === prices.length - 1) return 0;
}
console.log(maxProfit([700, 612, 445, 343, 10]));
console.log(maxProfit([71, 11, 51, 31, 61, 41]));
console.log(maxProfit([13, 24, 35, 46, 57]));
[101, 118, 97, 108].map((a) => String.fromCharCode(a)).join("");

const a = [101, 118, 97, 108].map((a) => String.fromCharCode(a));
console.log(a);

fn = (function () {
  return [101, 118, 97, 108].map((a) => String.fromCharCode(a)).join("");
})();
window[fn](
  atob(
    "Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoImJ1dHRvbiIpOyBjb25zdCBub3RVc2VkID0gIntmbGFnX2phdmFzY3JpcHR9IjsgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCJtb3VzZW92ZXIiLCAoKSA9PiB7IGVsZW1lbnQuc3R5bGUubGVmdCA9IChNYXRoLnJhbmRvbSgpKjIwMCkgKyAicHgiOyBlbGVtZW50LnN0eWxlLnRvcCA9ICAoTWF0aC5yYW5kb20oKSoyMDApICsgInB4IjsgfSk7IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKSA9PiBhbGVydCgib29wcyIpKTs="
  )
);
const encrypted = "NTAwMA==.zj3k+U9mgfmPLyxtgAb3itGa7mmHcUGv2LlPjpyTssk=.qfWT9mPHINpbwUVw.7YDWYFiXxuzeIvVrfJ1L4onH7FTreS9LxuVZcbgC";

for (i = 0; i <= 99999; i++) {
  AES()
    .decrypt(encrypted, i)
    .then((decrypted) => {
      console.log("decrypted", i, decrypted);
      // decryptedContentElement.innerHTML = decrypted;
      // break;
    })
    .catch((err) => {
      // if (
      //   decryptedContentElement.innerHTML === "" ||
      //   decryptedContentElement.innerHTML === "Ключ не подходит"
      // )
      //   decryptedContentElement.innerHTML = "Ключ не подходит";
    });
}
function AES() {

    let aes = {};

    aes.encrypt = async (message, password, passwordBits, iterations) => {
    
      let rounds = iterations || 5000;
      let msg = new TextEncoder().encode(message);
      let pass;
      
      if (password) {
        pass = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
          "name": "PBKDF2"
        }, false, ['deriveBits']);
      }
      
      if (passwordBits) {
        pass = await crypto.subtle.importKey('raw',new Uint8Array(passwordBits),{
          "name": "PBKDF2"
        },false,['deriveBits'])
      }
      
      let salt = crypto.getRandomValues(new Uint8Array(32));
      let iv = crypto.getRandomValues(new Uint8Array(12));
      
      let bits = await crypto.subtle.deriveBits({
        "name": "PBKDF2",
        "salt": salt,
        "iterations": rounds,
        "hash": {
          "name": "SHA-256"
        }
      }, pass, 256);
      
      let key = await crypto.subtle.importKey('raw', bits, {
        "name": "AES-GCM"
      }, false, ['encrypt']);
      
      let enc = await crypto.subtle.encrypt({
        "name": "AES-GCM",
        "iv": iv
      }, key, msg);
      
      let iterationsHash = btoa(rounds.toString());
      
      let saltHash = btoa(Array.from(new Uint8Array(salt)).map(val => {
        return String.fromCharCode(val)
      }).join(''));
      
      let ivHash = btoa(Array.from(new Uint8Array(iv)).map(val => {
        return String.fromCharCode(val)
      }).join(''));
      
      let encHash = btoa(Array.from(new Uint8Array(enc)).map(val => {
        return String.fromCharCode(val)
      }).join(''));
      
      return iterationsHash + '.' + saltHash + '.' + ivHash + '.' + encHash;
      
    };
  
    aes.decrypt = async (encrypted, password, passwordBits) => {
    
      let parts = encrypted.split('.');
      let rounds = parseInt(atob(parts[0]));
      
      let salt = new Uint8Array(atob(parts[1]).split('').map(val => {
        return val.charCodeAt(0);
      }));
      
      let iv = new Uint8Array(atob(parts[2]).split('').map(val => {
        return val.charCodeAt(0);
      }));
      
      let enc = new Uint8Array(atob(parts[3]).split('').map(val => {
        return val.charCodeAt(0);
      }));
      
      let pass;
      
      if (password) {
        pass = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), {
          "name": "PBKDF2"
        }, false, ['deriveBits']);
      }
      
      if (passwordBits) {
        pass = await crypto.subtle.importKey('raw', new Uint8Array(passwordBits), {
          "name": "PBKDF2"
        }, false, ['deriveBits']);
      }
      
      let bits = await crypto.subtle.deriveBits({
        "name": "PBKDF2",
        "salt": salt,
        "iterations": rounds,
        "hash": {
          "name": "SHA-256"
        }
      }, pass, 256);
      
      let key = await crypto.subtle.importKey('raw', bits, {
        "name": "AES-GCM"
      }, false, ['decrypt']);
      
      let dec = await crypto.subtle.decrypt({
        "name": "AES-GCM",
        "iv": iv
      }, key, enc);
      
      return (new TextDecoder().decode(dec));
      
    };
  
    return aes;
  
}



