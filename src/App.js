import React, {useState} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
// import About, Contact, Resume??


function App() {
  return (
    <div>
              <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <Header></Header>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
