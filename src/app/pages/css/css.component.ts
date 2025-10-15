import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-css',
  imports: [FooterComponent,CommonModule],
  templateUrl: './css.component.html',
  styleUrl: './css.component.css'
})
export class CssComponent {
  selectedTopic: any = null;

  cssTopics = [
    {
      title: 'Basic Syntax',
      example: `selector {\n  property: value;\n}`
    },
    {
      title: 'Inline CSS',
      example: `<p style="color: red;">Red Text</p>`
    },
    {
      title: 'External CSS',
      example: `<link rel="stylesheet" href="styles.css">`
    },
    {
      title: 'Color Property',
      example: `color: #198754; /* Bootstrap green */`
    },
    {
      title: 'Background Color',
      example: `background-color: #f8f9fa; /* Light gray */`
    },
    {
      title: 'Color Systems',
      example: `color: rgba(25, 135, 84, 0.8); /* Green with opacity */`
    },
    {
      title: 'Selectors',
      example: `p { color: blue; }\n#id { ... }\n.class { ... }`
    },
    {
      title: 'Text Properties',
      example: `font-size: 1.2rem;\ntext-align: center;\nfont-weight: bold;`
    },
    {
      title: 'Units in CSS',
      example: `width: 50%;\nfont-size: 1.5rem;`
    },
    {
      title: 'Box Model',
      example: `padding: 10px;\nborder: 1px solid #ccc;\nmargin: 20px;`
    },
    {
      title: 'Display Property',
      example: `display: flex;\ndisplay: none;`
    },
    {
      title: 'Alpha Channel',
      example: `background-color: rgba(25, 135, 84, 0.5);`
    },
    {
      title: 'Position Property',
      example: `position: absolute;\ntop: 10px;\nleft: 20px;`
    },
    {
      title: 'Background Image',
      example: `background-image: url('image.jpg');\nbackground-size: cover;`
    },
    {
      title: 'Flexbox',
      example: `display: flex;\njustify-content: center;\nalign-items: center;`
    },
    {
      title: 'Grid',
      example: `display: grid;\ngrid-template-columns: 1fr 2fr;`
    },
    {
      title: 'Animation',
      example: `@keyframes slide {\n  from {left: 0;}\n  to {left: 100px;}\n}`
    },
    {
      title: 'Responsiveness',
      example: `@media (max-width: 768px) {\n  .container { padding: 10px; }\n}`
    }
  ];

  showExample(topic: any) {
    this.selectedTopic = topic;
   
  }
}
