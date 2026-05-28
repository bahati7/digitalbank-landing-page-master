# Frontend Mentor - Digitalbank landing page solution

This is a solution to the [Digitalbank landing page challenge on Frontend Mentor](https://www.google.com/search?q=https://www.frontendmentor.io/challenges/digital-bank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


* [Author](https://www.google.com/search?q=%23author)

## Overview

### The challenge

Users should be able to:

* View the optimal layout for the site depending on their device's screen size.
* See hover states for all interactive elements on the page.

### Links

* Solution URL: [https://github.com/bahati7/digitalbank-landing-page-master](https://www.google.com/search?q=https://github.com/bahati7/digitalbank-landing-page-master)
* Live Site URL: [https://digitalbank-landing-page-master-henna.vercel.app/](https://www.google.com/search?q=https://digitalbank-landing-page-master-henna.vercel.app/)

## My process

### Built with

* [React](https://www.google.com/search?q=https://reactjs.org/) - JS library
* [Tailwind CSS](https://www.google.com/search?q=https://tailwindcss.com/) - For styling
* Mobile-first workflow
* Component-based architecture

### What I learned

During this project, I focused heavily on modularizing my code. I broke down the landing page into reusable components to ensure a clean codebase and better maintainability.

I strengthened my ability to use Tailwind CSS utility classes to create a responsive, modern interface. One specific area I focused on was managing state for mobile navigation menus, ensuring smooth transitions between mobile and desktop views.

```jsx
// Example of a reusable component structure
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <img src={icon} alt={title} className="mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

```

### Screenshot

![](./preview.jpg)


### Continued development

In future projects, I aim to:

* Deepen my knowledge of React hooks for more complex state management.
* Explore advanced Tailwind plugins for even faster styling workflows.
* Improve accessibility (a11y) standards by refining screen-reader support within my components.

## Author

* Frontend Mentor - [@bahati7](https://www.frontendmentor.io/profile/bahati7)
* GitHub - [bahati7](https://github.com/bahati7)