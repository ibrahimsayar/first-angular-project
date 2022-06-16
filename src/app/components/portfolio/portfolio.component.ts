import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

    public portfolio: any = [];

    public defaultImage: string = 'https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif';
    public image: string = 'https://picsum.photos/1000/1000?random=';

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
