import { environment } from "src/environments/environment";

export enum Constants{

    economie = 'Économie',
    sports = 'Sports',

}

export const URL_CATEGORIES=`${environment.baseURL}api/categories`;
export const URL_CATEGORIEBYID=`${environment.baseURL}api/categories/`;
