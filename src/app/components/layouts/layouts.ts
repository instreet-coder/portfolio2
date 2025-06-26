import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layouts',
  imports: [RouterModule, Header, Footer,],
  templateUrl: './layouts.html',
  styleUrl: './layouts.scss'
})
export class Layouts {

}
