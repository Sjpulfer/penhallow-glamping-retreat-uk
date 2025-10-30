import { builder, BuilderComponent } from '@builder.io/react';
import './App.css';

// Initialize Builder.io with your API key from .env
builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY);

function App() {
  return (
    <>
      <BuilderComponent model="page" options={{ url: location.pathname }} />
    </>
  );
}

export default App;
