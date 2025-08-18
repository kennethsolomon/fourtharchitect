'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  projectTitle: string;
}

export function ProjectNavigation({ projectTitle }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
            <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-fourth-yellow font-semibold">
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
  );
}

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden">
          <img
            src={images[selectedImage]}
            alt={projectTitle}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded text-sm">
          {selectedImage + 1}/{images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square bg-stone-100 rounded-lg overflow-hidden transition-all ${
                  selectedImage === index ? 'ring-2 ring-fourth-yellow' : 'hover:opacity-80'
                }`}
              >
                <img
                  src={image}
                  alt={`${projectTitle} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
