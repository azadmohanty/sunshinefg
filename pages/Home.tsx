import React, { useState, useEffect, useCallback } from 'react';
// FIX: Suppress TypeScript error for react-router-dom import.
// @ts-ignore
import { Link } from 'react-router-dom';
import { fetchNoticesData, Notice } from '../lib/dataService';


const heroSlidesData = [
  { type: 'video', src: '/images/school-video.mp4', animationClass: 'animate-pan-left' },
  { type: 'image', src: '/images/school-hero-1.jpg', animationClass: 'animate-pan-right' },
  { type: 'image', src: '/images/school-hero-2.jpg', animationClass: 'animate-zoom-in' },
  { type: 'image', src: '/images/school-hero-3.jpg', animationClass: 'animate-pan-up' },
  { type: 'image', src: '/images/school-hero-4.jpg', animationClass: 'animate-pan-left' },
];

const Hero: React.FC = () => {
    const [slides, setSlides] = useState(heroSlidesData);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        if (slides.length === 0) return;
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);
    
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    const handleMediaError = (src: string) => {
        setSlides(prevSlides => {
            const newSlides = prevSlides.filter(slide => slide.src !== src);
            if (newSlides.length > 0 && currentSlide >= newSlides.length) {
                setCurrentSlide(0);
            } else if (newSlides.length === 0) {
                setCurrentSlide(0);
            }
            return newSlides;
        });
    };

    return (
        <section className="relative h-screen overflow-hidden flex items-center justify-start">
            <div className="absolute top-0 left-0 w-full h-full z-[-1]">
                {slides.map((slide, index) => (
                    <div key={slide.src} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        {slide.type === 'video' ? (
                            <video key={slide.src} playsInline autoPlay muted loop className={`w-full h-full object-cover scale-105 ${slide.animationClass}`} onError={() => handleMediaError(slide.src)}>
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.src} alt="School" className={`w-full h-full object-cover scale-105 ${slide.animationClass}`} onError={() => handleMediaError(slide.src)} />
                        )}
                    </div>
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#002C5F]/80 via-[#001D3D]/70 to-transparent"></div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
                <div className="max-w-2xl text-left text-white">
                    <h1 className="text-4xl md:text-6xl font-bold font-['Montserrat'] mb-4 leading-tight text-shadow-lg">Inspiring Young Minds for a Brighter Tomorrow</h1>
                    <p className="text-lg md:text-xl mb-8 text-shadow">A nurturing environment where knowledge meets excellence.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/admission" className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-[#001D3D] bg-[#FFC107] hover:bg-[#d4a93b] transition-all duration-300 transform hover:scale-105 shadow-lg">Admissions Open 2025-26</Link>
                        <a href="https://forms.gle/9fhot1QfQEze1Pg89" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">Get in Touch</a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-24 left-4 sm:left-6 lg:left-8 z-10 flex gap-2">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#FFC107] scale-125' : 'bg-white/50'}`}></button>
                ))}
            </div>

             <a href="#quick-links" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white text-4xl hidden md:block animate-jump" aria-label="Scroll to next section">
                <i className="fas fa-chevron-down"></i>
            </a>
        </section>
    );
};

const quickLinksData = [
  { icon: 'fas fa-info-circle', title: 'About Us', description: 'Our history, mission, and values', path: '/about' },
  { icon: 'fas fa-book-open', title: 'Academics', description: 'Explore our comprehensive curriculum', path: '/academics' },
  { icon: 'fas fa-graduation-cap', title: 'Admissions', description: 'Join our vibrant school community', path: '/admission' },
  { icon: 'fas fa-images', title: 'Gallery', description: 'A glimpse into our school life', path: '/gallery' },
];

const QuickLinks = () => (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Discover Sunshine International School</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {quickLinksData.map((link) => (
            <div key={link.title} className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
              <div className="text-4xl text-[#FFC107] mb-4"><i className={link.icon}></i></div>
              <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{link.title}</h3>
              <p className="text-gray-600 mb-4 text-sm flex-grow">{link.description}</p>
              <Link to={link.path} className="font-semibold text-[#001D3D] hover:text-[#FFC107] mt-auto">
                Learn More &rarr;
              </Link>
            </div>
        ))}
      </div>
    </div>
  </section>
);


const galleryData = [
  { src: "/images/gallery-1.jpg", alt: "School Campus", caption: "Our modern campus facilities provide an inspiring learning environment" },
  { src: "/images/gallery-2.jpg", alt: "Science Laboratory", caption: "State-of-the-art science labs for practical learning experiences" },
  { src: "/images/gallery-3.jpg", alt: "Classroom", caption: "Interactive classrooms fostering collaborative learning" },
  { src: "/images/gallery-4.jpg", alt: "Library", caption: "Expansive library with a diverse collection of books" },
  { src: "/images/gallery-5.jpg", alt: "Auditorium", caption: "Modern auditorium for performances and events" }
];

const HomeGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateImage = (index: number) => {
        const newIndex = (index + galleryData.length) % galleryData.length;
        setCurrentIndex(newIndex);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, isThumbnail: boolean = false) => {
        e.currentTarget.onerror = null; // Prevent infinite loops
        const [width, height, text] = isThumbnail 
            ? [150, 90, 'Error'] 
            : [800, 450, 'Image Not Found'];
        const placeholderSvg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
            <rect fill="#E5E7EB" width="${width}" height="${height}"/>
            <text fill="#9CA3AF" font-family="sans-serif" font-size="16" dy="6" x="50%" y="50%" text-anchor="middle">${text}</text>
          </svg>`;
        e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Explore Our School</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-4 relative rounded-lg overflow-hidden shadow-lg">
                        <img id="main-gallery-image" src={galleryData[currentIndex].src} alt={galleryData[currentIndex].alt} className="w-full h-[450px] object-cover transition-transform duration-500 ease-in-out" onError={(e) => handleImageError(e)}/>
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
                            <p className="text-white font-semibold">{galleryData[currentIndex].caption}</p>
                        </div>
                        <button onClick={() => updateImage(currentIndex - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full w-10 h-10 hover:bg-white/40 transition"><i className="fas fa-chevron-left"></i></button>
                        <button onClick={() => updateImage(currentIndex + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full w-10 h-10 hover:bg-white/40 transition"><i className="fas fa-chevron-right"></i></button>
                    </div>
                    <div className="hidden lg:flex flex-col gap-2">
                        {galleryData.map((image, index) => (
                            <div key={index} className={`thumbnail cursor-pointer rounded-md overflow-hidden border-2 ${currentIndex === index ? 'border-[#FFC107]' : 'border-transparent'}`} onClick={() => updateImage(index)}>
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" onError={(e) => handleImageError(e, true)}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Notices = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNotices = async () => {
            setLoading(true);
            setError(null);
            try {
                const noticesData = await fetchNoticesData();
                // Get the 5 most recent notices
                setNotices(noticesData.slice(0, 5));
            } catch (err) {
                console.error(err);
                setError('Failed to load notices.');
            } finally {
                setLoading(false);
            }
        };
        loadNotices();
    }, []);

    const noticeTypeColors: { [key: string]: string } = {
        'Event': 'bg-red-500',
        'Announcement': 'bg-teal-500',
        'default': 'bg-gray-500',
    };

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4 font-['Montserrat']">School Notices</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Stay updated with the latest announcements, events, and important information.</p>
                
                {loading && <p className="text-center text-gray-500">Loading latest notices...</p>}
                {error && <p className="text-center text-red-600">{error}</p>}
                
                {!loading && !error && (
                    notices.length === 0 ? (
                        <p className="text-center text-gray-500">No recent notices found.</p>
                    ) : (
                        <div className="relative w-full overflow-hidden bg-white p-4 rounded-lg shadow-md group">
                            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                                {[...notices, ...notices].map((notice, index) => {
                                    const bgColor = noticeTypeColors[notice.type] || noticeTypeColors.default;
                                    const isNew = (new Date().getTime() - new Date(notice.date).getTime()) < 7 * 24 * 60 * 60 * 1000;
                                    
                                    return (
                                        <a 
                                            key={index} 
                                            href={notice.gdriveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-shrink-0 mx-4 w-72 bg-gray-50 p-4 rounded-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className={`text-xs font-semibold text-white px-2 py-1 rounded-full ${bgColor}`}>{notice.type}</span>
                                                {isNew && <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">NEW</span>}
                                            </div>
                                            <h3 className="font-bold text-sm truncate text-[#001D3D]">{notice.title}</h3>
                                            <p className="text-xs text-gray-500">{notice.date}</p>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    )
                )}
                 
                <div className="text-center mt-8">
                    <Link to="/notices" className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-full text-white bg-[#001D3D] hover:bg-[#003d7a] transition-all duration-300 transform hover:scale-105 shadow-lg">
                        View All Notices
                    </Link>
                </div>
            </div>
        </section>
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

const leadershipData: Teacher[] = [
  {
    name: "Praful Kumar Rath",
    role: "President",
    qualification: "MA, M.Phil",
    experience: "25",
    img: "/images/teachers/prafulkumarrath.jpg",
    testimonial: "We believe in nurturing young minds to become global citizens. Our commitment to excellence ensures our students are prepared for tomorrow's challenges."
  },
  {
    name: "Sunil Ku Mohanty",
    role: "Principal",
    qualification: "B.Sc, B.Ed",
    experience: "18",
    img: "/images/teachers/sunilkumohanty.jpg",
    testimonial: "Our holistic approach to education ensures each student receives personalized attention and opportunities to excel in academics, sports, and co-curricular activities."
  }
];

const Leadership = () => {
    const leaders = leadershipData;
    
    if (leaders.length === 0) {
        return null; // Don't render the section if there's no data
    }

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, name: string) => {
        e.currentTarget.onerror = null; // Prevent infinite loop
        const initials = name.split(' ').map(n=>n[0]).join('');
        const placeholderSvg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
            <rect fill="#E5E7EB" width="128" height="128" rx="64"/>
            <text fill="#9CA3AF" font-family="sans-serif" font-size="48" dy="16" x="50%" y="50%" text-anchor="middle">${initials}</text>
          </svg>`;
        e.currentTarget.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(placeholderSvg)}`;
    };

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">From The Founders</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {leaders.map(leader => (
                        <div key={leader.name} className="leadership-card bg-white rounded-lg shadow-md flex flex-col sm:flex-row items-center p-6 transition-shadow duration-300 hover:shadow-xl">
                            <img 
                                src={leader.img} 
                                alt={leader.name} 
                                className="w-32 h-32 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6 flex-shrink-0 border-4 border-gray-100"
                                onError={(e) => handleImageError(e, leader.name)}
                            />
                            <div>
                                <h3 className="text-xl font-bold font-['Montserrat'] text-[#001D3D]">{`From the ${leader.role}'s Desk`}</h3>
                                <p className="text-sm text-gray-500 mb-2">{`${leader.name}, ${leader.role}`}</p>
                                {leader.testimonial && <p className="text-gray-600 text-sm italic">"{leader.testimonial}"</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const faqData = [
  { q: "Why Sunshine International School?", a: "Sunshine International School is committed to providing a nurturing environment where students can excel academically and personally. Our innovative curriculum and dedicated faculty ensure a holistic education." },
  { q: "Where is the school located?", a: "The school is located at Main Road, Kumari, Purushottampur, 761018, Ganjam, Odisha, India." },
  { q: "What are the school timings?", a: "The school operates from 8:00 AM to 2:30 PM, Monday to Saturday. Sunday is a holiday." },
  { q: "What transportation facilities are available?", a: "We offer safe and reliable transportation services covering major areas. Parents can check route details at the school office." },
];

const FaqItem: React.FC<{ faq: {q: string, a: string}, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button onClick={onClick} className="w-full text-left flex justify-between items-center py-4 px-2">
                <span className="font-semibold">{faq.q}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <i className="fas fa-plus"></i>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <p className="p-2 text-gray-600">{faq.a}</p>
            </div>
        </div>
    )
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section id="faq-section" className="bg-gray-50 py-16 scroll-mt-[75px]">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']">Frequently Asked Questions</h2>
                <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
                    {faqData.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            faq={faq} 
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="quick-links" className="scroll-mt-[75px]">
        <QuickLinks />
        <HomeGallery />
        <Notices />
        <Leadership />
        <FAQ />
      </div>
    </>
  );
};

export default Home;