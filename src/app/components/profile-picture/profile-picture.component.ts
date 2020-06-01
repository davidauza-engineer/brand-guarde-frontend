import { Component, OnInit } from '@angular/core';
import { ImageSnippet } from './image-snippet';
import { ImageService} from "../../services/image/image.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {
  selectedFile: ImageSnippet;
  userId: string;

  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  processFile(profile_picture: any) {
    const file: File = profile_picture.files[0]
    const reader = new FileReader();
    this.userId = this.route.snapshot.paramMap.get('id')
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file, this.userId).subscribe(
        response => {
        },
        error => {
        }
      )
    });
    reader.readAsDataURL(file);
  }
}
