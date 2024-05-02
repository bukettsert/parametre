import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHttpService {
  private fakeData = [
    'Data 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sequi laboriosam praesentium dolore omnis modi, vel ea, eveniet ullam, quaerat esse ducimus aspernatur dolorum saepe?',
    'Data 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit unde quidem vel suscipit nulla eveniet? Nulla unde atque quaerat, vitae velit, culpa optio adipisci sint iure fugit id aliquam!',
    'Data 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. At non quam ipsam molestias, magni quas.',
    'Data 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate tempora quasi in delectus at aliquid maiores placeat!',
    'Data 5 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam consequuntur alias iusto ab quaerat sint unde nostrum iure earum excepturi sapiente natus nemo, dignissimos, dolor provident ipsam amet perferendis maiores sit dolore. Illo ipsam, blanditiis deleniti eos sint mollitia officia hic recusandae. At laboriosam ipsam, nihil ullam aspernatur libero dolor et debitis, ea distinctio temporibus voluptatem repellendus optio obcaecati vitae molestiae excepturi? Nemo asperiores vitae porro consequuntur laboriosam minus voluptates.'
  ];

  constructor() {}

  getRandomData() {
    const randomIndex = Math.floor(Math.random() * this.fakeData.length);
    return of(this.fakeData[randomIndex]);
  }
}
