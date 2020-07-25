import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFile } from './files.types';


@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }
  public getList(): Promise<IFile[]> {
    return this.http.get<IFile[]>(`${environment.serverUrl}${environment.apiUrl}/files`).toPromise();
  }

  public upload(file: File): Promise<string> {
    console.log('FilesService.upload', file);
    const formData = new FormData();
    formData.set('fileKey', file, file.name);
    return this.http.post<string>(`${environment.serverUrl}${environment.apiUrl}/files`, formData).toPromise();
  }
}
