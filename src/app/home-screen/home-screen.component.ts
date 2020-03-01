import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {
  title = 'Francesco Stella';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.data.subscribe(data => {
    //   console.log(data);
    // });
  }

}
