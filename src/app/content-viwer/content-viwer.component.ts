import { Component, OnInit } from '@angular/core';
import { AssetServiceService } from '../service/asset-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-viwer',
  templateUrl: './content-viwer.component.html',
  styleUrls: ['./content-viwer.component.scss']
})
export class ContentViwerComponent implements OnInit {

  currentRenderData : string = '';
  title : string = '';

  constructor(private service: AssetServiceService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe((params: any) => {

      this.service.getTheHTMLDoc(`../../../assets/content-html/${params['page']}.html`).subscribe(
        (data : any) => {
            this.title = params['page'];
            this.currentRenderData = data;
        }
      )
        
      });

  

  }

 

}
