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

### Node
1. Javascript Library

### REACT
1. Javascript Library

### MongoDB
1. Good backend db to use

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

6. If hosting a dynamic website (eg. show different content to diff people), use **Firebase**!
    - Google's webhosting with Frontend and Backend (Got free version)

7. Firebase (Free) limitations 
    - 100 max concurrent connections
    - 10GB transfer
    - 1 GB storage

8. Hosting on other platforms
    - [Google Cloud](https://codelabs.developers.google.com/codelabs/cloud-webapp-hosting-gcs#0)
    -  

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
    - ［Bootsnipp］(https://bootsnipp.com)
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




