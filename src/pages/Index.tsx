
import React, { useState, useEffect } from "react";
import { Pet, initialPets } from "@/data/petData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CloudPet from "@/components/CloudPet";
import PetCreator from "@/components/PetCreator";
import Dashboard from "@/components/Dashboard";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowDown, CloudCog, CloudLightning, Database, Server } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [pets, setPets] = useState<Pet[]>([]);
  
  // Load pets from localStorage on initial render
  useEffect(() => {
    const savedPets = localStorage.getItem("cloudPets");
    if (savedPets) {
      try {
        const parsedPets = JSON.parse(savedPets);
        // Convert string dates back to Date objects
        const formattedPets = parsedPets.map((pet: any) => ({
          ...pet,
          createdAt: new Date(pet.createdAt)
        }));
        setPets(formattedPets);
      } catch (e) {
        console.error("Error parsing saved pets", e);
        setPets(initialPets);
      }
    } else {
      setPets(initialPets);
    }
  }, []);
  
  // Save pets to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cloudPets", JSON.stringify(pets));
  }, [pets]);
  
  const handleAdoptPet = (pet: Pet) => {
    setPets((prevPets) => [...prevPets, pet]);
  };
  
  const handleInteractWithPet = (petId: string) => {
    setPets((prevPets) => 
      prevPets.map((pet) => {
        if (pet.id === petId) {
          // Increase experience and happiness
          const newExperience = Math.min(pet.experience + 10, 100);
          const newHappiness = Math.min(pet.happiness + 5, 100);
          
          // Calculate new level based on experience
          const newLevel = Math.floor(newExperience / 20) + 1;
          
          return {
            ...pet,
            experience: newExperience,
            happiness: newHappiness,
            level: newLevel > pet.level ? newLevel : pet.level
          };
        }
        return pet;
      })
    );
    
    toast({
      title: "Interaction successful!",
      description: "Your pet gained experience and happiness!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 cloud-bg-pattern">
      <Header activePets={pets.length} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Cloud Computing Made Adorable
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Adopt virtual cloud pets that represent real cloud services. 
                Learn while you play in this fun, interactive environment.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  {pets.slice(0, 1).map((pet, i) => (
                    <div key={pet.id} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <CloudPet pet={pet} size="lg" />
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 float float-delay-1">
                  <CloudPet pet={pets[1] || initialPets[1]} size="sm" />
                </div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 float float-delay-2">
                  <CloudPet pet={pets[2] || initialPets[2]} size="sm" />
                </div>
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 float float-delay-3">
                  <CloudPet pet={pets[0] || initialPets[0]} size="sm" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              CloudPet Farm combines adorable virtual pets with cloud computing concepts.
              Each pet represents a different cloud service and grows as you interact with it.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <CloudLightning className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Adopt</h3>
                <p className="text-gray-600">
                  Choose from different cloud service pets, each with unique abilities and traits.
                </p>
              </div>
              
              <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <CloudCog className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interact</h3>
                <p className="text-gray-600">
                  Care for your pets by interacting with them, helping them grow and develop.
                </p>
              </div>
              
              <div className="p-6 border rounded-xl hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Server className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Learn</h3>
                <p className="text-gray-600">
                  Discover cloud computing concepts through playful interactions with your pets.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="#pets" className="inline-flex items-center text-primary hover:text-primary/80">
                Explore Pets <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Pets Section */}
        <section id="pets" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-2">Your Cloud Pets</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              Adopt and manage your virtual cloud companions
            </p>
            
            <Dashboard pets={pets} onInteractWithPet={handleInteractWithPet} />
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Adopt a New Pet</h3>
              <div className="flex justify-center">
                <PetCreator onAdoptPet={handleAdoptPet} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Cloud Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Cloud Services</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center">
              Learn about real cloud computing concepts through our pet metaphors
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-100 rounded-full">
                    <CloudLightning className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Compute Services</h3>
                    <p className="text-gray-600 mb-4">
                      Just like our Cumulus pets process tasks quickly, cloud compute services handle 
                      your application's processing needs with speed and efficiency.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Automatic scaling based on demand</li>
                      <li>Global distribution for lower latency</li>
                      <li>Pay only for what you use</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-purple-100 rounded-full">
                    <Database className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
                    <p className="text-gray-600 mb-4">
                      Like our expandable Nimbus pets, cloud storage solutions grow as your data needs increase,
                      keeping your information safe and accessible.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Scalable from gigabytes to petabytes</li>
                      <li>Robust backup and disaster recovery</li>
                      <li>Multiple storage tiers for cost optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-green-100 rounded-full">
                    <Server className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Database Services</h3>
                    <p className="text-gray-600 mb-4">
                      Our structured Stratus pets organize information, just like cloud database services
                      help you store, retrieve, and manage your data efficiently.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>SQL and NoSQL options for different needs</li>
                      <li>Automatic backups and point-in-time recovery</li>
                      <li>High availability and replication</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-yellow-100 rounded-full">
                    <CloudCog className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                    <p className="text-gray-600 mb-4">
                      Cirrus pets learn and adapt, similar to how cloud AI services can process data,
                      recognize patterns, and make intelligent predictions.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      <li>Pre-trained models for common tasks</li>
                      <li>Custom model training capabilities</li>
                      <li>Integration with other cloud services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
