'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const team = [
    {
      name: "Maria Santos",
      position: "Principal Architect",
      education: "Master of Architecture, University of the Philippines",
      experience: "15+ years",
      specialization: "Tropical Architecture, Sustainable Design",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
      bio: "Maria leads our design philosophy with a focus on creating architecture that responds to the Philippine climate and culture."
    },
    {
      name: "Carlos Mendoza",
      position: "Design Director",
      education: "Bachelor of Architecture, Ateneo de Manila",
      experience: "12+ years",
      specialization: "Residential Design, Project Management",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Carlos brings innovative design solutions and ensures seamless project execution from concept to completion."
    },
    {
      name: "Ana Reyes",
      position: "Senior Architect",
      education: "Master of Architecture, De La Salle University",
      experience: "10+ years",
      specialization: "Interior Design, Space Planning",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5dc?w=400&h=400&fit=crop",
      bio: "Ana specializes in creating functional and beautiful interior spaces that enhance the quality of life for our clients."
    },
    {
      name: "Roberto Cruz",
      position: "Sustainability Consultant",
      education: "Environmental Engineering, UP Diliman",
      experience: "8+ years",
      specialization: "Green Building, Energy Efficiency",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Roberto ensures all our projects meet the highest standards of environmental sustainability and energy efficiency."
    }
  ];

  const timeline = [
    {
      year: "2003",
      title: "Foundation",
      description: "Fourth Architects was founded in Sorsogon City with a vision to create exceptional tropical architecture."
    },
    {
      year: "2008",
      title: "First Major Project",
      description: "Completed our first large-scale residential development, establishing our reputation for quality design."
    },
    {
      year: "2012",
      title: "Sustainable Focus",
      description: "Integrated sustainable design principles into all projects, becoming pioneers in green architecture in the region."
    },
    {
      year: "2016",
      title: "Regional Expansion",
      description: "Extended our services across the Bicol region, completing projects in multiple provinces."
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Adopted advanced 3D modeling and virtual reality technologies to enhance client experience."
    },
    {
      year: "2024",
      title: "Today",
      description: "Continuing to push boundaries in tropical architecture with 50+ completed projects and numerous awards."
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We continuously explore new design solutions and technologies to create cutting-edge architecture.",
      icon: "💡"
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility is at the core of every design decision we make.",
      icon: "🌿"
    },
    {
      title: "Cultural Sensitivity",
      description: "We honor Filipino heritage while embracing contemporary design principles.",
      icon: "🏛️"
    },
    {
      title: "Quality",
      description: "We maintain the highest standards of design excellence and construction quality.",
      icon: "⭐"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Navbar />

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
              FOURTH <span className="text-fourth-yellow">STUDIO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative architects and builders from Sorsogon, creating exceptional tropical architecture since 2003
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">OUR STORY</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  Fourth Architects was born from a passion for creating architecture that truly belongs
                  to the Philippines. Founded in 2003 in the beautiful province of Sorsogon, we began
                  with a simple yet ambitious vision: to design buildings that celebrate our tropical
                  climate while meeting the evolving needs of modern Filipino families.
                </p>
                <p>
                  Over two decades, we have grown from a small local practice to a respected regional
                  firm, completing over 50 projects across the Bicol region and beyond. Our work spans
                  residential homes, commercial buildings, and public spaces, each designed with careful
                  attention to environmental sustainability and cultural context.
                </p>
                <p>
                  Today, we continue to push the boundaries of tropical architecture, integrating
                  cutting-edge technology with time-tested design principles to create spaces that
                  are both innovative and deeply rooted in place.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden">
                <img
                  src="https://livingasean.com/wp-content/uploads/2024/05/DJI_0582a-scaled.jpg"
                  alt="Fourth Architects studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-fourth-yellow p-6 rounded-lg">
                <div className="text-3xl font-bold text-black">20+</div>
                <div className="text-sm text-black">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">OUR VALUES</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">OUR JOURNEY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of growth, innovation, and architectural excellence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-fourth-yellow"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <div className="text-2xl font-bold text-fourth-yellow mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-fourth-yellow rounded-full border-4 border-white"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">OUR TEAM</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented professionals who bring your architectural visions to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-fourth-yellow font-medium mb-3">{member.position}</p>

                <div className="text-left space-y-2 text-sm text-gray-600">
                  <p><strong>Education:</strong> {member.education}</p>
                  <p><strong>Experience:</strong> {member.experience}</p>
                  <p><strong>Specialization:</strong> {member.specialization}</p>
                </div>

                <p className="text-gray-600 text-sm mt-4 italic">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg"
                  alt="Fourth Architects philosophy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-display mb-6">OUR PHILOSOPHY</h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  <em>"Architecture should be a response to place, climate, and culture."</em>
                </p>
                <p>
                  We believe that great architecture emerges from understanding the unique
                  characteristics of the Philippine archipelago. Our design philosophy centers
                  on creating buildings that breathe with the tropical climate, celebrate
                  natural materials, and foster community connections.
                </p>
                <p>
                  Every project begins with careful study of the site, the client's needs,
                  and the broader cultural context. We design not just buildings, but
                  environments that enhance the daily life of their occupants while
                  treading lightly on the earth.
                </p>
                <p>
                  Through thoughtful integration of passive design strategies, local
                  craftsmanship, and contemporary technology, we create architecture
                  that is both timeless and thoroughly modern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Let's Create Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to embark on an architectural journey that celebrates both innovation and tradition?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-fourth-yellow text-black px-8 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors">
              Start a Conversation
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
