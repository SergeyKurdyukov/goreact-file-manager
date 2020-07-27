import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilesService } from './files.service';
import { IFile } from './files.types';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom,
})
export class AppComponent implements OnInit {

  public files: IFile[] = [];
  public selectedFile: IFile;
  public serverUrl = environment.serverUrl;
  private fileToUpload: File;

  constructor(private filesService: FilesService) {}

  async ngOnInit() {
    this.files = await this.filesService.getList();
    this.files = this.prepareFiles(this.files);
  }

  public async uploadFile(event) {
    this.fileToUpload = event.target.files[0];
    const result = await this.filesService.upload(this.fileToUpload);
    console.log('AppComponent.uploadFile result:', result);
    this.files = await this.filesService.getList();
    this.files = this.prepareFiles(this.files);
  }

  public onFileClick(file: IFile) {
    console.log('AppComponent.onFileClick file:', file);
    this.selectedFile = file;
  }

  private prepareFiles (files: IFile[]): IFile[] {
    return files.map(file => {
      file.isVideo = file.extension === 'mp4';
      return file;
    });
  }
}
