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

  public dsNames :Array<ListItem> = [];

  ngOnInit(): void {
    // this.dsNames.push('Array');
    // this.dsNames.push('LinkedList');
    // this.dsNames.push('Stack');
    // this.dsNames.push('Queue');
    // this.dsNames.push('Deque');
    // this.dsNames.push('Priority Queue');
    // this.dsNames.push('Tree');
    // this.dsNames.push('Trie');


    this.service.getListTitle().subscribe(

      (items : ListItem[] ) => {
          this.dsNames = items;
      }

    )

  }

}
