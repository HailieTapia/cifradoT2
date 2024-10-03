import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private secretKey: string = 'TuClaveSecreta'; 

  constructor() { }

  // Método para cifrar usando 3DES
  encrypt3DES(data: string): string {
    const cipherText = CryptoJS.TripleDES.encrypt(data, this.secretKey).toString();
    return cipherText;
  }

  // Método para descifrar usando 3DES
  decrypt3DES(cipherText: string): string {
    const bytes = CryptoJS.TripleDES.decrypt(cipherText, this.secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
}
