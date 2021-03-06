import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Terms } from 'src/app/pojo/terms';
import { NewtermsService } from 'src/app/service/newterms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewterms',
  templateUrl: './viewterms.component.html',
  styleUrls: ['./viewterms.component.scss']
})
export class ViewtermsComponent implements OnInit {

  terms :Observable<Terms[]>;
  constructor(private newtermService:NewtermsService,private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.terms = this.newtermService.getNewtermList();
  }

  deleteTerm(id: number) {
    this.newtermService.deleteTerm(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateTerm(id: number){
     this.router.navigate(['system','UpdateTerms',id]);
  }

}
