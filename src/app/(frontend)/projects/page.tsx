'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function ProjectsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = ['All', 'Residential', 'Commercial', 'Sustainable']

  const projects = [
    {
      id: 1,
      slug: 'tropical-villa',
      title: 'TROPICAL VILLA',
      location: 'Sorsogon Bay',
      year: '2024',
      category: 'Residential',
      type: 'Private Residence',
      area: '450 sqm',
      description:
        'A contemporary tropical villa that maximizes natural ventilation and showcases stunning bay views through large glass openings.',
      images: [
        'https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg',
        'https://i0.wp.com/architropics.com/wp-content/uploads/2021/07/veranda-house-HOV_07.jpg?resize=600%2C821&ssl=1',
      ],
      awards: ['Philippine Institute of Architects Award 2024'],
    },
    {
      id: 2,
      slug: 'modern-beach-house',
      title: 'MODERN BEACH HOUSE',
      location: 'Albay Coast',
      year: '2023',
      category: 'Residential',
      type: 'Vacation Home',
      area: '320 sqm',
      description:
        'A sustainable beach house designed to withstand coastal conditions while providing a seamless indoor-outdoor living experience.',
      images: [
        'https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg',
        'https://livingasean.com/wp-content/uploads/2024/05/DJI_0582a-scaled.jpg',
      ],
      awards: ['ASEAN Architecture Awards 2023'],
    },
    {
      id: 3,
      slug: 'concrete-residence',
      title: 'CONCRETE RESIDENCE',
      location: 'Legazpi City',
      year: '2023',
      category: 'Residential',
      type: 'Urban Family Home',
      area: '280 sqm',
      description:
        'A minimalist concrete residence that creates private courtyards and maximizes natural light in an urban setting.',
      images: [
        'https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg',
      ],
      awards: ['National Architecture Competition 2023'],
    },
    {
      id: 4,
      title: 'URBAN TOWNHOUSE',
      slug: 'urban-townhouse',
      location: 'Naga City',
      year: '2022',
      category: 'Residential',
      type: 'Townhouse Development',
      area: '180 sqm',
      description:
        'A series of compact townhouses that demonstrate tropical adaptation in dense urban environments.',
      images: [
        'https://www.designboom.com/wp-content/dbsub/441432/2020-11-24/viewpoint-house-4-5fbd4792e39d8.jpg',
      ],
      awards: ['Regional Design Awards 2022'],
    },
    {
      id: 5,
      title: 'COMMUNITY CENTER',
      slug: 'community-center',
      location: 'Sorsogon City',
      year: '2023',
      category: 'Commercial',
      type: 'Public Building',
      area: '800 sqm',
      description:
        'A multi-purpose community center designed to serve as a cultural hub with flexible spaces for various activities.',
      images: [
        'https://architropics.com/wp-content/uploads/2020/11/modern-contemporary-houses-tropical.jpg',
      ],
      awards: [],
    },
    {
      id: 6,
      title: 'ECO-RESORT PAVILION',
      slug: 'eco-resort-pavilion',
      location: 'Donsol, Sorsogon',
      year: '2024',
      category: 'Sustainable',
      type: 'Hospitality',
      area: '1200 sqm',
      description:
        'An eco-friendly resort pavilion that integrates renewable energy systems and local materials.',
      images: ['https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg'],
      awards: [],
    },
  ]

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-black mb-8 group"
            >
              <svg
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              BACK TO HOME
            </Link>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              FOURTH <span className="text-fourth-yellow">PROJECTS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              A showcase of our architectural excellence across the Philippines, demonstrating
              innovation in tropical design and sustainable building practices.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border transition-colors ${
                    selectedCategory === category
                      ? 'bg-fourth-yellow text-black border-fourth-yellow'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-fourth-yellow hover:text-fourth-yellow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group cursor-pointer hover-scale"
              >
                <div className="relative aspect-square bg-stone-100 rounded-lg overflow-hidden mb-6">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm">
                    {project.year}
                  </div>
                  {project.awards.length > 0 && (
                    <div className="absolute top-4 right-4 bg-fourth-yellow px-2 py-1 rounded text-xs text-black font-semibold">
                      AWARD WINNER
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-fourth-yellow font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-fourth-yellow transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                  <p className="text-gray-700 text-sm mb-3">{project.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{project.type}</span>
                    <span>{project.area}</span>
                  </div>

                  {project.awards.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <p className="text-xs text-fourth-yellow font-semibold">
                        {project.awards[0]}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display text-fourth-yellow mb-2">50+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display text-fourth-yellow mb-2">15+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display text-fourth-yellow mb-2">10+</div>
              <p className="text-gray-600">Awards Won</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display text-fourth-yellow mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">FEATURED PROJECT</h2>
              <h3 className="text-2xl font-semibold mb-4">{projects[0].title}</h3>
              <p className="text-gray-600 mb-6">
                Our latest residential project showcases innovative tropical design principles,
                incorporating passive cooling strategies and sustainable materials to create a
                comfortable living environment that responds to the Philippine climate.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-gray-600">{projects[0].location}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Year</h4>
                  <p className="text-gray-600">{projects[0].year}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Type</h4>
                  <p className="text-gray-600">{projects[0].type}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Area</h4>
                  <p className="text-gray-600">{projects[0].area}</p>
                </div>
              </div>

              <Link
                href={`/projects/${projects[0].slug}`}
                className="inline-flex items-center text-black hover:text-fourth-yellow transition-colors group"
              >
                <span className="border-b border-black group-hover:border-fourth-yellow pb-1">
                  VIEW PROJECT DETAILS
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

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
                  <img
                    src={projects[0].images[0]}
                    alt="Featured project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-video bg-stone-100 rounded-lg overflow-hidden">
                  <img
                    src={projects[0].images[1]}
                    alt="Featured project interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden">
                <img
                  src={projects[1].images[0]}
                  alt="Featured project exterior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s discuss how we can create something extraordinary together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-fourth-yellow text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded font-semibold hover:border-fourth-yellow hover:text-fourth-yellow transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-8">FOURTH ARCHITECTS</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-fourth-yellow font-semibold mb-4">E:</h4>
              <a
                href="mailto:office@fourtharchitects.com"
                className="hover:text-fourth-yellow transition-colors"
              >
                office@fourtharchitects.com
              </a>
            </div>

            <div>
              <h4 className="text-fourth-yellow font-semibold mb-4">T:</h4>
              <a href="tel:+639123456789" className="hover:text-fourth-yellow transition-colors">
                +63 912 345 6789 (PH)
              </a>
            </div>

            <div>
              <h4 className="text-fourth-yellow font-semibold mb-4">L:</h4>
              <p className="text-gray-300">Sorsogon City, Sorsogon, Philippines</p>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>FOURTH ARCHITECTS © 2003-2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
