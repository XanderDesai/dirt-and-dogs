import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';

function HomePage() {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
  fetch('/content.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
      <main className="container">
        <img src="/dirt-and-dogs-website.png" alt="Flyer" className="centered-image" />
        <article className="markdown">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
  
        <section className="gallery-section">
          <h2>Photo Gallery</h2>
          <p className="gallery-description">Gallery coming soon! Come join an event so I have some pictures to upload!</p>
        {/*<div className="gallery-grid">*/}
            {/*<div className="gallery-placeholder">*/}
            {/*</div>*/}
            {/*<div className="gallery-placeholder">*/}
            {/*</div>*/}
          {/*</div>*/}
        </section>
      </main>
  )
}

export default HomePage;
