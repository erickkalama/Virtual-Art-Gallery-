import React from 'react';
const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>CHASTEL DESIGNS</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our Virtual Art Gallery, a place where art lovers from around the world can explore and appreciate a diverse collection of artworks from renowned artists. Our gallery aims to bring art to a global audience through an immersive online experience.
        </p>
        <p>
          Our collection features masterpieces from various art movements, including Post-Impressionism, Abstract Art, Pop Art, and Renaissance. Each artwork in our gallery has been carefully curated to provide visitors with a rich and engaging experience.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make art accessible to everyone, regardless of their location. By leveraging digital technology, we strive to create an inclusive platform that celebrates artistic expression and cultural heritage.
        </p>
        <h2>Featured Artists</h2>
        <ul>
          <li><strong>Vincent van Gogh:</strong> Known for his bold brush strokes and vibrant colors.</li>
          <li><strong>Josef Albers:</strong> Renowned for his work in abstract art and color theory.</li>
          <li><strong>Edward Hopper:</strong> Celebrated for his portrayals of American life and urban scenes.</li>
          <li><strong>Andy Warhol:</strong> A leading figure in the Pop Art movement.</li>
          <li><strong>Leonardo da Vinci:</strong> A polymath of the Renaissance era with masterpieces like the Mona Lisa.</li>
          <li><strong>Gustav Klimt:</strong> Known for his decorative and erotic style.</li>
        </ul>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Virtual Art Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;