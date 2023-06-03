import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Directive({
  selector: '[appAuthButton]'
})
export class AuthButtonDirective implements OnInit {

  public isAuthenticated?: Observable<boolean>;
  public userName?: Observable<string | null | undefined>;

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
  }

}
