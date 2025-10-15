import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HtmlComponent } from './pages/html/html.component';
import { CssComponent } from './pages/css/css.component';

import { JsComponent } from './pages/js/js.component';
import { AngularComponent } from './pages/angular/angular.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'html', component: HtmlComponent },
    { path: 'css', component: CssComponent },
    { path: 'js', component: JsComponent },
    { path: 'angular', component: AngularComponent }

];
