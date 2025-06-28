const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left Info Block */}
        <div data-aos="fade-right">
          <h3 className="text-sea_green-600 uppercase tracking-wide font-semibold text-sm mb-3">
            Contact Us
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-yale_blue-500 mb-6 leading-snug">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Whether you’re curious about our solutions, want to collaborate, or just have a question — we’re here to help.
          </p>
          <div className="space-y-4 text-gray-700 text-base">
            <p><strong>Email:</strong> <a href="mailto:support@sts.ind.in" className="text-sea_green-600 hover:underline">support@sts.ind.in</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919114466605" className="text-sea_green-600 hover:underline">+919114466605</a></p>
            <p><strong>Address:  63, Plot No, near Tata moters, Kalinga Vihar, Industrial estate, Bhagawanpur, Bhubaneswar, Odisha 751019</strong> </p>
          </div>
        </div>

        {/* Right Contact Form */}
        <form
          className="bg-mint p-8 rounded-xl shadow-lg space-y-6"
          data-aos="fade-left"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea_green-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea_green-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea_green-500"
              rows="5"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-sea_green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-sea_green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
