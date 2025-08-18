import Link from 'next/link'

export default function Navbar({isScrolled = true}: any) {
  return (
    <div>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/fourth-architect-logo.jpg"
                alt="Fourth Architects Logo"
                className="h-16 w-auto object-contain rounded-lg"
              />
            </Link>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className={`transition-colors ${
                  isScrolled
                    ? 'text-black hover:text-yellow-500'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`transition-colors ${
                  isScrolled
                    ? 'text-black hover:text-yellow-500'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className={`transition-colors ${
                  isScrolled
                    ? 'text-black hover:text-yellow-500'
                    : 'text-white hover:text-yellow-400'
                }`}
              >
                About
              </Link>
              {/* <Link */}
              {/*   href="/blog" */}
              {/*   className={`transition-colors ${ */}
              {/*     isScrolled */}
              {/*       ? 'text-black hover:text-yellow-500' */}
              {/*       : 'text-white hover:text-yellow-400' */}
              {/*   }`} */}
              {/* > */}
              {/*   Blog */}
              {/* </Link> */}
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg
                className={`w-6 h-6 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
