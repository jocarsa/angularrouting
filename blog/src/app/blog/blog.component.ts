import { Component } from '@angular/core';
import { DatosblogService } from '../datosblog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
    jsonData: any;

  constructor(private datosblogService: DatosblogService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.datosblogService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(data);
    });
  }
}
