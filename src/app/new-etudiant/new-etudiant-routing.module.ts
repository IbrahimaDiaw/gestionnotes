import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEtudiantPage } from './new-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: NewEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEtudiantPageRoutingModule {}
