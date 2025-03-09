// pages/index.js
'use client'
import { useState } from 'react';
import Head from 'next/head';
// import Image from 'next/image';

export default function Home() {
  // Mock user data - in a real app this would come from an API
  const userData = {
    name: "Alex Johnson",
    title: "Senior UX Designer",
    location: "San Francisco, CA",
    connections: 500,
    profileViews: 243,
    coverPhoto: "/images/cover-photo.jpg",
    profilePhoto: "/images/profile-photo.jpg",
    about: "Creative and user-focused designer with over 8 years of experience crafting intuitive digital experiences for global brands. Passionate about combining aesthetics with functionality to solve complex problems.",
    experience: [
      {
        id: 1,
        role: "Senior UX Designer",
        company: "TechVision Inc.",
        duration: "2020 - Present",
        description: "Leading UX design for enterprise SaaS products. Implemented design system that improved development efficiency by 40%."
      },
      {
        id: 2,
        role: "UX/UI Designer",
        company: "Digital Creatives",
        duration: "2017 - 2020",
        description: "Designed user interfaces for mobile applications and websites. Conducted user research and usability testing."
      },
      {
        id: 3,
        role: "Graphic Designer",
        company: "MediaWorks Agency",
        duration: "2015 - 2017",
        description: "Created visual assets for digital and print marketing campaigns."
      }
    ],
    education: [
      {
        id: 1,
        school: "California Institute of Design",
        degree: "Master of Fine Arts, Interactive Design",
        years: "2013 - 2015"
      },
      {
        id: 2,
        school: "University of California",
        degree: "Bachelor of Arts, Visual Communication",
        years: "2009 - 2013"
      }
    ],
    skills: [
      "UX Design", "UI Design", "Wireframing", "Prototyping", 
      "User Research", "Figma", "Adobe XD", "Sketch", 
      "Design Systems", "Information Architecture", "Usability Testing"
    ],
    projects: [
      {
        id: 1,
        title: "FinTech Mobile App Redesign",
        description: "Complete redesign of a financial technology app focusing on simplifying complex transactions and improving user engagement.",
        image: "/images/project1.jpg"
      },
      {
        id: 2,
        title: "E-commerce Website UX Overhaul",
        description: "Revamped the user experience for an e-commerce platform, resulting in 35% increase in conversion rate.",
        image: "/images/project2.jpg"
      },
      {
        id: 3,
        title: "Healthcare Portal Design System",
        description: "Created a comprehensive design system for a healthcare provider portal used by over 5,000 medical professionals.",
        image: "/images/project3.jpg"
      }
    ]
  };

  // State for active tab in projects section
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>{userData.name} | Portfolio Platform</title>
        <meta name="description" content="Professional portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-blue-600 text-2xl font-bold">Portfolio</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Network
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Projects
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Messages
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  className="border border-gray-300 rounded-md py-2 px-4 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div className="ml-3 relative">
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-xs font-medium">AJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Profile Header Section */}
        <div className="bg-white shadow rounded-lg mb-6 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
            {/* Profile Photo */}
            <div className="absolute -bottom-12 left-6">
              <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-gray-700 text-3xl font-bold">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-16 px-6 pb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                <p className="text-gray-600">{userData.title}</p>
                <p className="text-gray-500 text-sm mt-1">{userData.location}</p>
                <p className="text-blue-600 text-sm mt-1">{userData.connections}+ connections</p>
              </div>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-500 text-sm">
                <span className="font-medium text-gray-900">{userData.profileViews}</span> profile views in the last 30 days
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="lg:w-8/12 space-y-6">
            {/* About Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-700">{userData.about}</p>
            </div>

            {/* Experience Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Experience</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                {userData.experience.map(exp => (
                  <div key={exp.id} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.duration}</p>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Education</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <div className="space-y-6">
                {userData.education.map(edu => (
                  <div key={edu.id} className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{edu.school}</h3>
                      <p className="text-gray-600">{edu.degree}</p>
                      <p className="text-gray-500 text-sm">{edu.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Portfolio</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('projects')}
                    className={`${
                      activeTab === 'projects'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => setActiveTab('testimonials')}
                    className={`${
                      activeTab === 'testimonials'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Testimonials
                  </button>
                  <button
                    onClick={() => setActiveTab('publications')}
                    className={`${
                      activeTab === 'publications'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    Publications
                  </button>
                </nav>
              </div>

              {/* Project Cards */}
              {activeTab === 'projects' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userData.projects.map(project => (
                    <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Other tabs would go here */}
              {activeTab === 'testimonials' && (
                <div className="text-center py-8 text-gray-500">
                  No testimonials added yet
                </div>
              )}
              
              {activeTab === 'publications' && (
                <div className="text-center py-8 text-gray-500">
                  No publications added yet
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-4/12 space-y-6">
            {/* Skills Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Skills</h2>
                <button className="text-blue-600 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* People You May Know */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">People you may know</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
                        P{item}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-gray-900">Person Name</h3>
                      <p className="text-xs text-gray-500">Professional Title</p>
                    </div>
                    <button className="ml-2 border border-blue-600 text-blue-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-50">
                      Connect
                    </button>
                  </div>
                ))}
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700 mt-2">
                  Show more
                </button>
              </div>
            </div>

            {/* Discover More */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Discover more</h2>
              <div className="space-y-3">
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  # design
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  # ux
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  # portfolio
                </a>
                <a href="#" className="block text-blue-600 hover:text-blue-700">
                  # creativework
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Portfolio
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Find People
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Groups
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Showcase
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Learning
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                Help
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </footer>
    </div>
  );
}
