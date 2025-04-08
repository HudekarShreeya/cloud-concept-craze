
import { Bell, Cloud, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface HeaderProps {
  activePets: number;
}

const Header: React.FC<HeaderProps> = ({ activePets }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Cloud className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-xl font-bold text-primary tracking-tight">CloudPet Farm</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-primary">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
          <a href="#pets" className="text-sm font-medium hover:text-primary">Pets</a>
          <a href="#services" className="text-sm font-medium hover:text-primary">Cloud Services</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {activePets > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {activePets}
              </span>
            )}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full py-6">
                <div className="flex items-center mb-8">
                  <Cloud className="h-6 w-6 text-primary mr-2" />
                  <h2 className="text-lg font-bold">CloudPet Farm</h2>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="ml-auto" 
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  <a 
                    href="#home" 
                    className="px-2 py-1 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                  <a 
                    href="#about" 
                    className="px-2 py-1 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#pets" 
                    className="px-2 py-1 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Pets
                  </a>
                  <a 
                    href="#services" 
                    className="px-2 py-1 rounded-md hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Cloud Services
                  </a>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
