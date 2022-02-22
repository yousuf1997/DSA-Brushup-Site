import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListItem } from 'src/assets/models/ListItem';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AssetServiceService {

  constructor(private http: HttpClient) { }


  getListTitle() {
    return this.http.get<ListItem[]>(environment.LIST_TITLE_URL);
  }

  getData(type: string){
      return this.http.get(environment.ARRAY_URL);
  }

  getJavaCollectionList(){
    return this.http.get<ListItem[]>(environment.JAVA_COLLECTION_LIST);
  }
}
