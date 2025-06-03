import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component'

export const routes: Routes = [
    {path:'footer.component' , component : FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // <<< Aqui o RouterModule entra
  exports: [RouterModule]
})
export class AppRoutingModule {}