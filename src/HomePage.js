import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer';
import Gallery from './Gallery';

function HomePage() {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
  fetch('/content.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
      <>
      <main className="container">
        <img src="/dirt-and-dogs-website.png" alt="Flyer" className="centered-image" />
        <article className="markdown">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
  
        <Gallery />
      </main>
      <Footer />
      </>
  )
}

export default HomePage;
