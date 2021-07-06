# Sitemap
- [Personal Website with only HTML](https://vongxx.github.io/webbootcamp/HTML_PersonalSite/)
- [Personal Website with HTML + CSS](https://vongxx.github.io/webbootcamp/HTML_CSS_PersonalSite/)
- [Personal Website with HTML + CSS + Bootstrap5](https://vongxx.github.io/webbootcamp/HTML_CSS_Bootstrap_PersonalSite/)

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
    - "style" element in html head
    - "style" property in individual element
2. Block Model -> every html element is actually a box
3. Block properties -> Margin, Border, Padding
4. display property -> block, inline, inline-block, none
5. Parent-Child -> z dimension stacking
6. position property -> static, absolute, relative (will leave a empty space)
6. Font family -> a fallback model
7. Font embedding
8. Favicon 
9. Default stylesheet implemented by browser
    - Chrome => inspect => Body element -> margin: 8px

### Bootstrap 
1. Frontend Display library (with CSS and Javascript)
2. Good integration with Mobile/Web display (Reponsve design)
3. 12 column per row concept
4. Responsive by using the keyword (lg , md,, sm) 
```html
<div class="col-lg-3 col-md-4 col-sm-6"> </div>
```
5. Default : column size is 12 (max)
```html
<div class="col-lg-6"> Means that if large screen, this div will take up 0.5 of the screen, if smaller screen, will take up entire row </div>
```
6. Useful Bootstrap classes

| Bootstrap class | HTML element to apply on | Description |
| ------ | ------ | ------ | 
| nav, navbar | div | to display a navigation bar |
| container | div | auto responsive div |

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
    - Color Templates
        - [Colorhunt](https://colorhunt.co)
    - Icons
        - [Flaticon](https://flaticon.com)
    - GIFs
        - [Giphy](www.giphy.com)
    - Create Custom Buttons
        - [CSSButton](https://cssbuttoncreator.com/)
    - Fonts
        - [Google Fonts](https://fonts.google.com)
            - can embed these fonts into your page (google even provide you with an embed link)





