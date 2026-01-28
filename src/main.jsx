import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import './index.css';
import App from './App.jsx'
import '/fonts/Montserrat/static/Montserrat-Regular.ttf'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme 
      radius="large"
      scaling='105%'

      className="min-h-screen"

      hasBackground={true}
    >
      <App />
    </Theme>
  </StrictMode>,
)
