import React, { useState, useEffect } from 'react';
import PageHero from '../components/common/PageHero';

const TeacherCard: React.FC<{ imgSrc: string; name: string; role: string; qualification: string; experience: string; }> = ({ imgSrc, name, role, qualification, experience }) => {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null; // Prevent infinite loop if placeholder fails
        const initials = name.split(' ').map(n=>n[0]).join('');
        const placeholderSvg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
            <rect fill="#E5E7EB" width="96" height="96" rx="48"/>
            <text fill="#9CA3AF" font-family="sans-serif" font-size="36" dy="12" x="50%" y="50%" text-anchor="middle">${initials}</text>
          </svg>`;
        e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;
    };
    
    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center text-center sm:text-left transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <img 
                src={imgSrc} 
                alt={name} 
                className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 border-4 border-gray-100"
                onError={handleImageError}
            />
            <div>
                <h3 className="text-xl font-bold font-['Montserrat'] text-[#001D3D]">{name}</h3>
                <p className="text-[#FFC107] font-semibold text-base mb-2">{role}</p>
                <p className="text-sm text-gray-600">{qualification}</p>
                <p className="text-sm text-gray-500">{experience}</p>
            </div>
        </div>
    );
};

interface Teacher {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  img: string;
  testimonial?: string;
}

interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

const facultyData: Teacher[] = [
    {
        name: "Subrata Kumar Nayak",
        role: "Computer",
        qualification: "D.El.Ed.",
        experience: "9",
        img: "/images/teachers/subratakumarnayak.jpg",
        testimonial: "Something teachers and students can learn from my experience is that we have to overcome our fears and lot them to control ourselves because we cannot know our capabilities if we are afraid."
    },
    {
        name: "Sumitra Sahu",
        role: "Hindi",
        qualification: "B.A., D.El.Ed.",
        experience: "12",
        img: "/images/teachers/sumitrasahu.jpg",
        testimonial: "It is the place of learning, but a garden where dreams take root and grow"
    },
    {
        name: "Bhagyalaxmi Panda",
        role: "English",
        qualification: "B.A., D.El.Ed.",
        experience: "14",
        img: "/images/teachers/bhagyalaxmipanda.jpg",
        testimonial: "The school offers a perfect balance between academics, decipline and creativity."
    },
    {
        name: "Deepti Rani Panda",
        role: "SST",
        qualification: "B.A., D.El.Ed.",
        experience: "19",
        img: "/images/teachers/deeptiranipanda.jpg",
        testimonial: "Proud to be part of a Sunshine international school, that inspires learning and excellence everyday."
    },
    {
        name: "Sunita Kumari Gouda",
        role: "SST",
        qualification: "B.A., B.Ed.",
        experience: "10",
        img: "/images/teachers/sunitakumarigouda.jpg",
        testimonial: "A school that inspires curiosity, encourages innovation and celebrate success."
    },
    {
        name: "Archana Nayak",
        role: "English & Math",
        qualification: "B.Com., B.Ed.",
        experience: "15",
        img: "/images/teachers/archananayak.jpg",
        testimonial: "Our school is where knowledge meets kindness and every student learns to shine"
    },
    {
        name: "Swagatika Panda",
        role: "Math & Odia",
        qualification: "B.A., D.El.Ed.",
        experience: "9",
        img: "/images/teachers/swagatikapanda.jpg",
        testimonial: "Our school is where knowledge meets kindness and every student learns to shine."
    },
    {
        name: "Kusuma Behera",
        role: "Math",
        qualification: "B.A., D.El.Ed.",
        experience: "1",
        img: "/images/teachers/kusumabehera.jpg",
        testimonial: "Here, education is not just about books- it's about building character and confidence."
    },
    {
        name: "Jogindra Behera",
        role: "Science",
        qualification: "B.Sc., D.El.Ed.",
        experience: "7",
        img: "/images/teachers/jogindrabehera.jpg",
        testimonial: "Teachers have the unique opportunity to form strong bonds with students, becoming trusted mentors who provide support and encoragement"
    },
    {
        name: "Sangita Muni",
        role: "Odia",
        qualification: "B.A., B.Ed.",
        experience: "14",
        img: "/images/teachers/sangitamuni.jpg",
        testimonial: "The school that curiosity encourages innovation and celebrate success"
    },
    {
        name: "Asharani Nayak",
        role: "Math",
        qualification: "B.Sc., B.Ed.",
        experience: "2",
        img: "/images/teachers/asharaninayak.jpg",
        testimonial: "A truly nurturing environment where teachers care and students grow with confidence."
    },
    {
        name: "B.Basanti Reddy",
        role: "Science",
        qualification: "B.Sc., D.El.Ed.",
        experience: "4",
        img: "/images/teachers/bbasantireddy.jpg",
        testimonial: "An excellent place for holistic development - academically strong and morally rich"
    },
    {
        name: "Subhrasmita Dash",
        role: "SST & Odia",
        qualification: "M.A., B.Ed.",
        experience: "2",
        img: "/images/teachers/subhrasmitadash.jpg",
        testimonial: "School helps to improve my knowledge and gives opportunity to increase my experience"
    },
    {
        name: "Pritujita Mohanty",
        role: "Math & English",
        qualification: "M.A., B.A.",
        experience: "5",
        img: "/images/teachers/pritujitamohanty.jpg",
        testimonial: "It is the place of learning, but a garden where dreams take root and grow"
    },
    {
        name: "Rina Samal",
        role: "English & Odia",
        qualification: "B.A., B.Ed.",
        experience: "5",
        img: "/images/teachers/rinasamal.jpg",
        testimonial: "Best School in my life. Best opportunity by Sunshine International School. Thank You"
    },
    {
        name: "Anjali Sahu",
        role: "Social science",
        qualification: "B.A., M.A., B.Ed.",
        experience: "11",
        img: "/images/teachers/anjalisahu.jpg",
        testimonial: "We get various type of knowledge from here i.e spiritual and educational also."
    },
    {
        name: "Rasmita Gouda",
        role: "English",
        qualification: "B.A., B.Ed.",
        experience: "10",
        img: "/images/teachers/rasmitagouda.jpg",
        testimonial: "The school offers a perfect balance between academic, disciplines and creativity"
    }
];

const Teachers: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = facultyData
    .filter(t => t.testimonial && t.testimonial.trim() !== '')
    .map(t => ({
      quote: t.testimonial!,
      name: t.name,
      role: t.role,
    }));

  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setTimeout(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentTestimonial, testimonials.length]);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  return (
    <div>
      <PageHero 
        title="Meet Our Dedicated Faculty"
        subtitle="Our team of experienced educators is committed to nurturing young minds and shaping future leaders."
        imageUrl="/images/teachers-hero.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <>
              {facultyData.length > 0 ? (
                <div>
                  <h2 className="text-3xl font-bold text-center mb-4 font-['Montserrat']">Our Esteemed Faculty</h2>
                  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">A team of passionate educators dedicated to student success.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {facultyData.map(t => <TeacherCard key={t.name} imgSrc={t.img} name={t.name} role={t.role} qualification={t.qualification} experience={`${t.experience} years experience`} />)}
                  </div>
                </div>
              ) : (
                 <p className="text-center text-lg text-gray-500">Teacher information is currently unavailable.</p>
              )}
            </>
        </div>
      </section>
      
      {testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Words From Our Team</h2>
            <div className="max-w-3xl mx-auto relative">
              <div className="relative overflow-hidden h-48">
                {testimonials.map((testimonial, index) => (
                  <div key={index} 
                       className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
                       aria-hidden={index !== currentTestimonial}>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg relative h-full flex flex-col justify-center">
                      <i className="fas fa-quote-left text-3xl text-[#FFC107] absolute top-4 left-6 opacity-20"></i>
                      <p className="text-gray-600 italic text-center mb-4">"{testimonial.quote}"</p>
                      <div className="text-right">
                        <h4 className="font-bold font-['Montserrat']">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {testimonials.length > 1 && (
                <>
                  <button onClick={handlePrevTestimonial} aria-label="Previous testimonial" className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 text-gray-700 rounded-full w-10 h-10 hover:bg-white/80 transition shadow-md -translate-x-6 z-10">
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button onClick={handleNextTestimonial} aria-label="Next testimonial" className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 text-gray-700 rounded-full w-10 h-10 hover:bg-white/80 transition shadow-md translate-x-6 z-10">
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentTestimonial(index)} 
                        aria-label={`Go to testimonial ${index + 1}`}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-[#FFC107] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}>
                    </button>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Teachers;