
import React, { useState, useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import { fetchNoticesData, Notice } from '../lib/dataService';

const NoticeCard: React.FC<{ notice: Notice }> = ({ notice }) => {
    const noticeTypeColors: { [key: string]: { border: string; bg: string; text: string; } } = {
        'Event': { border: 'border-red-500', bg: 'bg-red-100', text: 'text-red-700' },
        'Announcement': { border: 'border-teal-500', bg: 'bg-teal-100', text: 'text-teal-700' },
        'default': { border: 'border-gray-400', bg: 'bg-gray-100', text: 'text-gray-700' },
    };

    const colors = noticeTypeColors[notice.type] || noticeTypeColors.default;

    return (
        <a 
            href={notice.gdriveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`block bg-white rounded-lg shadow-md overflow-hidden border-l-4 ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
        >
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold font-['Montserrat'] text-[#001D3D] pr-2">{notice.title}</h3>
                    <span className={`text-xs font-semibold ${colors.bg} ${colors.text} px-2 py-1 rounded-full flex-shrink-0`}>{notice.type}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{notice.description}</p>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{notice.date}</span>
                    <span className="text-sm font-semibold text-[#001D3D] hover:text-[#FFC107]">
                        View Document <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                    </span>
                </div>
            </div>
        </a>
    );
};

const Notices: React.FC = () => {
    const [notices, setNotices] = useState<Notice[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNotices = async () => {
            setLoading(true);
            setError(null);
            try {
                const noticesData = await fetchNoticesData();
                // Sort notices by date, assuming 'YYYY-MM-DD' format for correct sorting
                const sortedNotices = (noticesData as Notice[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setNotices(sortedNotices);
            } catch (err) {
                console.error(err);
                setError('Failed to load notices. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        loadNotices();
    }, []);

    return (
        <div>
            <PageHero 
                title="School Notices"
                subtitle="Stay informed with the latest updates, announcements, and events."
                imageUrl="/images/notice-hero.jpg"
            />

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    {loading && (
                        <div className="text-center">
                            <i className="fas fa-spinner fa-spin text-3xl text-[#FFC107]"></i>
                            <p className="mt-4 text-gray-600">Loading notices...</p>
                        </div>
                    )}
                    {error && <p className="text-center text-lg text-red-600">{error}</p>}
                    
                    {!loading && !error && (
                        notices.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {notices.map((notice, index) => (
                                    <NoticeCard key={index} notice={notice} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-lg text-gray-500">No notices found at this time.</p>
                        )
                    )}
                </div>
            </section>
        </div>
    );
};

export default Notices;
