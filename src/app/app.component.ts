import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumSchedulerComponent } from '@bryntum/scheduler-angular';
import { SchedulerConfig } from '@bryntum/scheduler';

const schedulerConfig: Partial<SchedulerConfig> = {
  viewPreset: 'hourAndDay',
  startDate: new Date(2024, 2, 20, 6),
  endDate: new Date(2024, 2, 20, 20),
  crudManager: {
    loadUrl: '/assets/data.json',
    autoLoad: true,
  },
  columns: [
    { text: 'Name', field: 'name', width: 130 },
    { text: 'Age', field: 'age', width: 75 },
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  schedulerConfig = schedulerConfig;
  @ViewChild('scheduler') schedulerComponent!: BryntumSchedulerComponent;
}
