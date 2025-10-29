import React, { useState, useEffect } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, imageUrl }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => {
      setIsImageLoaded(false);
    };
  }, [imageUrl]);

  const heroStyle = isImageLoaded
    ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imageUrl})` }
    : { backgroundColor: '#001D3D' };

  return (
    <section 
      className="bg-cover bg-center text-white py-24 md:py-32 text-center relative animate-fade-in-up"
      style={heroStyle}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold font-['Montserrat'] mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;