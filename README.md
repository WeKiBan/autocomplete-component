# Country Autocomplete Component

## Description

A reusable autocomplete input built with React and TypeScript that allows users to search and select from a list of countries using keyboard or mouse. Includes debounced filtering and keyboard navigation.

## Features

- Fetches country names from the REST Countries API  
- Debounced search filtering (300ms delay)  
- Keyboard navigation (Arrow Up/Down, Enter)  
- Highlights and selects options from the dropdown  
- Clean UX: doesn’t re-filter on selection, only on typing  
- Fully separated logic using custom React hooks  
- Styled with CSS Modules

## Tech Stack

- React  
- TypeScript  
- CSS Modules  
- REST Countries API  
- react-spinners (BeatLoader)

## Getting Started

1. Clone the repo  
2. Run `npm install` or `yarn`  
3. Run `npm run dev` or `yarn dev`  
4. Open `http://localhost:3000/` in your browser  

## TODO / Improvements

- Add mouse hover support  
- Add accessibility attributes (e.g. `aria-selected`)  
- Improve dropdown styling  
- Highlight matching text
