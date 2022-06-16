import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {WhoWeAreComponent} from './components/who-we-are/who-we-are.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {TeamComponent} from './components/team/team.component';
import {CareerComponent} from './components/career/career.component';
import {ContactComponent} from './components/contact/contact.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        WhoWeAreComponent,
        PortfolioComponent,
        TeamComponent,
        CareerComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        LazyLoadImageModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
