import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'dashboard-tot-stats',
  templateUrl: './tot-stats.component.html',
  styleUrls: ['./tot-stats.component.css']
})
export class TotStatsComponent implements OnInit {

  @ViewChild('workersCountRef', { static: true }) workersCountRef!: ElementRef;
  @ViewChild('resourcesCountRef', { static: true }) resourcesCountRef!: ElementRef;
  @ViewChild('totalCountRef', { static: true }) totalCountRef!: ElementRef;
  @ViewChild('cashCountRef', { static: true }) cashCountRef!: ElementRef;

  workersCount = 25;
  resources = 35;
  total = 250;
  cash = 500;


  ngOnInit(): void {
    this.animateCounts();
  }

  animateCounts(): void {
    let missionCount = 0;
    let completedCount = 0;
    let ongoingCount = 0;
    let totalCount = 0;

    const interval = setInterval(() => {
      if (missionCount < this.workersCount) {
        missionCount++;
        this.workersCountRef.nativeElement.innerText = missionCount.toString();
      }

      if (completedCount < this.resources) {
        completedCount++;
        this.resourcesCountRef.nativeElement.innerText = completedCount.toString();
      }

      if (ongoingCount < this.cash) {
        ongoingCount++;
        this.cashCountRef.nativeElement.innerText = ongoingCount.toString();
      }

      if (totalCount < this.total) {
        totalCount++;
        this.totalCountRef.nativeElement.innerText = totalCount.toString();
      }

      if (missionCount === this.workersCount && completedCount === this.resources && ongoingCount === this.cash && totalCount === this.total) {
        clearInterval(interval);
      }
    }, 8);
  }

}
