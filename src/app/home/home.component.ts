import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
type CipherMethods = 'cesar' | 'escitala' | 'triple-des' | 'ecc' | 'hash'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  isModalOpen: boolean = false; 
  selectedMethod: { title: string, description: string } | null = null;

  openModal(method: CipherMethods) {

    const methods: { [key in CipherMethods]: { title: string, description: string } } = {
      cesar: { title: 'Cifrado César', description: 'El cifrado César es uno de los métodos de cifrado por sustitución más antiguos, utilizado por Julio César para enviar mensajes confidenciales a sus generales. Consiste en desplazar cada letra del texto original un número fijo de posiciones en el alfabeto.' },
      escitala: { title: 'Cifrado Escítala', description: 'El cifrado Escítala es un antiguo método de transposición utilizado por los griegos y espartanos para transmitir mensajes de manera segura. Este cifrado se basa en una herramienta física: una varilla o cilindro llamado "escítala", en la que se enrolla una tira de cuero o pergamino con el mensaje escrito de forma continua. Al desenrollar la tira, el mensaje quedaba ilegible a menos que se volviera a enrollar en una escítala del mismo diámetro.' },
      'triple-des': {
        title: 'Cifrado 3DES', description: '3DES (Triple DES) es una versión mejorada del algoritmo DES, diseñado para proporcionar mayor seguridad. Emplea tres claves diferentes para realizar múltiples operaciones de cifrado y descifrado, lo que incrementa la robustez del sistema de seguridad. El proceso de cifrado en 3DES implica tres fases diferentes, que aseguran la integridad de los datos:  Primero, se cifra el mensaje utilizando una primera clave. Luego, se descifra el mensaje cifrado con una segunda clave. Finalmente, se vuelve a cifrar el resultado con una tercera clave.'
      },
      ecc: { title: 'Cifrado ECC', description: 'La Criptografía de Curva Elíptica (ECC) es un tipo de criptografía asimétrica. Esto significa que utiliza dos claves diferentes: una clave pública para cifrar datos y una clave privada para descifrarlos. ECC utiliza ecuaciones matemáticas basadas en curvas elípticas para generar las claves. Estas curvas son formas especiales en un plano que permiten realizar operaciones matemáticas de forma eficiente para cifrar y descifrar información.' },
      hash: { title: 'Hash SHA-2', description: 'SHA-2 (Secure Hash Algorithm 2) es una familia de funciones hash criptográficas utilizadas para generar un resumen de longitud fija a partir de un mensaje de longitud variable. Estas funciones son fundamentales para la seguridad informática, ya que permiten verificar la integridad de los datos y son ampliamente utilizadas en aplicaciones de firma digital, autenticación y protección de datos.' }
    };

    this.selectedMethod = methods[method];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedMethod = null;
  }
}
