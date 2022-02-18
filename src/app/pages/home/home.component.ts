import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardTitle: string = "Get in the driver’s seat and get paid";
  public cardSubtitle: string = "Drive on the platform with the largest network of active riders.";
  public cardButton: string = "Sign up to drive";
  public cardPartner: string = "";
  public cardLink: string = "Learn more about driving and delivering";
  public displayLink: string = 'active';
  public displayPartner: string = 'non-active';
  public moveBorder: string = 'border1';
  public bgImage: string = 'bg-img1';

  constructor() { }

  ngOnInit(): void {
  }

  toDriver(): void {
    this.cardTitle = "Get in the driver’s seat and get paid";
    this.cardSubtitle = "Drive on the platform with the largest network of active riders.";
    this.cardButton = "Sign up to drive";
    this.cardPartner = "";
    this.cardLink = "Learn more about driving and delivering";
    this.displayLink = 'active';
    this.displayPartner = 'non-active';
    this.moveBorder = 'border1';
    this.bgImage = 'bg-img1';
  }

  toEat(): void{
    this.cardTitle = 'Discover delicious eats';
    this.cardSubtitle = "Order delivery from restaurants you love.";
    this.cardButton = "Order now";
    this.cardPartner = "Own a restaurant? Partner with Uber Eats";
    this.cardLink = "";
    this.displayLink = 'non-active';
    this.displayPartner = 'active';
    this.moveBorder = 'border2';
    this.bgImage = 'bg-img2';
  }

  toRide(): void{
    this.cardTitle = "Request a ride now";
    this.cardButton = "Request now";
    this.cardPartner = "";
    this.cardLink = "Learn more about driving and delivering";
    this.displayLink = 'active';
    this.displayPartner = 'non-active';
    this.moveBorder = 'border3';
    this.bgImage = 'bg-img3';
  }

}
