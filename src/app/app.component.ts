import { Component } from '@angular/core';
import { BodyModule } from './body/body.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { RouterOutlet } from '@angular/router';
import { PreFooterModule } from './prefooter/prefooter.module';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [BodyModule, HeaderModule, FooterModule, RouterOutlet, PreFooterModule]
})
export class AppComponent {
  title = 'testMockup';
}
