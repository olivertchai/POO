import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
@Component({
  selector: 'app-root', 
  imports: [RouterOutlet , FooterComponent , SearchBarComponent , SubscribeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'criticas-de-filmes';
}
