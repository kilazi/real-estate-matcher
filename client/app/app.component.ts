import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
declare const ymaps: any;
declare const YMaps: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public auth: AuthService) {
    // ymaps.load(["regions", "metro"], () => { console.log('YMap modules loaded'); });
  }

}
