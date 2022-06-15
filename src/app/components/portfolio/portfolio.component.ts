import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    public portfolio: any;

    constructor(
        private apiService: ApiService
    ) {
    }

    ngOnInit(): void {
        this.getPortfolio();
    }

    getPortfolio() {
        this.apiService.getPortfolio()
            .subscribe(res => {
                this.portfolio = res;
            });
    }
}
