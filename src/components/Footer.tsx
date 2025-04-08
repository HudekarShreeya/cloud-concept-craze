
import { Cloud, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Cloud className="h-6 w-6 text-primary mr-2" />
              <h3 className="text-lg font-bold">CloudPet Farm</h3>
            </div>
            <p className="text-sm text-gray-600">
              The #1 platform for virtual cloud pets that teach you about cloud computing in a fun way!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Cloud Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Compute Engine</a></li>
              <li><a href="#" className="hover:text-primary">Storage Solutions</a></li>
              <li><a href="#" className="hover:text-primary">Database Services</a></li>
              <li><a href="#" className="hover:text-primary">AI & Machine Learning</a></li>
              <li><a href="#" className="hover:text-primary">Networking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-primary">Tutorial Videos</a></li>
              <li><a href="#" className="hover:text-primary">API Reference</a></li>
              <li><a href="#" className="hover:text-primary">Status Page</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
              <li><a href="#" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2025 CloudPet Farm. All rights reserved. This is a fictional project.</p>
          <p className="mt-2">Pets are stored in your browser's local storage. No real cloud resources are being used or charged.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
