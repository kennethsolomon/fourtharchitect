import Link from 'next/link';
import { ProjectNavigation, ImageGallery } from './ClientComponents';

interface ProjectData {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  type: string;
  area: string;
  client: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  awards: string[];
  features: string[];
  team: string[];
}

const projectsData: Record<string, ProjectData> = {
  'tropical-villa': {
    id: 'tropical-villa',
    title: 'TROPICAL VILLA',
    location: 'Sorsogon Bay',
    year: '2024',
    category: 'Residential',
    type: 'Private Residence',
    area: '450 sqm',
    client: 'Private Family',
    duration: '18 months',
    description: 'A contemporary tropical villa that maximizes natural ventilation and showcases stunning bay views through large glass openings. The design integrates traditional Filipino architectural elements with modern sustainable technologies.',
    challenge: 'Design a family home that responds to the tropical climate while providing privacy and stunning bay views in a dense coastal environment.',
    solution: 'We created a multi-level design with strategic openings for cross-ventilation, elevated living spaces for bay views, and integrated landscaping for natural cooling and privacy.',
    result: 'A award-winning tropical residence that reduces energy consumption by 40% while providing exceptional comfort and connection to the natural environment.',
    images: [
      'https://architropics.com/wp-content/uploads/2020/06/YNE-House_02.jpg',
      'https://i0.wp.com/architropics.com/wp-content/uploads/2021/07/veranda-house-HOV_07.jpg?resize=600%2C821&ssl=1',
      'https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg',
      'https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg'
    ],
    awards: ['Philippine Institute of Architects Award 2024', 'Green Building Council Philippines Recognition'],
    features: [
      'Passive cooling design',
      'Natural ventilation systems',
      'Local hardwood finishes',
      'Rainwater harvesting',
      'Solar panel integration',
      'Native plant landscaping'
    ],
    team: ['Maria Santos - Principal Architect', 'Carlos Mendoza - Design Director', 'Ana Reyes - Interior Design']
  },
  'modern-beach-house': {
    id: 'modern-beach-house',
    title: 'MODERN BEACH HOUSE',
    location: 'Albay Coast',
    year: '2023',
    category: 'Residential',
    type: 'Vacation Home',
    area: '320 sqm',
    client: 'Tourism Developer',
    duration: '14 months',
    description: 'A sustainable beach house designed to withstand coastal conditions while providing a seamless indoor-outdoor living experience. The structure elevates living spaces above potential storm surge levels.',
    challenge: 'Create a resilient coastal residence that can withstand typhoons while maintaining luxury comfort and environmental sustainability.',
    solution: 'Elevated design with reinforced concrete pillars, storm-resistant glazing, and integrated renewable energy systems with backup power.',
    result: 'A resilient beachfront home that has successfully weathered multiple typhoon seasons while maintaining zero downtime for guests.',
    images: [
      'https://livingasean.com/wp-content/uploads/2024/05/DESIGN-Casa-Borbon-7.jpg',
      'https://livingasean.com/wp-content/uploads/2024/05/DJI_0582a-scaled.jpg',
      'https://architropics.com/wp-content/uploads/2020/11/modern-contemporary-houses-tropical.jpg'
    ],
    awards: ['ASEAN Architecture Awards 2023', 'Sustainable Design Recognition'],
    features: [
      'Storm-resistant design',
      'Elevated foundation',
      'Solar energy system',
      'Natural material palette',
      'Outdoor living integration',
      'Water recycling system'
    ],
    team: ['Maria Santos - Principal Architect', 'Roberto Cruz - Sustainability Consultant']
  },
  'concrete-residence': {
    id: 'concrete-residence',
    title: 'CONCRETE RESIDENCE',
    location: 'Legazpi City',
    year: '2023',
    category: 'Residential',
    type: 'Urban Family Home',
    area: '280 sqm',
    client: 'Young Professional Family',
    duration: '12 months',
    description: 'A minimalist concrete residence that creates private courtyards and maximizes natural light in an urban setting. The design emphasizes clean lines and functional spaces.',
    challenge: 'Design a private family oasis in a dense urban environment while maintaining connection to nature and maximizing natural light.',
    solution: 'Strategic courtyard placement, clerestory windows, and green walls create private outdoor spaces and bring nature into the urban home.',
    result: 'A serene urban retreat that provides privacy and natural beauty while efficiently using a compact urban lot.',
    images: [
      'https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/9d640d8c-d008-4f0f-aa43-af200eaa06f8/Design+Anthology+-+Owen+Residence+-+Atelier+Almario%2C+Philippines_DSF0175.jpg',
      'https://architropics.com/wp-content/uploads/2020/11/modern-contemporary-houses-tropical.jpg'
    ],
    awards: ['National Architecture Competition 2023'],
    features: [
      'Minimalist concrete design',
      'Private courtyards',
      'Natural lighting strategy',
      'Green wall systems',
      'Efficient space planning',
      'Modern interior finishes'
    ],
    team: ['Carlos Mendoza - Design Director', 'Ana Reyes - Interior Design']
  }
};

// Generate static params for all project slugs
export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-fourth-yellow hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ProjectNavigation projectTitle={project.title} />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/projects" className="inline-flex items-center text-gray-600 hover:text-black mb-8 group">
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO PROJECTS
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-6">
                <span className="text-sm text-fourth-yellow font-semibold tracking-wide">
                  {project.category.toUpperCase()}
                </span>
                <h1 className="text-4xl md:text-5xl font-display mt-2 mb-4">{project.title}</h1>
                <p className="text-xl text-gray-600">{project.location} • {project.year}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-2">Type</h4>
                  <p className="text-gray-600">{project.type}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Area</h4>
                  <p className="text-gray-600">{project.area}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Client</h4>
                  <p className="text-gray-600">{project.client}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Duration</h4>
                  <p className="text-gray-600">{project.duration}</p>
                </div>
              </div>

              {project.awards.length > 0 && (
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Awards & Recognition</h4>
                  <div className="space-y-2">
                    {project.awards.map((award, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-fourth-yellow rounded-full mr-3"></div>
                        <span className="text-gray-700">{award}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <ImageGallery images={project.images} projectTitle={project.title} />
          </div>
        </div>
      </section>



      {/* Project Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-display mb-6">Project Overview</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.description}</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-fourth-yellow">Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-fourth-yellow">Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-fourth-yellow">Result</h3>
                <p className="text-gray-600">{project.result}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-fourth-yellow rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Project Team</h3>
                <ul className="space-y-3">
                  {project.team.map((member, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-fourth-yellow rounded-full mr-3"></div>
                      <span className="text-gray-700">{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display mb-12 text-center">Related Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.values(projectsData)
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link key={relatedProject.id} href={`/projects/${relatedProject.id}`} className="group">
                  <div className="aspect-square bg-stone-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedProject.images[0]}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-fourth-yellow transition-colors">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{relatedProject.location} • {relatedProject.year}</p>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-black hover:text-fourth-yellow transition-colors group">
              <span className="border-b border-black group-hover:border-fourth-yellow pb-1">
                VIEW ALL PROJECTS
              </span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
