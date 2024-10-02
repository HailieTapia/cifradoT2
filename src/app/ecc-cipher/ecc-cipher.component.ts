import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// @ts-ignore
import * as EC from 'elliptic';

@Component({
  selector: 'app-ecc-cipher',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos CommonModule y FormsModule
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

  constructor() {
    // Crear una nueva curva elíptica (usamos 'secp256k1', la misma usada en Bitcoin, pero puedes elegir otra)
    const ec = new EC.ec('secp256k1');
    
    // Generar claves públicas y privadas
    const keyPair = ec.genKeyPair();
    this.privateKey = keyPair.getPrivate('hex');
    this.publicKey = keyPair.getPublic('hex');
  }

  // Cifrar el texto usando ECC
  cipherWithECC() {
    const ec = new EC.ec('secp256k1');
    const keyPair = ec.keyFromPrivate(this.privateKey);
    const pubKey = ec.keyFromPublic(this.publicKey, 'hex');

    const encrypted = keyPair.sign(this.text).toDER('hex'); // Firmamos el mensaje
    this.encryptedMessage = encrypted;
  }

  // Descifrar el texto usando ECC
  decipherWithECC() {
    const ec = new EC.ec('secp256k1');
    const keyPair = ec.keyFromPrivate(this.privateKey);
    const pubKey = ec.keyFromPublic(this.publicKey, 'hex');

    // Verificar el mensaje firmado
    const isValid = pubKey.verify(this.text, this.encryptedMessage);
    this.decryptedMessage = isValid ? 'Firma válida' : 'Firma no válida';
  }
}
