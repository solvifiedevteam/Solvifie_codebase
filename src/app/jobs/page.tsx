'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Clock, IndianRupee, Search, Filter, X } from 'lucide-react';

const mockJobs = [
    { id: 1, title: 'Senior Full Stack Developer', company: 'TechInnovate', location: 'Chennai', type: 'Full-time', experience: '5-8 Yrs', salary: '15-25 LPA', category: 'IT' },
    { id: 2, title: 'HR Manager', company: 'Solvifie Client', location: 'Chennai (OMR)', type: 'Full-time', experience: '4-7 Yrs', salary: '8-12 LPA', category: 'HR' },
    { id: 3, title: 'Marketing Executive', company: 'Global Brand', location: 'Chennai', type: 'Contract', experience: '1-3 Yrs', salary: '4-6 LPA', category: 'Marketing' },
    { id: 4, title: 'DevOps Engineer', company: 'CloudWorks', location: 'Remote', type: 'Full-time', experience: '3-6 Yrs', salary: '12-20 LPA', category: 'IT' },
];

const JobsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState<any>(null);

    const filteredJobs = mockJobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Current Opportunities</h1>
                    <p className="text-gray-600">Find your next career move in Chennai with Solvifie.</p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by role, company or skill..."
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-primary transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-4 bg-gray-50 rounded-2xl flex items-center gap-2 font-medium text-gray-700 hover:bg-gray-100 transition-all">
                            <Filter size={18} /> Filters
                        </button>
                        <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-hover transition-all shadow-lg">
                            Search Jobs
                        </button>
                    </div>
                </div>

                {/* Job Listings */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredJobs.map((job) => (
                        <motion.div
                            layoutId={`job-${job.id}`}
                            key={job.id}
                            onClick={() => setSelectedJob(job)}
                            className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{job.title}</h3>
                                    <p className="text-lg text-gray-500 font-medium">{job.company}</p>
                                </div>
                                <span className="px-4 py-1 bg-blue-50 text-primary rounded-full text-sm font-bold uppercase tracking-wide">
                                    {job.type}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin size={18} className="text-gray-400" /> {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Briefcase size={18} className="text-gray-400" /> {job.experience}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <IndianRupee size={18} className="text-gray-400" /> {job.salary}
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock size={18} className="text-gray-400" /> Just now
                                </div>
                            </div>

                            <button className="w-full py-4 bg-gray-950 text-white rounded-xl font-bold group-hover:bg-primary transition-all">
                                View Details & Apply
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedJob(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`job-${selectedJob.id}`}
                            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-10 max-h-[90vh] overflow-y-auto">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">{selectedJob.company}</span>
                                <h2 className="text-3xl font-extrabold mb-6">{selectedJob.title}</h2>

                                <div className="grid grid-cols-2 gap-6 mb-8 border-y border-gray-100 py-6">
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
                                        <p className="font-semibold">{selectedJob.location}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-400 uppercase font-bold">Experience</p>
                                        <p className="font-semibold">{selectedJob.experience}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-400 uppercase font-bold">Salary Range</p>
                                        <p className="font-semibold">{selectedJob.salary}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs text-gray-400 uppercase font-bold">Job Type</p>
                                        <p className="font-semibold">{selectedJob.type}</p>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h4 className="text-lg font-bold mb-4">Job Description</h4>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        We are looking for a highly motivated {selectedJob.title} to join our growing team. You will be responsible for building scalable solutions and collaborating with cross-functional teams.
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                                        <li>Analyze requirements and design solutions.</li>
                                        <li>Optimize performance and maintain code quality.</li>
                                        <li>Mentor junior team members and conduct code reviews.</li>
                                    </ul>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                    <h4 className="text-lg font-bold mb-6">Apply for this position</h4>
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="Full Name" className="w-full px-5 py-3 rounded-xl border-gray-200 focus:ring-primary" />
                                            <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl border-gray-200 focus:ring-primary" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-500">Upload Resume (PDF)</label>
                                            <input type="file" className="w-full px-5 py-3 rounded-xl border-2 border-dashed border-gray-200" />
                                        </div>
                                        <textarea placeholder="Tell us why you're a great fit..." rows={4} className="w-full px-5 py-3 rounded-xl border-gray-200 focus:ring-primary"></textarea>
                                        <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover shadow-lg transition-all">
                                            Submit Application
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JobsPage;
