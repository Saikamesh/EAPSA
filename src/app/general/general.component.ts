import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css',
})
export class GeneralComponent {
  constructor(private readonly router: Router) {}

  dataFields = {
    department: 'What department do you work in?',
    age: 'What is your age?',
    gender: 'What is your gender?',
    maritalStatus: 'What is your marital status?',
    education: 'What is your highest level of education?',
    travelTime: 'How long does it take you to get to work? (in hours)',
    travelDistance: 'How far do you travel to work? (in miles)',
    workingHours: 'How many hours do you work per day?',
    perHourWage: 'What is your hourly wage? (in dollars)',
  };

  generalForm = new FormGroup({
    department: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(80)]),
    gender: new FormControl('', [Validators.required]),
    maritalStatus: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    travelTime: new FormControl('', [Validators.required]),
    travelDistance: new FormControl('', [Validators.required]),
    workingHours: new FormControl('', [Validators.required, Validators.max(16)]),
    perHourWage: new FormControl('', [Validators.required, Validators.max(250)]),
  });

  onSubmit() {
    this.generalForm.valid ? this.router.navigate(['/work']) : alert('Please fill out all fields');
    console.log(this.generalForm.value);
  }
}
