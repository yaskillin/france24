import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorie } from 'src/models/categorie';
import { URL_CATEGORIES } from 'src/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient : HttpClient) { }

  getCategories():Observable<any>{
    return this.httpClient.get<any>(URL_CATEGORIES);
  }
}
