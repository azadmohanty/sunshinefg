
import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';

const admissionSteps = [
    { number: '01', title: 'Application', description: 'Fill out our online application form with your details and required documents.' },
    { number: '02', title: 'Assessment', description: 'Complete the entrance assessment and interview process.' },
    { number: '03', title: 'Review', description: 'Our admissions team will review your application and assessment results.' },
    { number: '04', title: 'Enrollment', description: 'Complete the enrollment process and join our school community.' },
];

const faqData = [
  { q: "What are the admission requirements?", a: "Admission requirements include completed application form, previous academic records, birth certificate, and passport-sized photographs. Additional documents may be required based on the grade level." },
  { q: "What is the age criteria for admission?", a: "For Nursery, children should be 3 years old by March 31st of the academic year. For each subsequent grade, the age requirement increases by one year." },
  { q: "What is the fee structure?", a: "Our fee structure varies by grade level and includes tuition, transportation, and other facilities. Please contact our admissions office for detailed fee information." },
  { q: "Do you offer scholarships?", a: "Yes, we offer merit-based scholarships for exceptional students. Details about scholarship programs are available upon request." }
];

const FaqItem: React.FC<{ faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b">
            <button onClick={onClick} className="w-full text-left flex justify-between items-center py-4 px-2 focus:outline-none">
                <span className="font-semibold text-gray-800">{faq.q}</span>
                <span className={`transform transition-transform duration-300 text-[#FFC107] ${isOpen ? 'rotate-45' : ''}`}>
                    <i className="fas fa-plus"></i>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <p className="pt-0 p-2 text-gray-600">{faq.a}</p>
            </div>
        </div>
    )
};


const Admission: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (confirm('Are you sure you want to submit this application?')) {
        alert('Thank you for your application! We will contact you soon.');
        e.currentTarget.reset();
    }
  };

  return (
    <div>
      <PageHero 
        title="Join Our Community"
        subtitle="Begin your journey towards excellence with Sunshine International School"
        imageUrl="/images/admission-hero.jpg"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-['Montserrat']">Admission Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {admissionSteps.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                    <div className="text-4xl font-bold text-[#FFC107] mb-4 font-['Montserrat']">{step.number}</div>
                    <h3 className="text-xl font-bold mb-2 font-['Montserrat']">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="admission-form">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']">Admission Form</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Student's Full Name</label>
                  <input type="text" id="studentName" name="studentName" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                  <select id="grade" name="grade" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]">
                    <option value="">Select Grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">Kindergarten</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(g => <option key={g} value={g}>Grade {g}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                  <input type="text" id="parentName" name="parentName" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
              </div>
               <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]" />
                </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FFC107] focus:border-[#FFC107]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#FFC107] text-[#001D3D] font-bold py-3 px-6 rounded-md hover:bg-[#d4a93b] transition-colors duration-300">Submit Application</button>
            </form>
          </div>
        </div>
      </section>

       <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-['Montserrat']">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            {faqData.map((faq, index) => (
                <FaqItem 
                    key={index} 
                    faq={faq}
                    isOpen={openFaqIndex === index}
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;