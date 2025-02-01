About Quote List and Random Generator Application


- This is a React-based application that allows users to browse a paginated list of quotes and generate a random quote. The app is built using React, Tailwind CSS, and TypeScript.


Folder structure is as follows : 

1. src 
- components - reusable UI components
  - QuoteCard.tsx = Component to display a single quote
  - Pagination.tsx = Pagination controls
  - RandomQuote.tsx = Random quote generator component
  - Favorites.tsx = Favorites page component
  - Loader.tsx = Loading spinner component
- context - React context for global state
  - FavoritesContext.tsx = Context for managing favorite quotes
- hooks - Custom react hooks
  - useQuotes.ts = Hook to fetch quotes from the API
- pages - Application pages
  - Home.tsx = Home page with paginated quotes
  - RandomQuotePage.tsx = Random quote page
- types - TypeScript type definitions
  types.ts = Types for API responses and components
- App.tsx - Main application component
- main.tsx - Entry point of the application
- index.css - Tailwind CSS styles



NOTE : In order to run the project locally, you will need to have :
1. Node.js (v16 or higher)
2. npm (v7 or higher)


Steps : 
1. Clone the repo using below mentioned commands :
git clone https://github.com/your-username/quote-list-app.git
cd quote-list-app
2. Install Dependencies:
npm install
3. Run the Development Server:
npm run dev
4. Open the Application:
http://localhost:3000