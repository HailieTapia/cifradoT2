import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-sha2-hash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent {
  text: string = ''; 
  variant: string = 'SHA-256'; 
  hashResult: string = ''; 
  errorMessage: string = ''; 

  generateHash() {
    this.errorMessage = ''; 
    if (!this.text) {
      this.errorMessage = 'Por favor, introduzca el texto a codificar.';
      return; 
    }

    switch (this.variant) {
      case 'SHA-224':
        this.hashResult = CryptoJS.SHA224(this.text).toString(CryptoJS.enc.Hex);
        break;
      case 'SHA-256':
        this.hashResult = CryptoJS.SHA256(this.text).toString(CryptoJS.enc.Hex);
        break;
      case 'SHA-384':
        this.hashResult = CryptoJS.SHA384(this.text).toString(CryptoJS.enc.Hex);
        break;
      case 'SHA-512':
        this.hashResult = CryptoJS.SHA512(this.text).toString(CryptoJS.enc.Hex);
        break;
      default:
        this.errorMessage = 'Invalid hash variant selected.';
    }
  }
}
