'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Architectural Design",
      description: "Complete architectural design services from concept to construction documentation",
      features: [
        "Conceptual Design Development",
        "3D Visualization & Renderings",
        "Construction Documents",
        "Building Permits & Approvals",
        "Tropical Climate Adaptation"
      ],
      image: "https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg"
    },
    {
      title: "Interior Design",
      description: "Creating beautiful and functional interior spaces that reflect your lifestyle",
      features: [
        "Space Planning & Layout",
        "Material & Finish Selection",
        "Custom Furniture Design",
        "Lighting Design",
        "Project Management"
      ],
      image: "https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg"
    },
    {
      title: "Sustainable Building",
      description: "Environmentally conscious design solutions for the tropical climate",
      features: [
        "Passive Cooling Strategies",
        "Natural Ventilation Design",
        "Renewable Energy Integration",
        "Local Material Selection",
        "Water Conservation Systems"
      ],
      image: "https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg"
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight from design to completion",
      features: [
        "Construction Administration",
        "Quality Control & Inspection",
        "Timeline & Budget Management",
        "Contractor Coordination",
        "Final Project Delivery"
      ],
      image: "https://i0.wp.com/architropics.com/wp-content/uploads/2021/07/veranda-house-HOV_07.jpg?resize=600%2C821&ssl=1"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your vision, requirements, and budget"
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Creating initial design concepts and 3D visualizations"
    },
    {
      step: "03",
      title: "Design Development",
      description: "Refining the design with detailed drawings and specifications"
    },
    {
      step: "04",
      title: "Construction Documentation",
      description: "Preparing complete construction drawings and permits"
    },
    {
      step: "05",
      title: "Construction Administration",
      description: "Overseeing construction to ensure design integrity"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-fourth-yellow rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">4th</span>
              </div>
              <span className="text-xl font-heading text-black">Fourth Architects</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-fourth-yellow font-semibold">
                Services
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-black transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-black transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="bg-fourth-yellow text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black mb-8 group">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HOME
            </Link>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              FOURTH <span className="text-fourth-yellow">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive architectural and design services tailored for the tropical Philippine climate
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="mb-6">
                    <span className="text-sm text-fourth-yellow font-semibold tracking-wide">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display mt-2 mb-4">{service.title}</h2>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-fourth-yellow rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">OUR PROCESS</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional architectural solutions
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-fourth-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-black font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your architectural vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-fourth-yellow text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/projects" className="border border-gray-300 text-gray-700 px-8 py-3 rounded font-semibold hover:border-fourth-yellow hover:text-fourth-yellow transition-colors">
              View Our Work
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
              <a href="mailto:office@fourtharchitects.com" className="hover:text-fourth-yellow transition-colors">
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
  );
}
