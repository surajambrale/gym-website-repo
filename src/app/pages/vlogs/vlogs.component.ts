import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../safe-url.pipe';

@Component({
  selector: 'app-vlogs',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './vlogs.component.html',
  styleUrl: './vlogs.component.scss'
})
export class VlogsComponent {
  vlogs = [
    {
      title: 'Full Body Fat Burn Routine',
      description: 'A killer fat-burn workout you can do at home or gym!',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      comingSoon: true
    },
    // {
    //   title: 'Shoulder Workout',
    //   description: 'Build strong delts with this gym routine.',
    //   videoUrl: 'https://www.youtube.com/embed/some_other_id',
    //   comingSoon: false
    // }
  ];
}
