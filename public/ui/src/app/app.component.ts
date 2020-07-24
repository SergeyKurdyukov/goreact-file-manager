import { Component, OnInit } from '@angular/core';
import { FilesService } from './files.service';
import { IFile } from './files.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';
  public files: IFile[];
  private selectedFile: File;
  constructor(private filesService: FilesService) {}

  async ngOnInit() {
    this.files = await this.filesService.getList();
  }

  public async uploadFile(event) {
    this.selectedFile = event.target.files[0];
    const result = await this.filesService.upload(this.selectedFile);
    console.log('AppComponent.uploadFile result:', result);
  }
}
