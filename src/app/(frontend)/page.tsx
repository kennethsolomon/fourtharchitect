'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const awardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: 'TROPICAL VILLA',
      location: 'Sorsogon Bay',
      image: 'https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg',
      year: '2024',
    },
    {
      title: 'MODERN BEACH HOUSE',
      location: 'Albay Coast',
      image: 'https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg',
      year: '2023',
    },
    {
      title: 'CONCRETE RESIDENCE',
      location: 'Legazpi City',
      image:
        'https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg',
      year: '2023',
    },
    {
      title: 'URBAN TOWNHOUSE',
      location: 'Naga City',
      image:
        'https://i0.wp.com/architropics.com/wp-content/uploads/2021/07/veranda-house-HOV_07.jpg?resize=600%2C821&ssl=1',
      year: '2022',
    },
  ]

  const awards = [
    {
      year: '2024',
      title: 'Philippine Institute of Architects Award',
      project: 'Tropical Villa',
      category: 'Residential Excellence',
    },
    {
      year: '2023',
      title: 'ASEAN Architecture Awards',
      project: 'Modern Beach House',
      category: 'Sustainable Design',
    },
    {
      year: '2023',
      title: 'National Architecture Competition',
      project: 'Concrete Residence',
      category: 'Innovation in Design',
    },
    {
      year: '2022',
      title: 'Regional Design Awards',
      project: 'Urban Townhouse',
      category: 'Best Tropical Adaptation',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg')`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-70"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-3 h-3 bg-white/30 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>

        <div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            FOURTH <span className="text-yellow-400">ARCHITECTS</span>
          </h1>
          <p
            className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            We design the world powered by tradition, innovation and tropical excellence
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() =>
                document.getElementById('main-sections')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="text-white text-sm tracking-wide hover:text-yellow-400 transition-colors"
            >
              <div className="mb-2">
                <svg
                  className="w-6 h-6 mx-auto animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              Scroll down
            </button>
          </div>
        </div>
      </section>

      {/* Main Sections Preview */}
      <section id="main-sections" className="py-20 bg-stone-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Services Section */}
            <Link
              href="/services"
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-96 mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg"
                  alt="Architectural Services"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Architectural Services</h3>
                  <p className="text-sm opacity-90">Comprehensive design solutions</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">FOURTH SERVICES</h3>
                  <p className="text-gray-600">Professional architectural and building services</p>
                </div>
                <svg
                  className="w-6 h-6 text-yellow-400 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            {/* Projects Section */}
            <Link
              href="/projects"
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-96 mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg"
                  alt="Project Portfolio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ transform: `translateY(${scrollY * 0.03}px)` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Project Portfolio</h3>
                  <p className="text-sm opacity-90">Tropical modern excellence</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">FOURTH PROJECTS</h3>
                  <p className="text-gray-600">
                    Award-winning architectural projects across the Philippines
                  </p>
                </div>
                <svg
                  className="w-6 h-6 text-yellow-400 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>

            {/* About Section */}
            <Link
              href="/projects"
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-96 mb-6 overflow-hidden rounded-lg">
                <img
                  src="https://livingasean.com/wp-content/uploads/2024/05/DJI_0582a-scaled.jpg"
                  alt="About Us"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ transform: `translateY(${scrollY * 0.07}px)` }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">About Us</h3>
                  <p className="text-sm opacity-90">Our story & philosophy</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">FOURTH STUDIO</h3>
                  <p className="text-gray-600">Innovative architects and builders from Sorsogon</p>
                </div>
                <svg
                  className="w-6 h-6 text-yellow-400 group-hover:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 bg-white relative overflow-hidden">
        {/* Parallax Decorative Elements */}
        <div
          className="absolute top-10 right-20 w-24 h-24 border border-yellow-400/20 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-black">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                STUDIO OF ARCHITECTURE
                <br />
                AND DESIGN
              </h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h4 className="font-semibold text-black mb-2">About us:</h4>
                  <p>
                    Fourth Architects has implemented numerous projects across the Philippines. Our
                    main areas of work are architectural design, interior design, project
                    completion, and sustainable building solutions. We work in our own style that
                    combines Filipino authenticity, contemporary design, tropical adaptation, and
                    environmental consciousness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">Specializations:</h4>
                  <p>
                    Residential Architecture, Commercial Design, Tropical Modernism, Sustainable
                    Building, Interior Design, Project Management.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center text-black hover:text-yellow-400 transition-colors group"
                >
                  <span className="border-b border-black group-hover:border-yellow-400 pb-1">
                    MORE ABOUT THE STUDIO
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div
                className="aspect-square bg-stone-100 rounded-lg overflow-hidden"
                style={{ transform: `translateY(${scrollY * 0.04}px)` }}
              >
                <img
                  src="https://i0.wp.com/architropics.com/wp-content/uploads/2021/07/veranda-house-HOV_07.jpg?resize=600%2C821&ssl=1"
                  alt="Fourth Architects project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded text-sm">
                (1/12)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-20 bg-stone-50 relative overflow-hidden text-black">
        {/* Parallax Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,0.1) 35px, rgba(0,0,0,0.1) 70px)`,
            transform: `translateX(${scrollY * 0.02}px)`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-12">
            AWARDS<sup className="text-lg">({awards.length})</sup>
          </h2>

          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="grid md:grid-cols-12 gap-6 items-center border-b border-gray-200 pb-6"
              >
                <div className="md:col-span-1 text-2xl font-light text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="md:col-span-5">
                  <h4 className="font-semibold text-black mb-1 hover:text-yellow-400 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-sm text-gray-600">{award.category}</p>
                </div>
                <div className="md:col-span-4 text-gray-600">
                  {award.project} ({award.year})
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <svg
                    className="w-6 h-6 text-yellow-400 hover:translate-x-2 transition-transform cursor-pointer"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="inline-flex items-center text-black hover:text-yellow-400 transition-colors group">
              <span className="border-b border-black group-hover:border-yellow-400 pb-1">
                MORE AWARDS
              </span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 bg-white relative overflow-hidden text-black">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-1/4 w-8 h-8 border-2 border-yellow-400/30 transform rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-6 h-6 bg-stone-200 rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">PORTFOLIO</h2>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-4 hover:border-yellow-400 transition-colors cursor-pointer group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-lg group-hover:text-yellow-400 transition-colors">
                          {String(index + 1).padStart(2, '0')}. {project.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{project.location}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center text-black hover:text-yellow-400 transition-colors group"
                >
                  <span className="border-b border-black group-hover:border-yellow-400 pb-1">
                    ALL PROJECTS
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded text-xs">
                    ({index + 1}/{projects.length})
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-stone-900 text-white py-16 relative overflow-hidden">
        {/* Parallax Footer Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-800 to-stone-900"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-8">FOURTH ARCHITECTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">E:</h4>
              <a
                href="mailto:office@fourtharchitects.com"
                className="hover:text-yellow-400 transition-colors"
              >
                office@fourtharchitects.com
              </a>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">T:</h4>
              <a href="tel:+639123456789" className="hover:text-yellow-400 transition-colors">
                +63 912 345 6789 (PH)
              </a>
            </div>

            <div>
              <h4 className="text-yellow-400 font-semibold mb-4">L:</h4>
              <p className="text-gray-300">Sorsogon City, Sorsogon, Philippines</p>
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <Link
              href="/contact"
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors group"
            >
              <span className="border-b border-white group-hover:border-yellow-400 pb-1">
                CONTACT US
              </span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>FOURTH ARCHITECTS © 2003-2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

