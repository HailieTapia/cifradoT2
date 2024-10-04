import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// @ts-ignore
import * as EC from 'elliptic';

@Component({
  selector: 'app-ecc-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ecc-cipher.component.html',
  styleUrls: ['./ecc-cipher.component.css']
})
export class EccCipherComponent {
  text: string = '';
  result: string = '';
  privateKey: any;
  publicKey: any;
  encryptedMessage: string = '';
  decryptedMessage: string = '';
  errorMessage: string = '';

  constructor() {
    // Crear una nueva curva elíptica (la misma usada en Bitcoin)
    const ec = new EC.ec('secp256k1');

    const keyPair = ec.genKeyPair();
    this.privateKey = keyPair.getPrivate('hex');
    this.publicKey = keyPair.getPublic('hex');
  }

  cipherWithECC() {
    this.validateInput(); 
    if (!this.errorMessage) {
      const ec = new EC.ec('secp256k1');
      const keyPair = ec.keyFromPrivate(this.privateKey);
      
      try {
        const encrypted = keyPair.sign(this.text).toDER('hex'); // Firmamos el mensaje
        this.encryptedMessage = encrypted;
        this.errorMessage = ''; 
      } catch (error) {
        this.errorMessage = 'Error durante el cifrado: ' ;
      }
    }
  }

  decipherWithECC() {
    this.validateInput(); 
    if (!this.errorMessage && this.encryptedMessage) {
      const ec = new EC.ec('secp256k1');
      const pubKey = ec.keyFromPublic(this.publicKey, 'hex');

      const isValid = pubKey.verify(this.text, this.encryptedMessage);
      this.decryptedMessage = isValid ? 'Firma válida' : 'Firma no válida';
      this.errorMessage = '';
    } else if (!this.encryptedMessage) {
      this.errorMessage = 'No hay mensaje cifrado para verificar.';
    }
  }

  private validateInput() {
    this.errorMessage = '';
    if (!this.text) {
      this.errorMessage = 'El texto no puede estar vacío.';
    }
  }
}
