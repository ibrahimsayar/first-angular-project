import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    public myForm: FormGroup;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.myForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    onSubmit(form: FormGroup) {
        if (!this.myForm.valid) {
            return;
        }
        console.log(this.myForm.value);
    }
}
