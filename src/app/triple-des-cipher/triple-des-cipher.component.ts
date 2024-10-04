import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Ensure CommonModule is imported
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-triple-des-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule is listed here
  templateUrl: './triple-des-cipher.component.html',
  styleUrls: ['./triple-des-cipher.component.css']
})
export class TripleDesCipherComponent {
  text: string = ''; // Text to encrypt or decrypt
  key: string = ''; // Encryption key
  encryptedMessage: string = ''; // Encrypted message
  decryptedMessage: string = ''; // Decrypted message
  errorMessage: string = ''; // Error message for user feedback

  // Method to encrypt the text
  cipher() {
    this.errorMessage = ''; // Reset previous error message
    if (this.key.length !== 24) {
      this.errorMessage = 'La clave debe tener exactamente 24 caracteres.';
      return;
    }
    this.encryptedMessage = CryptoJS.TripleDES.encrypt(this.text, this.key).toString();
  }

  // Method to decrypt the text
  decipher() {
    this.errorMessage = ''; // Reset previous error message
    if (!this.encryptedMessage) {
      this.errorMessage = 'No hay mensaje cifrado para descifrar.';
      return;
    }
    if (this.key.length !== 24) {
      this.errorMessage = 'La clave debe tener exactamente 24 caracteres.';
      return;
    }
    const bytes = CryptoJS.TripleDES.decrypt(this.encryptedMessage, this.key);
    this.decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);
    if (!this.decryptedMessage) {
      this.errorMessage = 'Error: Unable to decrypt. Check your key and encrypted message.';
    }
  }

  // Method to generate a random key of the specified length
  generateRandomKey(length: number = 24): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      key += charset[randomIndex];
    }
    return key;
  }

  // Method to set a random key
  setRandomKey() {
    this.key = this.generateRandomKey();
  }
}
