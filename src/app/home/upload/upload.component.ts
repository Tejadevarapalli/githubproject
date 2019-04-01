import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import {FileService} from '../../file.service';
import {saveAs} from 'file-saver';


const uri = 'http://localhost:4200/file/upload';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [FileService]
})
export class UploadComponent implements OnInit {
  uploader: FileUploader = new FileUploader({url: uri});

  attachmentList: any = [];

  constructor(private fileService: FileService) {

    this.uploader.onCompleteItem = (item: any, response: any , status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));
    };
  }

  download(index) {
    const filename = this.attachmentList[index].uploadname;

    this.fileService.downloadFile(filename)
      .subscribe(
        data => saveAs(data, filename),
        error => console.error(error)
      );
  }


  ngOnInit() {
  }
}
