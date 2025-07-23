"use client";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                MaraX Ventures
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8"></nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Investing in Tomorrow's Technology
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            MaraX Ventures partners with visionary entrepreneurs building the
            next generation of technology-driven platforms and industries
          </p>
          <a
            href="mailto:info@marax.africa"
            className="bg-white text-[#EA4335] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in breakthrough technologies that will define the future
              of industry and society
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-[#4285F4] mb-4">
                <i className="fas fa-robot text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Robotics</h4>
              <p className="text-gray-600">
                Autonomous systems, industrial automation, and next-generation
                robotics platforms transforming manufacturing and services
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-[#EA4335] mb-4">
                <i className="fas fa-industry text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Advanced Manufacturing
              </h4>
              <p className="text-gray-600">
                3D printing, smart factories, and revolutionary production
                technologies reshaping how we make things
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-[#FBBC05] mb-4">
                <i className="fas fa-atom text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Quantum Computing
              </h4>
              <p className="text-gray-600">
                Quantum processors, algorithms, and applications that will
                unlock unprecedented computational power
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-[#34A853] mb-4">
                <i className="fas fa-leaf text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Renewable Energy
              </h4>
              <p className="text-gray-600">
                Solar, wind, battery storage, and clean energy technologies
                driving the transition to sustainable power
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-[#EA4335] mb-4">
                <i className="fas fa-brain text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Artificial Intelligence
              </h4>
              <p className="text-gray-600">
                Machine learning, neural networks, and AI platforms that enhance
                human capabilities across industries
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="text-[#FBBC05] mb-4">
                <i className="fas fa-gem text-4xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Rare Earth Materials
              </h4>
              <p className="text-gray-600">
                Mining, processing, and applications of critical materials
                essential for advanced technology systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About MaraX Ventures
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                We are a technology-focused venture capital firm dedicated to
                identifying and supporting the most promising startups in
                emerging technology sectors. Our team combines deep technical
                expertise with extensive industry experience to help
                entrepreneurs build world-changing companies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From early-stage investments to growth capital, we provide not
                just funding but strategic guidance, technical mentorship, and
                access to our extensive network of industry leaders and
                technical experts.
              </p>
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <div className="text-3xl font-bold text-[#4285F4] mb-2">
                    20+
                  </div>
                  <div className="text-gray-600">Portfolio Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#34A853] mb-2">
                    $50M+
                  </div>
                  <div className="text-gray-600">Assets Under Management</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Investment Criteria
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#4285F4] mr-3"></i>
                  Cutting-edge tech with the power to disrupt and redefine
                  markets
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#EA4335] mr-3"></i>
                  Visionary teams with the grit and genius to make it happen
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FBBC05] mr-3"></i>
                  Scalable models that can skyrocket to global impact
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#34A853] mr-3"></i>
                  Potential to lead the charge in industry transformation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build the Future?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            If you're working on breakthrough technology in our focus areas,
            we'd love to hear from you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@marax.africa"
              className="bg-[#4285F4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#357AE8] transition-colors"
            >
              Submit Your Pitch
            </a>
            <a
              href="mailto:info@marax.africa"
              className="border border-[#EA4335] text-[#EA4335] px-8 py-3 rounded-lg font-semibold hover:bg-[#F4B400] transition-colors"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">MaraX Ventures</h4>
              <p className="text-gray-400">
                Investing in the technologies that will shape tomorrow
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <a href="mailto:info@marax.africa" className="text-gray-400 mb-2">
                info@marax.africa
              </a>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <i className="fab fa-twitter text-gray-400 hover:text-white cursor-pointer"></i>
                <i className="fab fa-linkedin text-gray-400 hover:text-white cursor-pointer"></i>
                <i className="fab fa-medium text-gray-400 hover:text-white cursor-pointer"></i>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MaraX Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;