import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-triple-des-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './triple-des-cipher.component.html',
  styleUrls: ['./triple-des-cipher.component.css']
})
export class TripleDesCipherComponent {
  text: string = '';     
  result: string = '';    
  key1: string = '';     
  key2: string = '';    
  key3: string = '';       
  errorMessage: string = ''; 

  validateInput(): boolean {
    if (!this.text || !this.key1 || !this.key2 || !this.key3) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return false;
    }

    if (this.key1.length < 8 || this.key2.length < 8 || this.key3.length < 8) {
      this.errorMessage = 'Cada clave debe tener al menos 8 caracteres.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  cipherWith3DES() {
    if (this.validateInput()) {
      const combinedKey = this.key1 + this.key2 + this.key3;
      const cipherText = CryptoJS.TripleDES.encrypt(this.text, combinedKey).toString();
      this.result = cipherText;
    }
  }

  decipherWith3DES() {
    if (this.validateInput()) {
      const combinedKey = this.key1 + this.key2 + this.key3;
      const bytes = CryptoJS.TripleDES.decrypt(this.result, combinedKey);
      this.result = bytes.toString(CryptoJS.enc.Utf8);
    }
  }
}
