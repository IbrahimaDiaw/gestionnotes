import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEtudiantPage } from './edit-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: EditEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEtudiantPageRoutingModule {}
