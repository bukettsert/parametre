import { Component, NgModule, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-b-karti',
  templateUrl: './b-karti.component.html',
  styleUrls: ['./b-karti.component.scss']
})
export class BKartiComponent implements OnInit {
  data: string[] = [];
  content: string | null = null;

  constructor(private fakeHttpService: FakeHttpService) {}

  ngOnInit(): void {
    this.addData();
  }

  addData() {
    this.fakeHttpService.getRandomData().subscribe(newData => {
      this.content = newData;
    });
  }

  removeData() {
    this.content = null;
  }

}



