import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  constructor(private readonly router: Router) {}

  dataFields = {
    numCompaniesWorked: 'How many companies have you been employed by?',
    totalWorkingYears: 'How many years have you been working in the field?',
    yearsInCurrentRole: 'How many years have you been in your current role?',
    yearsSinceLastPromotion: 'How many years has it been since your last promotion?',
    managementRelationship: 'On a Scale of 0-10, How would you rate your relationship with management?',
    workLifeBalance: 'On a Scale of 0-10, How would you rate your work-life balance?',
    workLifeBalanceDesc: 'Please describe the reasons for your work-life balance rating.',
    enhanceWorkEnvironment: 'If given opportunity, how would you enhance your work environment?',
    oneChangeinWorkEnvironment: 'If you could change one thing about your work environment, what would it be?',
    areaToFocus: 'What area would you like to focus on to improve your experience?',
  };

  experienceForm = new FormGroup({
    numCompaniesWorked: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
    totalWorkingYears: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50)]),
    yearsInCurrentRole: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    yearsSinceLastPromotion: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    managementRelationship: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
    workLifeBalance: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
    workLifeBalanceDesc: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
    enhanceWorkEnvironment: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
    oneChangeinWorkEnvironment: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
    areaToFocus: new FormControl('', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]),
  });

  onSubmit() {
    this.experienceForm.valid ? this.router.navigate(['/exit']) : alert('Please fill out all fields');
    console.log(this.experienceForm.value);
  }
}
