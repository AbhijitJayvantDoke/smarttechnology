import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-html',
  imports: [FooterComponent, CommonModule],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {
   htmlNotes = [
    'HTML Notes',
    'Elements and Tags',
    'Attributes',
    'Forms & Inputs',
    'Semantic HTML',
  ];

  // Keys for topics
  topicKeys = [
    'basicSyntax',
    'inlineCSS',
    'externalCSS',
    'colorProperty',
    'backgroundColorProperty',
    'colorSystems',
    'selectors',
    'textProperties',
    'unitsInCSS',
    'boxModel',
    'displayProperty',
    'alphaChannel',
    'positionProperty',
    'backgroundImage',
    'flexbox',
    'grid',
    'animation',
    'responsiveness',
  ];

  // Example data for each topic
  examples: Record<string, { title: string; code: string }> = {
    basicSyntax: {
      title: 'Basic Syntax',
      code: `/* CSS Selector and Declaration */\nselector {\n  property: value;\n}`,
    },
    inlineCSS: {
      title: 'Inline CSS',
      code: `<p style="color: red;">This text is red.</p>`,
    },
    externalCSS: {
      title: 'External CSS',
      code: `<link rel="stylesheet" href="styles.css">`,
    },
    colorProperty: {
      title: 'Color Property',
      code: `color: #198754; /* Bootstrap green color */`,
    },
    backgroundColorProperty: {
      title: 'Background Color Property',
      code: `background-color: #f8f9fa; /* Light gray background */`,
    },
    colorSystems: {
      title: 'Color Systems',
      code: `color: rgba(25, 135, 84, 0.8); /* Green with 80% opacity */`,
    },
    selectors: {
      title: 'Selectors',
      code: `/* Select by element */\np { color: blue; }\n\n/* Select by ID */\n#idName { ... }\n\n/* Select by class */\n.className { ... }`,
    },
    textProperties: {
      title: 'Text Properties',
      code: `font-size: 1.2rem;\ntext-align: center;\nfont-weight: bold;`,
    },
    unitsInCSS: {
      title: 'Units in CSS',
      code: `width: 50%;\nfont-size: 1.5rem;`,
    },
    boxModel: {
      title: 'Box Model',
      code: `padding: 10px;\nborder: 1px solid #ccc;\nmargin: 20px;`,
    },
    displayProperty: {
      title: 'Display Property',
      code: `display: flex;\ndisplay: none;`,
    },
    alphaChannel: {
      title: 'Alpha Channel',
      code: `background-color: rgba(25, 135, 84, 0.5);`,
    },
    positionProperty: {
      title: 'Position Property',
      code: `position: absolute;\ntop: 10px;\nleft: 20px;`,
    },
    backgroundImage: {
      title: 'Background Image',
      code: `background-image: url('image.jpg');\nbackground-size: cover;`,
    },
    flexbox: {
      title: 'Flexbox',
      code: `display: flex;\njustify-content: center;\nalign-items: center;`,
    },
    grid: {
      title: 'Grid',
      code: `display: grid;\ngrid-template-columns: 1fr 2fr;`,
    },
    animation: {
      title: 'Animation',
      code: `@keyframes slide {\n  from {left: 0;}\n  to {left: 100px;}\n}\n\nanimation: slide 2s linear infinite;`,
    },
    responsiveness: {
      title: 'Responsiveness',
      code: `@media (max-width: 600px) {\n  body { font-size: 14px; }\n}`,
    },
  };

  selectedExampleKey: string | null = null;

  get selectedExample() {
    return this.selectedExampleKey ? this.examples[this.selectedExampleKey] : null;
  }

  showExample(key: string) {
    this.selectedExampleKey = key;
  }
}
