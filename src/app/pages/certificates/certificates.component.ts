import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificateComponent {

  certificates = [
    {
      title: 'Nutritionist',
      image: 'assets/images/certi-nutrition.jpg'
    },
    {
      title: 'Fitness Coach',
      image: 'assets/images/certi-fitnessCoach.jpg'
    }
  ];

}
