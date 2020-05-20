import { Component, OnInit ,EventEmitter,Output } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'

import { LocalStorageService } from '../../../services/system/local-storage.service';
import { UserServiceService } from '../../../services/apiService/user-service.service';
import { global } from '../../../services/system/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-image-profile',
  templateUrl: './change-image-profile.component.html',
  styleUrls: ['./change-image-profile.component.css']
})
export class ChangeImageProfileComponent implements OnInit {
  public identity;
  public token;
  public url;
  public filesToUpload: Array<File>
  public source:string = '';
  @Output() onChange: EventEmitter<File> = new EventEmitter<File>();
  constructor(
    private _localStorage:LocalStorageService,
    private _userService:UserServiceService,
    private _route:ActivatedRoute,
    private _router:Router
  ) {     
    this.url=global.url;
    
  }

  ngOnInit() {
    this.identity = this._localStorage.getIdentity();
    this.token=this._localStorage.getToken()
  }
 fileChangeEvent(fileInput: any)
  {    
    this.filesToUpload= <Array<File>>fileInput.target.files;
    this.projectImage(this.filesToUpload[0]);   
  }
    
  projectImage(file: File) {
    let reader = new FileReader;
    // TODO: Define type of 'e'
    reader.onload = (e: any) => {
        // Simply set e.target.result as our <img> src in the layout
        this.source = e.target.result;
        this.onChange.emit(file);
    };
    // This will process our file and get it's attributes/data
    reader.readAsDataURL(file);
  }
  updateImageProfile()
  {
      this._route.params.forEach(
        (params)=>{
          var idTipo=params['idTypeUser'];
          var idUser=params['idUser'];
          this._userService.UpdateImageProfile(this.url+'uploadImagenUser/'+this.identity._id,[],this.filesToUpload,this.token).then(
            (result:any) =>{
                Swal.fire({
                icon: 'success',
                title: 'Modificacion Exitosa',
                text: result.message,
                timer: 2000,
                }).then(()=>{                  
                  localStorage.setItem('identity',JSON.stringify(result.imageUpdate));                         
                  let image_path = this.url + 'imageUser/' +result.imageUpdate.imageProfile;                            
                  document.getElementById("identity_image").setAttribute('src',image_path);        
                  this._router.navigate(['/portal-ISIMA/Dashboard/User/',idTipo,'UserDetall',idUser]);            
                 }
                );                                                                            
            }
            ,error=>
            {
              console.log(error);
            }
        );
        }
      )
  }
}
