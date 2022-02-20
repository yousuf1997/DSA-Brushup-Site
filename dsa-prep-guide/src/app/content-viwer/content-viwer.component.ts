import { Component, OnInit } from '@angular/core';
import { AssetServiceService } from '../service/asset-service.service';

@Component({
  selector: 'app-content-viwer',
  templateUrl: './content-viwer.component.html',
  styleUrls: ['./content-viwer.component.scss']
})
export class ContentViwerComponent implements OnInit {

  currentRenderData : string = '';

  constructor(private service: AssetServiceService) { }

  ngOnInit(): void {
  }

}