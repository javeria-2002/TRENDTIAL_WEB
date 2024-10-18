import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'; // Adjust path if needed

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          className="text-3xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white">tr</span>
          <span className="text-red-600">e</span>
          <span className="text-white">ndtial</span>
        </motion.a>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {['Services', 'About', 'Contact', 'Team'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item === 'Team' ? (
                // Use Link for Team navigation to /team route
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  {item}
                </Link>
              ) : (
                // Use anchor links for other items
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-600 transition-colors"
                >
                  {item}
                </a>
              )}
            </motion.div>
          ))}
        </nav>
        
        {/* Get Started Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white">
            Get Started
          </Button>
        </motion.div>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-gray-900 text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-6">
              {['Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-red-600 transition-colors text-lg"
                >
                  {item}
                </a>
              ))}
              <Button className="bg-red-600 hover:bg-red-700 text-white mt-4">
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
