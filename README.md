# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### Screenshot

![](./public/screenshot.png)

### Links

- Github: [https://github.com/javidVeg/QR_code_component](https://github.com/javidVeg/QR_code_component)
- Live Site: [https://javidveg.github.io/QR_code_component/](https://javidveg.github.io/QR_code_component/)

## My process

### Built with

- HTML5 markup
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev) - React framework
- [TailwindCSS](https://tailwindcss.com) - CSS framework

### What I learned

The biggest thing I learned from this simple project was how to edit and add new css features by editing the tailwind.config.cjs file. 

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "15px": ['15px', {
        fontWeight: '700',
        lineHeight: '1.2rem'
      }],
      "11px": ['11px', {
        fontWeight: '400',
        lineHeight: '.8rem'
      }]
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    },
   
    extend: { 
      colors: {
      'Grayish-blue': 'hsl(220, 15%, 55%)',
      'Dark-blue': 'hsl(218, 44%, 22%)'
    },},
  },
  plugins: [],
}
```
### Continued development

This is my first time using Vite with React and Tailwind together and I am glad I chose this project to do so because there was a lot of cobwebs on my tailwind skills that I needed to brush off. This project also allowed me to get a better grasp of how to implement Vite. This will be my stack from this point forward while completing Frontend Mentor challenges. 

## Author

- Website - [David Martinez](https://dev-idcodes.com)
- Frontend Mentor - [@javidVeg](https://www.frontendmentor.io/profile/javidVeg)



