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

// HTML Topic Keys
topicKeys = [
  'htmlBoilerplate',
  'headElement',
  'bodyElement',
  'commonTags',
  'attributes',
  'forms',
  'inputTypes',
  'semanticTags',
  'linksAndImages',
  'lists',
  'tables',
  'iframes',
  'audioVideo',
  'metaTags',
  'doctype',
  'htmlComments',
  'blockInlineElements',
  'htmlEntities',
];

// Examples for HTML topics
examples: Record<string, { title: string; code: string }> = {
  htmlBoilerplate: {
    title: 'HTML Boilerplate',
    code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>`,
  },
  headElement: {
    title: 'Head Element',
    code: `<head>\n  <title>My Page</title>\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n</head>`,
  },
  bodyElement: {
    title: 'Body Element',
    code: `<body>\n  <h1>Hello, World!</h1>\n</body>`,
  },
  commonTags: {
    title: 'Common Tags',
    code: `<h1>Heading</h1>\n<p>Paragraph</p>\n<strong>Bold</strong>\n<em>Italic</em>`,
  },
  attributes: {
    title: 'Attributes',
    code: `<img src="image.jpg" alt="Description" width="300">\n<a href="https://example.com" target="_blank">Visit</a>`,
  },
  forms: {
    title: 'Forms',
    code: `<form action="/submit" method="POST">\n  <input type="text" name="name">\n  <button type="submit">Send</button>\n</form>`,
  },
  inputTypes: {
    title: 'Input Types',
    code: `<input type="text">\n<input type="email">\n<input type="password">\n<input type="checkbox">\n<input type="radio">`,
  },
  semanticTags: {
    title: 'Semantic Tags',
    code: `<header>\n  <h1>Website Title</h1>\n</header>\n<main>\n  <article>Content</article>\n</main>\n<footer>\n  &copy; 2025\n</footer>`,
  },
  linksAndImages: {
    title: 'Links and Images',
    code: `<a href="https://example.com">Go to site</a>\n<img src="image.jpg" alt="Image">`,
  },
  lists: {
    title: 'Lists',
    code: `<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>\n<ol>\n  <li>First</li>\n  <li>Second</li>\n</ol>`,
  },
  tables: {
    title: 'Tables',
    code: `<table>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Alice</td><td>30</td></tr>\n</table>`,
  },
  iframes: {
    title: 'Iframes',
    code: `<iframe src="https://example.com" width="300" height="200"></iframe>`,
  },
  audioVideo: {
    title: 'Audio and Video',
    code: `<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>\n<video controls width="300">\n  <source src="video.mp4" type="video/mp4">\n</video>`,
  },
  metaTags: {
    title: 'Meta Tags',
    code: `<meta charset="UTF-8">\n<meta name="description" content="Learn HTML basics">`,
  },
  doctype: {
    title: 'Doctype',
    code: `<!DOCTYPE html>`,
  },
  htmlComments: {
    title: 'HTML Comments',
    code: `<!-- This is a comment -->`,
  },
  blockInlineElements: {
    title: 'Block vs Inline Elements',
    code: `<div>This is block</div>\n<span>This is inline</span>`,
  },
  htmlEntities: {
    title: 'HTML Entities',
    code: `&lt; &gt; &amp; &quot; &copy;`,
  },
};

// Track selected example
selectedExampleKey: string | null = null;

get selectedExample() {
  return this.selectedExampleKey ? this.examples[this.selectedExampleKey] : null;
}

showExample(key: string) {
  this.selectedExampleKey = key;
}

}
