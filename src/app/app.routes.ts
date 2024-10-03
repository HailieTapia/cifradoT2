//cómo moverse entre las diferentes páginas.
import { Routes } from '@angular/router';
import { CesarCipherComponent } from './cesar-cipher/cesar-cipher.component';
import { EscitalaCipherComponent } from './escitala-cipher/escitala-cipher.component';
import { TripleDesCipherComponent } from './triple-des-cipher/triple-des-cipher.component';
import { EccCipherComponent } from './ecc-cipher/ecc-cipher.component'; 
import { HashComponent } from './hash/hash.component'; 
import { HomeComponent } from './home/home.component'; 

export const appRoutes: Routes = [
  { path: 'cesar-cipher', component: CesarCipherComponent },
  { path: 'escitala-cipher', component: EscitalaCipherComponent },
  { path: 'triple-des-cipher', component: TripleDesCipherComponent }, 
  { path: 'ecc-cipher', component: EccCipherComponent },
  { path: 'hash', component: HashComponent },
  { path: '', component: HomeComponent } 
];
