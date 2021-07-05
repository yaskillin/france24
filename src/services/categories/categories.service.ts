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

  getCategories():Observable<categorie[]>{
    return this.httpClient.get<categorie[]>(URL_CATEGORIES);
  }
}
