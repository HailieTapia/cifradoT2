import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-triple-des-cipher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './triple-des-cipher.component.html',
  styleUrls: ['./triple-des-cipher.component.css']
})
export class TripleDesCipherComponent {
  text: string = '';
  key: string = '';
  encryptedMessage: string = '';
  decryptedMessage: string = '';

  cipher() {
    if (this.key.length !== 24) {
      alert('La clave debe tener exactamente 24 caracteres.');
      return;
    }
    this.encryptedMessage = CryptoJS.TripleDES.encrypt(this.text, this.key).toString();
  }

  decipher() {
    if (this.key.length !== 24) {
      alert('La clave debe tener exactamente 24 caracteres.');
      return;
    }
    const bytes = CryptoJS.TripleDES.decrypt(this.encryptedMessage, this.key);
    this.decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
  }

  generateRandomKey(length: number = 24): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      key += charset[randomIndex];
    }
    return key;
  }

  setRandomKey() {
    this.key = this.generateRandomKey();
  }
}
