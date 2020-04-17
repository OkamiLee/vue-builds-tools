/*账号密码加密模块*/
import CryptoJS from "crypto-js";
/*
* 加密 解密
* */
export default {
  // 加密
  encrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : "absoietlj32fai12";
    ivStr = ivStr ? ivStr : "absoietlj32fai12";
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);

    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
  },
  // 解密
  decrypt(word, keyStr, ivStr) {
    keyStr = keyStr ? keyStr : "absoietlj32fai12";
    ivStr = ivStr ? ivStr : "absoietlj32fai12";
    var key = CryptoJS.enc.Utf8.parse(keyStr);
    let iv = CryptoJS.enc.Utf8.parse(ivStr);

    var decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
  }
};
