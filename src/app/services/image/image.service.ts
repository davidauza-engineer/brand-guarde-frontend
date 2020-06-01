import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

const baseUrl = 'http://localhost:3000/api/users/'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  public uploadImage(image: File, id: string): Observable<Response> {
    const formData = new FormData();

    formData.append('user[profile_picture]', image);
    console.log(baseUrl + id)
    return this.http.put<Response>(baseUrl + id, formData);
  }
}
