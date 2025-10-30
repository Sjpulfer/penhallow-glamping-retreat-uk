import { builder, BuilderComponent } from '@builder.io/react';
import './App.css';
import { builder, BuilderComponent } from '@builder.io/react';

// ✅ Initialize Builder.io with your API key
builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY);

function App() {
  const apiKey = import.meta.env.VITE_BUILDER_PUBLIC_API_KEY;
  console.log('Builder.io API Key:', apiKey);

  return (
    <>
      <BuilderComponent
        model="page"
        options={{ url: location.pathname }}
        // ✅ Add a fallback message if content is missing
        contentLoaded={(content) => {
          if (!content) {
            console.warn('Builder.io content not found for this URL');
          }
        }}
      />
    </>
  );
}

export default App;
