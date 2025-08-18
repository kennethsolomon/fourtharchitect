'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Design Insights', 'Project Updates', 'Sustainability', 'Tropical Architecture'];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'designing-for-tropical-climate',
      title: 'Designing for the Tropical Climate: Lessons from the Philippines',
      excerpt: 'Exploring the key principles of tropical architecture and how traditional Filipino design wisdom informs modern sustainable building practices.',
      content: '',
      author: 'Maria Santos',
      date: '2024-01-15',
      category: 'Tropical Architecture',
      readTime: '8 min read',
      image: 'https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg',
      tags: ['Tropical Design', 'Sustainability', 'Climate Response']
    },
    {
      id: 2,
      slug: 'sustainable-materials-philippines',
      title: 'Sustainable Materials: A Guide to Local Philippine Resources',
      excerpt: 'Discover how local materials like bamboo, coconut lumber, and recycled concrete can create beautiful, sustainable architecture.',
      content: '',
      author: 'Roberto Cruz',
      date: '2024-01-10',
      category: 'Sustainability',
      readTime: '6 min read',
      image: 'https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg',
      tags: ['Sustainable Materials', 'Local Resources', 'Green Building']
    },
    {
      id: 3,
      slug: 'tropical-villa-case-study',
      title: 'Case Study: Tropical Villa - Sorsogon Bay Project',
      excerpt: 'An in-depth look at our award-winning Tropical Villa project, showcasing innovative passive cooling and natural ventilation strategies.',
      content: '',
      author: 'Carlos Mendoza',
      date: '2024-01-05',
      category: 'Project Updates',
      readTime: '10 min read',
      image: 'https://i0.wp.com/architropics.com/wp-content/uploads/2021/07/veranda-house-HOV_07.jpg?resize=600%2C821&ssl=1',
      tags: ['Case Study', 'Residential Design', 'Award Winner']
    },
    {
      id: 4,
      slug: 'future-of-philippine-architecture',
      title: 'The Future of Philippine Architecture: Embracing Technology and Tradition',
      excerpt: 'How emerging technologies like BIM and sustainable design software are transforming Filipino architecture while honoring cultural heritage.',
      content: '',
      author: 'Ana Reyes',
      date: '2023-12-28',
      category: 'Design Insights',
      readTime: '7 min read',
      image: 'https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg',
      tags: ['Future Tech', 'BIM', 'Cultural Heritage']
    },
    {
      id: 5,
      slug: 'winning-pia-award-2024',
      title: 'Winning the Philippine Institute of Architects Award 2024',
      excerpt: 'Behind the scenes of our award-winning Tropical Villa project and what it means for the future of sustainable Filipino architecture.',
      content: '',
      author: 'Maria Santos',
      date: '2023-12-20',
      category: 'Project Updates',
      readTime: '5 min read',
      image: 'https://livingasean.com/wp-content/uploads/2024/05/DJI_0582a-scaled.jpg',
      tags: ['Awards', 'Recognition', 'Team Achievement']
    },
    {
      id: 6,
      slug: 'passive-cooling-strategies',
      title: 'Passive Cooling Strategies for Tropical Homes',
      excerpt: 'Learn about natural ventilation, thermal mass, and strategic shading techniques that keep homes comfortable without air conditioning.',
      content: '',
      author: 'Roberto Cruz',
      date: '2023-12-15',
      category: 'Sustainability',
      readTime: '9 min read',
      image: 'https://www.designboom.com/wp-content/dbsub/441432/2020-11-24/viewpoint-house-4-5fbd4792e39d8.jpg',
      tags: ['Passive Cooling', 'Energy Efficiency', 'Comfort Design']
    },
    {
      id: 7,
      slug: 'small-space-design-urban-philippines',
      title: 'Small Space, Big Impact: Urban Design in the Philippines',
      excerpt: 'Maximizing functionality and beauty in compact urban lots through thoughtful design and space planning strategies.',
      content: '',
      author: 'Ana Reyes',
      date: '2023-12-10',
      category: 'Design Insights',
      readTime: '6 min read',
      image: 'https://architropics.com/wp-content/uploads/2020/11/modern-contemporary-houses-tropical.jpg',
      tags: ['Urban Design', 'Small Spaces', 'Space Planning']
    },
    {
      id: 8,
      slug: 'fourth-architects-20th-anniversary',
      title: 'Celebrating 20 Years of Fourth Architects',
      excerpt: 'Reflecting on two decades of architectural excellence, from our humble beginnings in Sorsogon to regional recognition.',
      content: '',
      author: 'Fourth Architects Team',
      date: '2023-12-01',
      category: 'Project Updates',
      readTime: '4 min read',
      image: 'https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg',
      tags: ['Anniversary', 'Company History', 'Milestones']
    }
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

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
              <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                Services
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-black transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-fourth-yellow font-semibold">
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
              FOURTH <span className="text-fourth-yellow">INSIGHTS</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Exploring the future of tropical architecture, sustainable design practices,
              and architectural insights from our team of experts.
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

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display mb-12 text-center">Featured Article</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-fourth-yellow text-black px-3 py-1 rounded text-sm font-semibold">
                  {featuredPost.category}
                </span>
                <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
              </div>

              <h3 className="text-3xl font-display mb-4">{featuredPost.title}</h3>
              <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-fourth-yellow rounded-full flex items-center justify-center">
                    <span className="text-black text-sm font-semibold">
                      {featuredPost.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{featuredPost.author}</p>
                    <p className="text-gray-500 text-sm">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center text-black hover:text-fourth-yellow transition-colors group">
                <span className="border-b border-black group-hover:border-fourth-yellow pb-1">
                  READ FULL ARTICLE
                </span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display mb-12 text-center">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-stone-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-fourth-yellow text-black px-2 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-fourth-yellow transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-fourth-yellow rounded-full flex items-center justify-center">
                        <span className="text-black text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-gray-500 text-xs">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="text-fourth-yellow hover:text-yellow-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-display mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights on tropical architecture,
            project updates, and design inspiration.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fourth-yellow focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-fourth-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
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
