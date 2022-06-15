import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {WhoWeAreComponent} from "./components/who-we-are/who-we-are.component";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {CareerComponent} from "./components/career/career.component";
import {ContactComponent} from "./components/contact/contact.component";
import {TeamComponent} from "./components/team/team.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'who-are-we',
        component: WhoWeAreComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'career',
        component: CareerComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
