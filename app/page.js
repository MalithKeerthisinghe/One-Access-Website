'use client'; // This directive marks the component as a Client Component

import ItPlusPage from './home/ItPlusPage'; // Corrected path based on file structure
import Header from './components/header';   // Corrected path for Header
import Footer from './components/footer';   // Corrected path for Footer

export default function Home() {
  return (
    <main>
      <Header/>
      <ItPlusPage />
      <Footer />
    </main>
  );
}
