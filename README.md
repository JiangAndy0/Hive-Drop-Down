# How to run
1. Clone this repository and navigate to it on your local computer terminal using `cd`.
2. Run `npm install`
3. Run `npm run dev`

# Contents
This React application contains two dropdowns using a custom DropDown component, a "City to Visit"
single-select dropdown and a "Places to Visit" multi-select dropdown. Selecting a city in the first
dropdown causes the options that are available to select in the "Places to Visit" dropdown to change,
and also updates the image at the bottom of the page to an image of the selected city. 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
