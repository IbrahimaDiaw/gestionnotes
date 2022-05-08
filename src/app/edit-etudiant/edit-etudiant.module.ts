import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditEtudiantPageRoutingModule } from './edit-etudiant-routing.module';

import { EditEtudiantPage } from './edit-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditEtudiantPageRoutingModule
  ],
  declarations: [EditEtudiantPage]
})
export class EditEtudiantPageModule {}
