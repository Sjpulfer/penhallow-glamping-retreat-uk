import { builder, BuilderComponent } from '@builder.io/react'

builder.init(import.meta.env.VITE_BUILDER_PUBLIC_API_KEY)

export default function App() {
  return (
    <>
      <BuilderComponent
        model="page"
        options={{ url: location.pathname }}
        contentLoaded={(content) => {
          if (!content) {
            console.warn('⚠️ Builder.io content not found for this URL')
            const fallback = document.createElement('main')
            fallback.innerHTML = `
              <h1 style="text-align:center;padding-top:2rem;">Penhallow Glamping Retreat UK</h1>
              <p style="text-align:center;">Fallback content: Builder.io returned nothing.</p>
            `
            document.getElementById('root')?.appendChild(fallback)
          }
        }}
      />
    </>
  )
}
