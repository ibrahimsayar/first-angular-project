import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

    public employees: any = [];
    public defaultImage: string = 'https://xsgames.co/randomusers/avatar.php?g=pixel';
    public team: any;
    public errorImage: string = 'https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png';

    constructor(
        private apiService: ApiService
    ) {
    }

    ngOnInit(): void {
        this.getEmployees();
        this.getHuman();
    }

    getEmployees() {
        this.apiService.getPortfolio()
            .subscribe(res => {
                this.employees = res;
            })
    }

    getHuman() {
        this.apiService.getHuman()
            .subscribe(res => {
                this.team = res;
            });
    }
}
