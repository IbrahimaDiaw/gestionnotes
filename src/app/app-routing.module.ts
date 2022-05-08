import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'new-etudiant',
    loadChildren: () => import('./new-etudiant/new-etudiant.module').then( m => m.NewEtudiantPageModule)
  },
  {
    path: 'edit-etudiant/:id',
    loadChildren: () => import('./edit-etudiant/edit-etudiant.module').then( m => m.EditEtudiantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
