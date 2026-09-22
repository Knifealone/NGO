import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Heart, HeartHandshake, ArrowRight, ChevronRight, 
  Phone, Mail, MapPin, Utensils, Users, BookOpen, Camera, Target, Calendar, Play, Quote
} from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Activities', href: '#activities' },
    { name: 'Administration', href: '#administration' },
    { name: 'Speeches', href: '#speeches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added a gap-6 to force space between the logo side and the nav side */}
        <div className="flex justify-between items-center gap-6">
          
          {/* Custom Image Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img 
              src="/swami.jpg" 
              alt="Swami Vivekananda Logo" 
              className="h-10 w-10 lg:h-12 lg:w-12 object-cover rounded-full border-2 border-[#FF671F] shadow-sm flex-shrink-0"
              onError={(e) => {
                e.target.src = 'https://placehold.co/100x100/FF671F/white?text=Logo'; 
              }}
            />
            {/* Adjusted text sizing to prevent overflow on medium screens */}
            <span className="font-extrabold text-base lg:text-lg xl:text-xl tracking-tight text-gray-900 leading-tight">
              Swami Vivekananda <br className="hidden lg:block xl:hidden" /><span className="text-[#FF671F]">Seva Paristhan</span>
            </span>
          </div>

          {/* Desktop Nav */}
          {/* Changed space-x-8 to space-x-4 on lg screens to save space, jumps to space-x-8 on xl screens */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-[#FF671F] font-medium transition-colors whitespace-nowrap text-sm xl:text-base">
                {link.name}
              </a>
            ))}
            <button className="bg-[#FF671F] hover:bg-[#e55c1b] text-white px-5 py-2 xl:px-6 xl:py-2.5 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap text-sm xl:text-base">
              <Heart className="w-4 h-4 flex-shrink-0" /> Donate Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center flex-shrink-0">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-gray-700 hover:text-[#FF671F] font-medium border-b border-gray-50">
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-[#FF671F] text-white px-6 py-3 rounded-full font-bold flex justify-center items-center gap-2">
              <Heart className="w-4 h-4" /> Donate Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FF671F] overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
          Empowering Lives, <span className="text-orange-200">Building Futures</span>
        </h1>
        <p className="text-xl text-orange-50 mb-10 leading-relaxed">
          Join our mission to provide food, education, and shelter to those in need. Together, we can create a sustainable impact in our communities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white hover:bg-orange-50 text-[#FF671F] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
            Support Our Cause <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white text-white hover:text-[#FF671F] px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center gap-2">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, isDark }) => (
  <div className="text-center mb-16">
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
    <div className={`w-24 h-1 mx-auto rounded-full mb-6 ${isDark ? 'bg-white' : 'bg-[#FF671F]'}`}></div>
    {subtitle && <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-orange-100' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#FF671F] rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
          <img 
            src="/swami.jpg" 
            alt="About Swami Vivekananda Seva Paristhan" 
            className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover border-4 border-white"
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x600/FF671F/white?text=About+Us'; 
            }}
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
          <div className="w-20 h-1 bg-[#FF671F] rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Inspired by the timeless ideals of Swami Vivekananda, the Swami Vivekananda Seva Paristhan was established to serve humanity. We believe that true worship lies in uplifting those who are marginalized and deprived of basic necessities.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Target className="w-6 h-6 text-[#FF671F] flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 block">Eradicate Hunger</strong>
                <span className="text-gray-600">Ensuring no child is deprived of education due to a lack of food.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <HeartHandshake className="w-6 h-6 text-[#FF671F] flex-shrink-0 mt-1" />
              <div>
                <strong className="text-gray-900 block">Community Empowerment</strong>
                <span className="text-gray-600">Building self-reliant communities through education and healthcare.</span>
              </div>
            </li>
          </ul>
          <button className="bg-transparent border-2 border-[#FF671F] text-[#FF671F] hover:bg-[#FF671F] hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
            Read Our Full Story
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Programs = () => {
  const programs = [
    { title: "Mid-Day Meals", desc: "Providing nutritious meals to school children to eradicate classroom hunger.", icon: <Utensils className="w-6 h-6" /> },
    { title: "Education For All", desc: "Sponsoring education materials and tutoring for underprivileged students.", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Community Health", desc: "Organizing free medical camps and health awareness drives in rural areas.", icon: <HeartHandshake className="w-6 h-6" /> }
  ];

  return (
    <section id="programs" className="py-20 bg-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Core Programs" subtitle="Targeted initiatives designed to address the most pressing needs of our society." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-orange-100 group">
              <div className="w-14 h-14 bg-[#FF671F]/10 rounded-xl flex items-center justify-center text-[#FF671F] mb-6 group-hover:bg-[#FF671F] group-hover:text-white transition-colors">
                {prog.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{prog.title}</h3>
              <p className="text-gray-600 mb-6">{prog.desc}</p>
              <a href="#" className="text-[#FF671F] font-bold flex items-center gap-2 hover:text-[#e55c1b]">
                Read More <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  const activities = [
    { title: "Mega Food Drive", date: "Sept 15, 2026", desc: "Distributed over 5,000 hot meals in marginalized areas across the city.", imgPlaceholder: "Food Drive" },
    { title: "Free Health Camp", date: "Sept 10, 2026", desc: "Provided free checkups and medicines to 500+ elderly individuals.", imgPlaceholder: "Health Camp" },
    { title: "School Kit Distribution", date: "Sept 5, 2026", desc: "Handed out backpacks and stationery to 1,000 underprivileged students.", imgPlaceholder: "School Kits" }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Recent Activities" subtitle="See our volunteers in action, making a real difference on the ground." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => (
            <div key={idx} className="bg-orange-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-orange-100 group">
              <div className="h-48 bg-orange-200 flex flex-col items-center justify-center relative overflow-hidden">
                <Camera className="w-10 h-10 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-orange-500 font-medium">{act.imgPlaceholder} Photo</span>
                <div className="absolute inset-0 bg-[#FF671F]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[#FF671F] mb-3">
                  <Calendar className="w-4 h-4" /> {act.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{act.title}</h3>
                <p className="text-gray-600 mb-6">{act.desc}</p>
                <a href="#" className="text-gray-900 font-bold flex items-center gap-2 hover:text-[#FF671F] transition-colors">
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#FF671F] text-[#FF671F] hover:bg-[#FF671F] hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
            See All Activities
          </button>
        </div>
      </div>
    </section>
  );
};

const Administration = () => (
  <section id="administration" className="py-20 bg-orange-50 border-t border-orange-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Administration & Board" subtitle="Guided by experienced leaders dedicated to social transformation." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((member) => (
          <div key={member} className="text-center group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-orange-100 transition-all">
            <div className="w-32 h-32 mx-auto rounded-full bg-orange-100 mb-6 overflow-hidden relative border-4 border-white shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="w-12 h-12 text-[#FF671F]/50" />
              </div>
            </div>
            <h4 className="text-lg font-bold text-gray-900">Board Member {member}</h4>
            <p className="text-[#FF671F] font-medium mt-1">Trustee</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Speeches = () => (
  <section id="speeches" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Inspiring Words" subtitle="Listen to the speeches and messages that drive our mission forward." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Featured Speech Video */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer min-h-[300px] flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 bg-[#FF671F]/20 group-hover:bg-[#FF671F]/10 transition-colors z-10"></div>
          {/* Fallback pattern for video thumbnail */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
          
          <div className="relative z-20 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-[#FF671F] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,103,31,0.5)]">
              <Play className="w-8 h-8 ml-1" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Annual Foundation Day Speech</h3>
            <p className="text-gray-300">Watch our Founder discuss our vision for the upcoming year.</p>
          </div>
        </div>

        {/* Quotes List */}
        <div className="space-y-6 flex flex-col justify-between">
          {[
            { quote: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
            { quote: "Service to humanity is the truest form of worship. We must dedicate ourselves to the upliftment of the poor and the marginalized.", author: "Board President" }
          ].map((item, idx) => (
            <div key={idx} className="bg-orange-50 p-8 rounded-2xl border border-orange-100 relative h-full flex flex-col justify-center shadow-sm">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-orange-200/50" />
              <p className="text-gray-800 text-lg italic mb-6 relative z-10 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-orange-100 shadow-sm">
                  <Users className="w-6 h-6 text-[#FF671F]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.author}</h4>
                  <p className="text-sm text-[#FF671F] font-medium">Inspirational Message</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-20 bg-[#FF671F]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Media Gallery" isDark={true} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
          <div key={img} className="aspect-square bg-orange-700/40 rounded-lg flex items-center justify-center hover:bg-orange-600/50 transition-colors cursor-pointer group">
            <Camera className="w-8 h-8 text-orange-200 group-hover:text-white transition-colors" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(124592);

  useEffect(() => {
    const localVisits = parseInt(localStorage.getItem('totalVisits') || '0', 10);
    const newVisits = localVisits + 1;
    localStorage.setItem('totalVisits', newVisits.toString());
    setVisitorCount(124592 + newVisits);
  }, []);

  return (
    <footer id="contact" className="bg-black text-gray-300 pt-20 pb-10 border-t-4 border-[#FF671F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/swami.jpg" 
                alt="Swami Vivekananda Logo" 
                className="h-10 w-10 object-cover rounded-full border border-[#FF671F]"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/100x100/FF671F/white?text=Logo'; 
                }}
              />
              <span className="font-extrabold text-xl md:text-2xl text-white leading-tight">
                Swami Vivekananda <br/><span className="text-[#FF671F] text-lg">Seva Paristhan</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dedicated to uplifting the marginalized through sustainable welfare programs across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-[#FF671F] transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-[#FF671F] transition-colors">Our Programs</a></li>
              <li><a href="#activities" className="hover:text-[#FF671F] transition-colors">Recent Activities</a></li>
              <li><a href="#administration" className="hover:text-[#FF671F] transition-colors">Administration</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF671F] flex-shrink-0 mt-1" />
                <span>123 NGO Bhavan, Social Welfare Sector, City - 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF671F] flex-shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF671F] flex-shrink-0" />
                <span>contact@svsparisthan.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on our campaigns.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-[#FF671F]" />
              <button className="bg-[#FF671F] hover:bg-[#e55c1b] px-4 py-2 rounded-r-md transition-colors">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Total Visitor Counter */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4 bg-gray-900/50 px-8 py-4 rounded-2xl border border-gray-800 shadow-xl">
            <div className="bg-[#FF671F]/10 p-3 rounded-full">
              <Users className="w-6 h-6 text-[#FF671F]" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Total Visitors</span>
              <span className="text-white font-bold text-3xl tracking-tight leading-none">
                {visitorCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Swami Vivekananda Seva Paristhan. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FF671F] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Activities />
        <Administration />
        <Speeches />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}