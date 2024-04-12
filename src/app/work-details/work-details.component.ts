import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-work-details',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
  templateUrl: './work-details.component.html',
  styleUrl: './work-details.component.css',
})
export class WorkDetailsComponent {
  constructor(private readonly router: Router) {}

  dataFields = {
    monthlyIncome: 'What is your monthly income?',
    salaryHikePercent: 'What percentage of a salary hike did you receive last year?',
    standardHours: 'How many hours are you entitled to work per week?',
    overTime: 'Do you work overtime?',
    overTimeHours: 'How many hours of overtime do you work per week?',
    jobInvolvement: 'On a Scale of 0-10, How involved are you in your job?',
    jobInvolvementDesc: 'Please describe the reasons for your job involvement rating.',
    jobSatisfaction: 'On a Scale of 0-10, How satisfied are you with your job?',
    jobSatisfactionDesc: 'Please describe the reasons for your job satisfaction rating.',
    environmentSatisfaction: 'On a Scale of 0-10, How satisfied are you with your work environment?',
    environmentSatisfactionDesc: 'Please describe the reasons for your work environment satisfaction rating.',
    yearsAtCompany: 'How many years have you been with your current organization?',
  };

  workForm = new FormGroup({
    monthlyIncome: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    salaryHikePercent: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    standardHours: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(0),
      Validators.max(100),
    ]),
    overTime: new FormControl('', [Validators.required]),
    overTimeHours: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    jobInvolvement: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
    jobInvolvementDesc: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
    jobSatisfaction: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
    jobSatisfactionDesc: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
    environmentSatisfaction: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
    environmentSatisfactionDesc: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
    yearsAtCompany: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50)]),
  });

  onSubmit() {
    this.workForm.valid ? this.router.navigate(['/experience']) : alert('Please fill out all fields');
    console.log(this.workForm.value);
  }
}
