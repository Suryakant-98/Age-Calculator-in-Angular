import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  birthDate: string | null = null;
  age: number | null = null;
  
  calculateAge() {
    if (this.birthDate) {
      const today = new Date();
      const dob = new Date(this.birthDate);
      const diff = today.getTime() - dob.getTime();
      const ageDate = new Date(diff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      this.age = calculatedAge;
    }
  }
}

