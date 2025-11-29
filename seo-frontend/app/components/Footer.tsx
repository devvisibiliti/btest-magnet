export default function Footer() {
  return (
    <footer className="bg-[#000000] border-t py-12">
      <div className="bg-dark max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h3 className="text-[lab(83.27_8.65_108.89_/_0.99)] text-xl font-semibold mb-4">Magnetronix</h3>
          <ul className="space-y-2 text-[lab(83.27_8.65_108.89_/_0.99)]">
            <li><a href="" className="text-white hover:text-black">How to buy</a></li>
            <li><a href="" className="text-white hover:text-black">Magnetronix</a></li>
            <li><a href="" className="text-white hover:text-black">Blog</a></li>
            <li><a href="" target="_blank" className="text-white hover:text-black">Magnetronix</a></li>
            <li><a href="" className="text-white hover:text-black">Magnetronix</a></li>
            <li><a href="" className="text-white hover:text-black">Magnetronix</a></li>
            <li><a href="" className="text-white hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-[lab(83.27_8.65_108.89_/_0.99)]  text-xl font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li><a href="" className="text-white hover:text-black">Sitemap</a></li>
            <li><a href="" className="text-white hover:text-black">Magnetronix</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-[lab(83.27_8.65_108.89_/_0.99)] text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="" className="text-white hover:text-black">Raw magnetic materials</a></li>
            <li><a href="" className="text-white hover:text-black">Flexible magnets</a></li>
            <li><a href="" className="text-white hover:text-black">Magnetic systems</a></li>
            <li><a href="" className="text-white hover:text-black">Electromagnets</a></li>
            <li><a href="" className="text-white hover:text-black">Magnetic separators</a></li>
            <li><a href="" className="text-white hover:text-black">Contacts</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-[lab(83.27_8.65_108.89_/_0.99)] text-xl font-semibold mb-4">Get in Touch</h3>

          {/* Social icons */}
          <div className="flex space-x-4 mb-4">
            <a href="" target="_blank" className="text-blue-600 text-2xl hover:opacity-80">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" target="_blank" className="text-red-600 text-2xl hover:opacity-80">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-2 mb-6">
            <a href="mailto:info.visibiliti@gmail.com" className="block text-white hover:text-black">info.visibiliti@gmail.com</a>
            <a href="tel:+91 9089090909" className="block text-white hover:text-black">+91 90901 901 708</a>
          </div>

          {/* Logos */}
          {/* <div className="space-y-3">
            <img src="/logos/footer_logo_1.png" alt="Logo 1" className="w-32 opacity-90" />
            <img src="/logos/footer_logo_2.png" alt="Logo 2" className="w-32 opacity-90" />
          </div> */}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-12 text-[lab(83.27_8.65_108.89_/_0.99)] text-sm">
        © {new Date().getFullYear()} Magnetronix. All rights reserved.
      </div>
    </footer>
  );
}
