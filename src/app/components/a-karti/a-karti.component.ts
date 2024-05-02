import { Component, NgModule, OnInit } from '@angular/core';
import { FakeHttpService } from '../../data-access/fake-http.service';
@Component({
  selector: 'app-a-karti',
  templateUrl: './a-karti.component.html',
  styleUrls: ['./a-karti.component.scss']
})

export class AKartiComponent implements OnInit {
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



