import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as CryptoJS from 'crypto-js'; // Importar la librería CryptoJS

@Component({
  selector: 'app-sha2-hash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.css']
})
export class HashComponent {
  text: string = ''; // Texto a hashear
  variant: string = 'SHA-256'; // Variante de SHA por defecto
  hashResult: string = ''; // Resultado del hash

  // Método para generar el hash basado en la variante seleccionada
  generateHash() {
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
        this.hashResult = '';
    }
  }
}
