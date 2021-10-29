# Sitemap
- [Personal Website with only HTML](https://vongxx.github.io/webbootcamp/HTML_PersonalSite/)
- [Personal Website with HTML + CSS](https://vongxx.github.io/webbootcamp/HTML_CSS_PersonalSite/)
- [Personal Website with HTML + CSS + Bootstrap5](https://vongxx.github.io/webbootcamp/HTML_CSS_Bootstrap_PersonalSite/)
- [All Workings, Test of Concepts](https://vongxx.github.io/webbootcamp/TestConcepts/)

# Key Concepts

### How to start
1. Use a good IDE (eg. VSCODE / ATOM)
2. Download useful [extensions](https://docs.google.com/document/d/e/2PACX-1vQDcdmrkjNPlOSeqS-v99P-57h5f7Yo3pszkko1sN6OtIVlNBFgTyeTX3A1mDSOdw1Ugb1l5o0NVy-a/pub)
3. Start coding away~

### HTML
1. HTML tags
2. Executed from top to bottom (Put the Bootstrap stylesheet first then followed by your custom stylesheet)

### CSS
1. Where to define styles? 
    - External CSS file + reference it in html
    - "style" section in html's head
    - "style" property in individual element
2. Block Model -> every html element is actually a box
3. Block properties -> Margin, Border, Padding
4. display property -> block, inline, inline-block, none

| Display Type | Description | Html element |
| ------ | ------ |  ------ |
| block | a rect that start on a new line and occupy the full width available. And you can set width and height values. | h1, h2, p, div, ol, ul  | 
| inline | a rect that doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.   | img, a, br, span, button, strong, i |
| inline block | It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values. |  |
| none | to remove a block completely from view, the css parser will treat it as it don't exist | N.A. |

5. Parent-Child -> z dimension stacking
6. Basis of responsive CSS
    - CSS Grid + CSS Flexbox
    - [Understanding Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

6. position property -> static, absolute, relative (will leave a empty space)
7. float and clear (float may extends outside parent! -> set overflow property of parent div to be auto)
   - [Understanding float](https://css-tricks.com/almanac/properties/f/float/)
8. CSS units to use (em,rem,%,vw,px)
   - [CSS which unit to use](https://gist.github.com/basham/2175a16ab7c60ce8e001)
9. Font family -> a fallback model
7. Font embedding
8. Favicon 
9. Advanced CSS : Media queries
```
    @media (max-width : 1028px)
    {
    .title{text-align : center;}
    .titleImage{position:static;}
    }
```
10. Default stylesheet implemented by browser
    - Chrome => inspect => Body element -> margin: 8px
11. Combining selectors
```
h1, h2, p {
color : red; #all h1,h2,p will be affected
}

div h1 {
color : blue; #only the h1 inside a div will be affected
}
```

### Bootstrap 
1. Frontend Display library (with CSS and Javascript)
2. Designed for multiple displays (Reponsive design)
3. 12 column per row concept
4. Responsive by using the keyword (lg , md,, sm) 
```html
<div class="col-lg-3 col-md-4 col-sm-6"> </div>
```
5. If not explicitly defined, bootstrap will imply that column size is set to max available space
```html
<div class="col-lg-6"> Means that if large screen, this div will take up 0.5 of the screen, if smaller screen, will take up entire row </div>
```
6. Useful Bootstrap classes

| Bootstrap class | HTML element to apply on | Description |
| ------ | ------ | ------ | 
| nav, navbar | div | to display a navigation bar |
| container | div | default responsive div - text will snap to container width |
| container-fluid | div | auto responsive div - better than container |
| btn | button | have many templates - eg.btn-dark, btn-light, can also add in custom icons to make the btns looks better|
| carousel | div | the parent div uses "carousel slide", the child slides div uses "carousel-item" |
| card | div | a content container - literally looks like a card with header, footer, content|

### Javascript
1. To have interactivity
2. Add in a separate file "index.js"
3. In HTML, add in the script tag at the bottom (just b4 the body close tag)
    - different from css file, we add link tag just after the title tag (b4 the body open tag)
4. Chrome → Developer Tools → Sources → Snippets (Test your javascript)
5. Document Object Model
   - Use HTML Tree Viewer (Chrome extension)
   - Try testing in console (document.firstElementChild)
   - All objects have methods and properties
        - Properties (innerHTML, style, firstElementChild)
        - Methods (click, appendChild, setAttribute)
   - Selecting element in DOM using queries(Preferred to use querySelector, querySelectorAll)
        - document.getElementByTagName("btn"), document.getElementById("title")
        - document.querySelector(".btn"), document.querySelector("#title")
        - document.querySelector("li a"), document.querySelectorAll("#mylist .item")
6. Not recommended to change style using JavaScript
   - (Recommended)Define class in css, then in javascript, edit the element's property(classList)
   - Eg. document.querySelector("button").classList.toggle("invisible")
   - Eg. document.querySelector("button").classList.add("invisible")
7. Changing Attributes, InnerHTML, textContent
   - document.querySelector("a").setAttribute("href", "http://google.com");
8. Adding eventListener
```
document.querySelector("button").addEventListener("click", handleClick );
function handleClick(){
    alert(this.innerHTML)
}
document.addEventListener("keypress", function (event){
  console.log(event);
});
```
3. Variables and functions
```
function getMyName(para1){
var myName="XX";
alert(para1);
console.log(myName);
return myName;
}
var myName = getMyName("Something");
```
4. Conditionals and Operators
```
if(a === 100 || b !== 40){}
else{} 
if(a > 100 && b <= 40){}
else{}
```
5. Arrays and Objects
```
const myArr = [1, 2, "hello"];
myArr.push("world");
let x = myArr[myArr.length-1];
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
const myObj = {name:"XX", age:46};
let x = myObj.name;
```

### jQuery
1. Javascript librry that simplifies coding $()
```
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
```

### Node.js
1. Javascript Library for server-side programming (Similar to python)
2. Comes bundled with npm to download packages (similar to pip for python)
3. Libraries to use:
   - express (very easy to start a web-server/ web-service)
     - can create a port listener
     - has functions to respond to GET/POST requests to / or subpages
   - nodemon (to monitor for file changes and restart webserver)
   - body-parser (to parse the HTML into a nested class)
   - request
   - react

### EJS (Embedded Javascript Templating)
1. To use with HTML (declaration) + Node.js (to render) so that you can add code to HTML page template's elements to have dyanamic pages using the same template

### React.js
1. Javascript Library for Front End UI
2. Combination of HTML,CSS,Javascripts into components and inserting into tree (different from the traditional way of separating content-HTML, styling-CSS, actions-Javascript)
3  We will only create a div with id=root in HTML, the rest of the content is declared in .js
4. React.js contains Babel, a javascript compiler, so we can type JSX(javascript extended) which looks something like this: 
```
const element = <h1>Hello, world!</h1>;
```
5. And on top of embedding html in js, it can embed js in html in js. It is called Javascript expression in JSX (using {})
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
6. Depending on the user's browser, Babel will compile your javascript into a compatible javascript for the old browser on the fly
7. JSX's HTML elements' attributes are declared in cameCase
```
<div tabIndex={-1} />      // Just like node.tabIndex DOM API
<div className="Button" /> // Just like node.className DOM API
<input readOnly={true} />  // Just like node.readOnly DOM API
```
8. You can create javascript functions that return a html element tag. The recommendation for your function name is to use Pascal case (capitalise 1 letter). Then in JSX, can just use the function name a a custom element.
```
function Heading(){
    return <h1>Hello World</h1>;
}
ReactDOM.render(
    <div>
        <Heading/>
    </div>
  ,
  document.getElementById('root')
);

```
9. Can create .jsx files (as modules), and let the main index.js to import them (To split the sections, for easy troubleshooting)
```
# Heading.jsx
import React from "react"
function Heading(){
    return <h1>Hello World</h1>;
}
function List(){
    return <ul><li>Hello World</li></ul>;
}
function Pi(){
    return 3.1415;
}
export default Heading;
export {List, Pi};

# index.js
import Heading, {List, Pi} from "./Heading"
ReactDOM.render(
    <div>
        <Heading/>
        <List/>
        <p>{Pi()}</p>
    </div>
  ,
  document.getElementById('root')
);


```

### Combining Bootstrap with React
1. Since Bootstrap uses jQuery to manipulate the actual DOM and React uses Virtual DOM, they are not exactly compatible. Instead use the module "react-bootstrap", where the bootstrap components are converted into react elements

### MongoDB
1. Good NoSQL db to use (Can scale up very well)
2. NoSQL -> you pass in a JSON object with parameters limitation as a query
3. Use Javascript Object Notation (JSON) as storage - Just nice can use Javascript for FULL-STACK development!!!
4. Works seemlessly with Node.js (use mongoose library) 
5. There's free cloud storage of Mongodb using Mongo Atlas

### Passport.js
1. Library to use with Node.js to provide authentication/hashing
2. Can also use OAuth to log in with facebook/google etc... (Let google/facebook take care of the credentials management)


# Hosting webpage
1. If static, host using Github (free)
   
2. Buy a domain name (eg. myfarm.com)
    - [Namecheap](https://namecheap.com) (different pricing : $8-10/year)
    - [GoogleDomain](https://domains.google/intl/en_sg) ($12/year)

3. Change the domain name of your github pages!
    - https://www.youtube.com/watch?v=TwOV_UaIXcU
    - Old webpage url = https://vongxx.github.io/webbootcamp/HTML_PersonalSite/
    - New webpage url = https://myfarm.com/HTML_PersonalSite/

4. GitHub limitations
    - Soft 100GB/mth bandwidth limit! 
    - Only can host Static page (Html/CSS/Javascript) 
    - Recommended to use a CDN (eg. **Cloudflare**) as an intermediary to serve the content

5. Cloudflare as an intermediary (CDN, DNS, DDoS protection) + give a free SSL Cert 
    - https://www.toptal.com/github/unlimited-scale-web-hosting-github-pages-cloudflare
    - Got free version! - But 3 page rule

6. If hosting a dynamic website (eg. show different content to diff people), use 
    - **Heroku**
        - Free webhosting + able to link to Cloud DB
            - Link database to ClearDB MySQL (Heroku Addon)
            - Link db to Mongodb Atlas
    - **Firebase**
        - Google's webhosting with Frontend and Backend (Got free version)

7. Firebase (Free) limitations 
    - 100 max concurrent connections
    - 10GB transfer
    - 1 GB storage

8. Hosting on other platforms
    - [Google Cloud](https://codelabs.developers.google.com/codelabs/cloud-webapp-hosting-gcs#0)
    -  

# Web Design
1. Color Theory (use https://colorhunt.co)
    - Red : Love, Energy, Intensity
    - Green : Freshness, Safety, Growth
    - Yellow : Intellect, Joy, Attention
    - Blue : Stability, Trust, Serenity
    - Purple : Royalty, Wealth, Feminity
3. Typography
    - Tips in combining fonts (use 2 of them in a website)
    - [Infographic on Typography](https://www.designmantic.com/blog/wp-content/uploads/2014/04/font-infography.jpg)
    - Similar
      - Mood 
      - Time (Old or Modern)
    - Different
      - Serif-ness
      - Weight

5. UI Design

6. UX Design


# Resources

1. Documention
    - Intellisense in VSCode 
        - [Emmet](https://docs.emmet.io)
    - HTML/CSS Documentation 
        - [MDN](https://developer.mozilla.org/en-US/)
        - [Devdocs](https://devdocs.io/) (Alternative to MDN)
        - [MDN Valid Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

2. Content Resources
    - Unicode
        - [UnicodeTable](https://unicode-table.com/)
    - Web design templates (bootstrap specific)
        - [Bootsnipp](https://bootsnipp.com)
    - Design Practices
        - [DailyUI](https://www.dailyui.co/)
        - [Canva.com](https://www.canva.com/websites/templates/?continuation=100)
    - Color Templates
        - [Colorhunt](https://colorhunt.co)
    - Icons
        - [Flaticon](https://flaticon.com)
        - [FontAwesome](https://fontawesome.com)
            - Need to add fontawesome's javascript into html
    - GIFs
        - [Giphy](www.giphy.com)
    - Create Custom Buttons
        - [CSSButton](https://cssbuttoncreator.com/)
    - Fonts
        - [Google Fonts](https://fonts.google.com)
            - can embed these fonts into your page (google even provide you with an embed link)


3. Is self built website still relevant with 41.4% of the top 10 million websites (as of May 2021) using Wordpress.org?
    - [Good intro article](https://kinsta.com/knowledgebase/what-is-wordpress/)




