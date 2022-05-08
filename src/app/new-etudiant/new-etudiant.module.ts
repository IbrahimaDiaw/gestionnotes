import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEtudiantPageRoutingModule } from './new-etudiant-routing.module';

import { NewEtudiantPage } from './new-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewEtudiantPageRoutingModule
  ],
  declarations: [NewEtudiantPage]
})
export class NewEtudiantPageModule {}
