import React from 'react';
import PageHero from '../components/common/PageHero';

const About: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="192" viewBox="0 0 400 192"><rect fill="#E5E7EB" width="400" height="192"/><text fill="#9CA3AF" font-family="sans-serif" font-size="16" dy="6" x="50%" y="50%" text-anchor="middle">${target.alt}</text></svg>`;
    target.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;
  };

  return (
    <div>
      <PageHero 
        title="About Our School"
        subtitle="Discover our rich history and commitment to excellence"
        imageUrl="/images/about-hero.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']">Our History</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">Founded in 2012, Sunshine International School has grown from a small educational institution to a leading center of academic excellence in Odisha. Our journey began with a vision to provide quality education that combines traditional values with modern learning methodologies.</p>
            <p className="text-gray-600">Over the years, we have expanded our infrastructure, enhanced our curriculum, and built a team of dedicated educators who are committed to nurturing young minds. Today, we stand proud as an institution that has consistently produced outstanding academic results and well-rounded individuals.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-[#FFC107] mb-4"><i className="fas fa-bullseye"></i></div>
              <h3 className="text-2xl font-bold mb-3 font-['Montserrat']">Our Mission</h3>
              <p className="text-gray-600">To provide a nurturing environment that fosters academic excellence, character development, and global citizenship through innovative teaching methods and a comprehensive curriculum.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-[#FFC107] mb-4"><i className="fas fa-eye"></i></div>
              <h3 className="text-2xl font-bold mb-3 font-['Montserrat']">Our Vision</h3>
              <p className="text-gray-600">To be a premier educational institution that shapes future leaders by instilling values of integrity, compassion, and lifelong learning in every student.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl text-[#FFC107] mb-4"><i className="fas fa-graduation-cap"></i></div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Striving for the highest standards in academics and personal development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl text-[#FFC107] mb-4"><i className="fas fa-heart"></i></div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Upholding ethical values and moral principles in all our actions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl text-[#FFC107] mb-4"><i className="fas fa-globe"></i></div>
              <h3 className="text-xl font-bold mb-2">Global Perspective</h3>
              <p className="text-gray-600 text-sm">Preparing students to be global citizens in an interconnected world</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-3xl text-[#FFC107] mb-4"><i className="fas fa-users"></i></div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Building a supportive and inclusive learning community</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src="/images/classroom.jpg" alt="Modern Classrooms" className="w-full h-48 object-cover" onError={handleImageError} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Classrooms</h3>
                <p className="text-gray-600">Spacious, well-equipped classrooms with smart learning technology</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src="/images/library.jpg" alt="Digital Library" className="w-full h-48 object-cover" onError={handleImageError} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Library</h3>
                <p className="text-gray-600">Extensive collection of books and digital resources</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src="/images/sports.jpg" alt="Sports Facilities" className="w-full h-48 object-cover" onError={handleImageError} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sports Facilities</h3>
                <p className="text-gray-600">State-of-the-art sports complex and playgrounds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;