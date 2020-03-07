import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { AuthStatus } from '../share/auth-status.enum';
import { SearchService } from '../services/search/search.service';
import { Restarurant } from '../model/restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup;
  authStateSuscrition: Subscription;
  restaurants: Array<Restarurant>;
  constructor(private router: Router, private formBuilder: FormBuilder, 
    private searchService: SearchService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState$.subscribe(v => {
      if (v === AuthStatus.NO_SESSION) {
        this.router.navigate(['/login']);
      }
    });
    this.searchForm = this.formBuilder.group(
      {
        city: new FormControl(''),
      }
    );
    this.restaurants = [];
  }

  signOut(): void {
    this.authService.signOut();
  }

  search(): void {
    const { city } = this.searchForm.getRawValue();
    this.searchService.byCity(city).subscribe(
      (v) => this.restaurants = v
    );
  }

  searchByGeoLocation(): void {
    
  }
}
