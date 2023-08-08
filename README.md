# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://mistakeltu.github.io/fem_homepage_main/)
- Live Site URL: [Add live site URL here](https://mistakeltu.github.io/fem_homepage_main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```css
   transform: translateX(100%);
   transition: transform 350ms ease-out;
   inset: 0 0 0 70%;

  .nav-btn[data-visible="true"] {
    transform: translateX(0%);
  }

  .nav-toggle[aria-expanded="true"] {
    background-image: url(../../images/icon-menu-close.svg);
  }

  @media (max-width: 700px) {
    .nav-btn {
      inset: 0 0 0 60%;
    }
  }
}
```

### Continued development

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=HbBMp6yUXO0&ab_channel=KevinPowell) - Responsive navbar tutorial using HTML CSS & JS by Kevin Powell

## Author

- Github Website - [Karolis](https://github.com/mistakeltu)

## Acknowledgments
