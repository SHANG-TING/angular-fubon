import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <mat-form-field>
      <input
        matInput
        [matDatepicker]="start_dp"
        placeholder="Verbose datepicker"
        [formControl]="startDate"
      />
      <mat-datepicker-toggle matSuffix [for]="start_dp"></mat-datepicker-toggle>
      <mat-datepicker #start_dp></mat-datepicker>
    </mat-form-field>

    <!-- <mat-form-field>
      <input
        matInput
        [matDatepicker]="end_dp"
        placeholder="Verbose datepicker"
        [formControl]="endDate"
      />
      <mat-datepicker-toggle matSuffix [for]="end_dp"></mat-datepicker-toggle>
      <mat-datepicker #end_dp></mat-datepicker>
    </mat-form-field> -->

    <pre>{{ startDate.value | date: 'yyyy-MM-dd HH:mm:ss' }}</pre>
    <!-- <pre>{{ endDate.value | date: 'yyyy-MM-dd HH:mm:ss' }}</pre> -->

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date(2025, 11, 31));
}
