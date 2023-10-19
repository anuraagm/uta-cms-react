import React from 'react';
import insta from './insta.png'
import fb from './fb.png'
import li from './li.png'
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary/ButtonPrimary';

const Footer = () => {
  return (
    <footer className="Footer bg-blue text-white py-12 text-center" id='footer'>
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Have questions? Just send us an email!</h2>
          <form>
            <div className="mb-4 flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-blue-100 bg-opacity-50 px-4 py-2 text-black"
                  required
                />
              </div>
              <div className="md:w-1/2 md:pl-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-blue-100 bg-opacity-50 px-4 py-2 text-black"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <textarea id="message" name="message" placeholder="Your Message" rows="4" className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-blue-100 bg-opacity-50 px-4 py-2 text-black" required></textarea>
            </div>
            <ButtonPrimary buttonText={"Submit"}></ButtonPrimary>
          </form>
        </div>
        
        {/* Right side: Address and Social Links */}
        <div className="md:w-1/2">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
            <p>701 S Nedderman Dr</p>
            <p>UTA Boulevard</p>
            <p>Arlington</p>
            <p>TX - 75019</p>
            <p>Phone: (817) 272-2011</p>
          </div>
          <div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
              <div className="flex justify-center space-x-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/utarlington/?hl=en" className="text-white hover:text-blue-500">
                  <img src={insta} alt='Instagram'/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/school/university-of-texas-at-arlington/" className="text-white hover:text-blue-500">
                  <img src={li} alt='LinkedIn'/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/utarlington/" className="text-white hover:text-blue-500">
                  <img src={fb} alt='Facebook'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
