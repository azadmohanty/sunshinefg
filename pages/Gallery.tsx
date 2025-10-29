import React from 'react';
import PageHero from '../components/common/PageHero';

const galleryImages = [
  { src: '/images/gallery-1.jpg', caption: 'Annual Day 2023' },
  { src: '/images/gallery-2.jpg', caption: 'Science Fair' },
  { src: '/images/gallery-3.jpg', caption: 'Sports Meet' },
  { src: '/images/gallery-4.jpg', caption: 'Art Exhibition' },
  { src: '/images/gallery-5.jpg', caption: 'Diwali Celebration' },
  { src: '/images/gallery-6.jpg', caption: 'Independence Day' },
  { src: '/images/gallery-7.jpg', caption: 'Christmas Carnival' },
  { src: '/images/gallery-8.jpg', caption: 'Field Trip' },
];

const Gallery: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    const placeholderSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="400" height="224" viewBox="0 0 400 224">
        <rect fill="#E5E7EB" width="400" height="224"/>
        <text fill="#9CA3AF" font-family="sans-serif" font-size="20" dy="7" x="50%" y="50%" text-anchor="middle">Image Not Found</text>
      </svg>`;
    e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;
  };

  return (
    <div>
      <PageHero 
        title="Our Gallery"
        subtitle="Explore the vibrant life at Sunshine International School"
        imageUrl="/images/gallery-hero.jpg"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center">
                  <h3 className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{image.caption}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;