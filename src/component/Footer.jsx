import React from 'react'
import logo from './Newlogo.png'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';



const Footer = () => {
  return (
    <>
{/* <footer className="bg-white text-gray-700 px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm border-b pb-10">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Nest Logo" className="w-20 h-20" />
          </div>
          <p className="text-gray-500 mb-2">Awesome grocery store website template</p>
          <div className="text-gray-500 space-y-2">
            <p><strong>📍 Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127</p>
            <p><strong>📞 Call Us:</strong> <a className="text-green-600" href="tel:+9154002512453">(+91)-540-025-124553</a></p>
            <p><strong>📧 Email:</strong> <a className="text-green-600" href="mailto:sale@Nest.com">sale@Nest.com</a></p>
            <p><strong>⏰ Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Account</h3>
          <ul className="space-y-2">
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare Products</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Corporate</h3>
          <ul className="space-y-2">
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Popular</h3>
          <ul className="space-y-2">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Install App</h3>
          <p className="mb-2">From App Store or Google Play</p>
          <div className="flex gap-2 mb-4">
            <img src="/google-play.png" alt="Google Play" className="w-24" />
            <img src="/app-store.png" alt="App Store" className="w-24" />
          </div>
          <p className="mb-2">Secured Payment Gateways</p>
          <div className="flex gap-2">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/maestro.png" alt="Maestro" className="h-6" />
            <img src="/amex.png" alt="American Express" className="h-6" />
          </div>
        </div>
      </div>
    </footer> */}

<footer className="bg-white text-gray-800 px-8 py-12 text-sm border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        {/* Logo & Info */}
        <div className="space-y-4 col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo} alt="QuickCart Logo" className="h-10" />
            <span className="text-2xl font-bold text-green-600">QUICK CART</span>
          </div>
          <p className="text-gray-500">Awesome grocery store website template</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-pink-600 mt-1" />
              <span><strong>Address:</strong> 5171 W Campbell Ave, Kent, Utah 53127</span>
            </li>
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="text-red-500 mt-1" />
              <span><strong>Call Us:</strong> <a href="tel:+9154002512453" className="text-green-600">(+91)-540-025-124553</a></span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="text-blue-500 mt-1" />
              <span><strong>Email:</strong> <a href="mailto:sale@Nest.com" className="text-green-600">sale@Nest.com</a></span>
            </li>
            <li className="flex items-start gap-2">
              <FaClock className="text-orange-500 mt-1" />
              <span><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</span>
            </li>
          </ul>
        </div>

        {/* Links Section */}
        {[
          {
            title: 'Company',
            links: [
              'About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions',
              'Contact Us', 'Support Center', 'Careers'
            ],
          },
          {
            title: 'Account',
            links: [
              'Sign In', 'View Cart', 'My Wishlist', 'Track My Order',
              'Help Ticket', 'Shipping Details', 'Compare Products'
            ],
          },
          {
            title: 'Corporate',
            links: [
              'Become a Vendor', 'Affiliate Program', 'Farm Business', 'Farm Careers',
              'Our Suppliers', 'Accessibility', 'Promotions'
            ],
          },
          {
            title: 'Popular',
            links: [
              'Milk & Flavoured Milk', 'Butter and Margarine', 'Eggs Substitutes',
              'Marmalades', 'Sour Cream and Dips', 'Tea & Kombucha', 'Cheese'
            ],
          },
        ].map((section, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-3 ms-4">{section.title}</h3>
            <ul className="space-y-2 text-gray-600">
              {section.links.map((link, i) => (
                <li key={i} className="hover:text-green-600 cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* App Install */}
        {/* <div className="space-y-4">
          <h3 className="font-semibold text-lg">Install App</h3>
          <p>From App Store or Google Play</p>
          <div className="flex gap-2">
            <img src="/google-play.png" alt="Google Play" className="h-10" />
            <img src="/app-store.png" alt="App Store" className="h-10" />
          </div>
          <p>Secured Payment Gateways</p>
          <div className="flex gap-2 flex-wrap">
            <img src="/visa.png" alt="Visa" className="h-6" />
            <img src="/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/paypal.png" alt="PayPal" className="h-6" />
            <img src="/amex.png" alt="Amex" className="h-6" />
          </div>
        </div> */}
      </div>
    </footer>

    {/* 2nd footer */}
    <footer className="border-t border-green-200 py-6 px-4 text-gray-600 text-sm">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Left Side */}
    <div>
      <p>© 2023, QuickCart – WordPress Ecommerce Template.</p>
      <p>All rights reserved</p>
    </div>

    {/* Center - Contact Info */}
    <div className="flex gap-8 items-center">
      <div className="flex items-center gap-2">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M2 3h4l2.29 5.31a1 1 0 01-.2 1.09l-1.7 1.7a16 16 0 006.59 6.59l1.7-1.7a1 1 0 011.09-.2L21 18v4a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1z" />
        </svg>
        <div>
          <p className="text-green-600 font-semibold fs-5">1900646666</p>
          <p className="text-xs">Working 8:00 - 22:00</p>
        </div>
        
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M2 3h4l2.29 5.31a1 1 0 01-.2 1.09l-1.7 1.7a16 16 0 006.59 6.59l1.7-1.7a1 1 0 011.09-.2L21 18v4a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1z" />
        </svg>
        <div>
          <p className="text-green-600 font-semibold fs-5">1900648888</p>
          <p className="text-xs">24/7 Support Center</p>
        </div>
      </div>
    </div>

    {/* Right Side - Social Links */}
    <div className="text-center md:text-right">
      <p className="font-semibold text-gray-800 mb-2">Follow Us</p>
      <div className="flex justify-center md:justify-end gap-3 mb-1">
        <a href="#" className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
        </a>
        <a href="#" className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-threads" viewBox="0 0 16 16">
  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
</svg>
        </a>
        <a href="#" className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
        </a>
        <a href="#" className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
        </a>
      </div>
      <p>Up to 15% discount on your first subscription</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer


 