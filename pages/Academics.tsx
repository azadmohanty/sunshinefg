import React from 'react';
import PageHero from '../components/common/PageHero';

const curriculumData = [
    {
        icon: 'fas fa-child',
        title: 'Kindergarten',
        subjects: ['Play-based Learning', 'Language Development', 'Basic Numeracy', 'Art and Craft', 'Music and Movement'],
    },
    {
        icon: 'fas fa-book-reader',
        title: 'Primary (I-V)',
        subjects: ['English', 'Hindi', 'Mathematics', 'Environmental Studies', 'Computer Science', 'Art & Music', 'Physical Education'],
    },
    {
        icon: 'fas fa-book',
        title: 'Middle (VI-VIII)',
        subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Science', 'Third Language (Sanskrit/French)'],
    },
    {
        icon: 'fas fa-graduation-cap',
        title: 'High School (IX-XII)',
        subjects: ['Science Stream (PCM/PCB)', 'Commerce Stream', 'Humanities Stream', 'English (Core)', 'Physical Education'],
    },
];

const programsData = [
    { img: '/images/stem.jpg', title: 'STEM Education', desc: 'Hands-on learning in Science, Technology, Engineering, and Mathematics' },
    { img: '/images/olympiad.jpg', title: 'Olympiad Training', desc: 'Specialized coaching for national and international competitions' },
    { img: '/images/taekwondo.jpg', title: 'Taekwondo Classes', desc: 'Martial arts training focusing on discipline and self-defense' },
    { img: '/images/language.jpg', title: 'Language Programs', desc: 'Comprehensive learning in English, Hindi, and French' },
];

const achievementsData = [
    { number: '95%', title: 'Board Exam Pass Rate' },
    { number: '100+', title: 'Scholarships Awarded' },
    { number: '50+', title: 'Academic Awards Won' },
    { number: '25+', title: 'Olympiad Winners' },
];

const resourcesData = [
    { icon: 'fas fa-book-reader', title: 'Digital Library', desc: 'Access to extensive digital resources and e-books' },
    { icon: 'fas fa-laptop', title: 'Smart Classrooms', desc: 'Technology-enhanced learning environments' },
    { icon: 'fas fa-globe', title: 'Online Learning', desc: 'Virtual classrooms and digital learning platforms' },
];

const Academics: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.onerror = null;
    const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="160" viewBox="0 0 400 160"><rect fill="#E5E7EB" width="400" height="160"/><text fill="#9CA3AF" font-family="sans-serif" font-size="16" dy="6" x="50%" y="50%" text-anchor="middle">${target.alt}</text></svg>`;
    target.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;
  };

  return (
    <div>
      <PageHero 
        title="Academic Excellence"
        subtitle="A holistic approach to education that nurtures every student's potential"
        imageUrl="/images/academics-hero.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Our CBSE Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumData.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                    <div className="text-3xl text-[#FFC107] mb-4"><i className={item.icon}></i></div>
                    <h3 className="text-xl font-bold mb-3 font-['Montserrat']">{item.title}</h3>
                    <ul className="text-gray-600 space-y-2 text-sm list-disc list-inside">
                        {item.subjects.map((subject, i) => <li key={i}>{subject}</li>)}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Special Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programsData.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
                    <img src={program.img} alt={program.title} className="w-full h-40 object-cover" onError={handleImageError} />
                    <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 font-['Montserrat']">{program.title}</h3>
                        <p className="text-gray-600 text-sm">{program.desc}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Academic Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievementsData.map((ach, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-[#FFC107] mb-2 font-['Montserrat']">{ach.number}</div>
                    <h3 className="text-lg font-semibold text-gray-700">{ach.title}</h3>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {resourcesData.map((res, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
                    <div className="text-4xl text-[#FFC107] mb-4"><i className={res.icon}></i></div>
                    <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{res.title}</h3>
                    <p className="text-gray-600">{res.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;