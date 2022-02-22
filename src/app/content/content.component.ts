import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/assets/models/ListItem';
import { AssetServiceService } from '../service/asset-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private service: AssetServiceService) { }

  public dsNames: Array<ListItem> = [];
  public javaCollectionList: Array<ListItem> = [];

  ngOnInit(): void {

    this.service.getListTitle().subscribe(

      (items: ListItem[]) => {
        this.dsNames = items;
      }

    )


    this.service.getJavaCollectionList().subscribe(

      (items: ListItem[]) => {
        this.javaCollectionList = items;
      }

    )

  }

}
