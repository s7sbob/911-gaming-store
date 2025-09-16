import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaTwitch, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGamepad, FaHeart, FaCreditCard, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "All Games", href: "/games" },
        { name: "PC Games", href: "/pc-games" },
        { name: "Console Games", href: "/console-games" },
        { name: "Accessories", href: "/accessories" },
        { name: "Special Offers", href: "/offers" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Track Your Order", href: "/track" },
        { name: "Returns & Refunds", href: "/returns" },
        { name: "Warranty Info", href: "/warranty" },
        { name: "System Requirements", href: "/requirements" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", name: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, href: "#", name: "Twitter", color: "hover:text-blue-400" },
    { icon: <FaInstagram />, href: "#", name: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaYoutube />, href: "#", name: "YouTube", color: "hover:text-red-500" },
    { icon: <FaDiscord />, href: "#", name: "Discord", color: "hover:text-indigo-500" },
    { icon: <FaTwitch />, href: "#", name: "Twitch", color: "hover:text-purple-500" }
  ];

  const features = [
    { icon: <FaTruck />, text: "Free Shipping", subtitle: "On orders over $50" },
    { icon: <FaShieldAlt />, text: "Secure Payment", subtitle: "100% protected" },
    { icon: <FaHeadset />, text: "24/7 Support", subtitle: "Expert assistance" },
    { icon: <FaCreditCard />, text: "Easy Returns", subtitle: "30-day policy" }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#141310] to-black border-t border-[#4160bf]/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4160bf]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4160bf]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Features Bar */}
        <div className="py-12 border-b border-[#4160bf]/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-[#4160bf]/10 transition-all duration-300">
                <div className="text-[#4160bf] text-2xl group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <div className="text-[#dfdfdf] font-semibold">{feature.text}</div>
                  <div className="text-[#dfdfdf]/60 text-sm">{feature.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 group">
                <div className="text-3xl font-bold">
                  <span className="text-[#4160bf] bg-gradient-to-r from-[#4160bf] to-[#4160bf]/70 bg-clip-text text-transparent">911</span>
                  <span className="text-[#dfdfdf] ml-2">Gaming</span>
                </div>
                <FaGamepad className="text-[#4160bf] text-2xl group-hover:animate-bounce" />
              </div>
              
              <p className="text-[#dfdfdf]/70 mb-8 text-lg leading-relaxed max-w-md">
                Your ultimate destination for gaming excellence. Discover the latest games, premium accessories, and unbeatable deals all in one place.
              </p>

              {/* Social Links */}
              <div className="mb-8">
                <h4 className="text-[#dfdfdf] font-semibold mb-4 text-lg">Follow Our Gaming Journey</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className={`group p-3 bg-[#dfdfdf]/5 hover:bg-[#4160bf]/20 rounded-xl text-[#dfdfdf]/70 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                      title={social.name}
                    >
                      <div className="text-xl">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#dfdfdf]/70 hover:text-[#4160bf] transition-colors group cursor-pointer">
                  <FaPhone className="text-[#4160bf] group-hover:animate-bounce" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-[#dfdfdf]/70 hover:text-[#4160bf] transition-colors group cursor-pointer">
                  <FaEnvelope className="text-[#4160bf] group-hover:animate-bounce" />
                  <span>support@911gaming.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#dfdfdf]/70 hover:text-[#4160bf] transition-colors group cursor-pointer">
                  <FaMapMarkerAlt className="text-[#4160bf] group-hover:animate-bounce" />
                  <span>New York, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-[#dfdfdf] font-bold mb-6 text-xl relative">
                  {section.title}
                  <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#4160bf]"></div>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="group text-[#dfdfdf]/70 hover:text-[#4160bf] transition-all duration-300 flex items-center gap-2"
                      >
                        <div className="w-0 h-0.5 bg-[#4160bf] group-hover:w-4 transition-all duration-300"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4160bf]/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-[#dfdfdf]/70">
              <span>© {currentYear} 911 Gaming Store. All rights reserved.</span>
              <span className="hidden md:inline">Made with</span>
              <FaHeart className="text-[#4160bf] animate-pulse hidden md:inline" />
              <span className="hidden md:inline">for gamers</span>
            </div>
            
            <div className="flex items-center gap-6 text-[#dfdfdf]/50 text-sm">
              <a href="/privacy" className="hover:text-[#4160bf] transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-[#4160bf] transition-colors">Terms</a>
              <a href="/cookies" className="hover:text-[#4160bf] transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top floating animation */}
      <div className="absolute bottom-8 right-8 opacity-20">
        <div className="w-2 h-2 bg-[#4160bf] rounded-full animate-bounce"></div>
      </div>
    </footer>
  );
};

export default Footer;
