import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-triple-des-cipher',
  standalone: true, // Componente standalone
  imports: [CommonModule, FormsModule], // Importamos CommonModule y FormsModule aquí
  templateUrl: './triple-des-cipher.component.html',
  styleUrls: ['./triple-des-cipher.component.css']
})
export class TripleDesCipherComponent {
  text: string = '';
  result: string = '';
  secretKey: string = 'TuClaveSecreta'; // Cambia esto a una clave segura.

  // Cifrar el texto usando 3DES
  cipherWith3DES() {
    const cipherText = CryptoJS.TripleDES.encrypt(this.text, this.secretKey).toString();
    this.result = cipherText;
  }

  // Descifrar el texto usando 3DES
  decipherWith3DES() {
    const bytes = CryptoJS.TripleDES.decrypt(this.result, this.secretKey);
    this.result = bytes.toString(CryptoJS.enc.Utf8);
  }
}
