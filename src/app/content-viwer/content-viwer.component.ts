import { Component, OnInit } from '@angular/core';
import { AssetServiceService } from '../service/asset-service.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-content-viwer',
  templateUrl: './content-viwer.component.html',
  styleUrls: ['./content-viwer.component.scss']
})
export class ContentViwerComponent implements OnInit {

  currentRenderData : string = '';
  title : string = '';
  loading : boolean = true;

  constructor(private service: AssetServiceService, private activatedRoute : ActivatedRoute, private scroller: ViewportScroller) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe((params: any) => {

      this.service.getTheHTMLDoc(`../../../assets/content-html/${params['page']}.html`).subscribe(
        (data : any) => {
            this.title = params['page'];
            this.currentRenderData = data;
            this.loading = false;

        }
      )
        
      });

  }

  scroll(id : string){
    this.scroller.scrollToAnchor(id);
  }

 

}
