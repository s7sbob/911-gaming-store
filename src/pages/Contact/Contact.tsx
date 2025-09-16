import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#141310] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#dfdfdf] mb-6">Contact Us</h1>
          <p className="text-[#dfdfdf]/70 text-xl">Get in touch with our gaming experts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#dfdfdf]/10 border border-[#4160bf]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#dfdfdf] mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-[#141310] border border-[#4160bf]/30 rounded-lg px-4 py-3 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-[#141310] border border-[#4160bf]/30 rounded-lg px-4 py-3 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#141310] border border-[#4160bf]/30 rounded-lg px-4 py-3 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf]"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-[#141310] border border-[#4160bf]/30 rounded-lg px-4 py-3 text-white placeholder-[#dfdfdf]/50 focus:outline-none focus:border-[#4160bf] resize-none"
              />
              <button className="w-full bg-gradient-to-r from-[#4160bf] to-[#4160bf]/80 text-white py-4 rounded-xl font-medium flex items-center justify-center gap-3 hover:scale-105 transition-all">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#dfdfdf]/10 border border-[#4160bf]/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#dfdfdf] mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-[#4160bf] text-xl" />
                  <div>
                    <h3 className="text-[#dfdfdf] font-semibold">Email</h3>
                    <p className="text-[#dfdfdf]/70">support@911gaming.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhone className="text-[#4160bf] text-xl" />
                  <div>
                    <h3 className="text-[#dfdfdf] font-semibold">Phone</h3>
                    <p className="text-[#dfdfdf]/70">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-[#4160bf] text-xl" />
                  <div>
                    <h3 className="text-[#dfdfdf] font-semibold">Address</h3>
                    <p className="text-[#dfdfdf]/70">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
