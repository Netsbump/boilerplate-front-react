import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // React.StrictMode is a wrapper for the development environment.
  // It does nothing in production, but in development, it performs checks
  // and warns about potential issues in the app.
  //
  // 1. Identifying components with side effects: StrictMode helps us spot
  //    unexpected side effects in our component rendering.
  //
  // 2. Deprecation warnings: If our app uses deprecated lifecycle methods,
  //    warnings will be displayed in the console.
  //
  // 3. Key verification: It ensures that unique keys are provided for all
  //    elements within a collection.
  //
  // 4. Detects potential problems: It can help identify other bad practices,
  //    such as using the old context API.

  <React.StrictMode>
    <App />,
  </React.StrictMode>,
);
