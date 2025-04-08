
import React from "react";
import { Pet, petTypes } from "@/data/petData";
import CloudPet from "./CloudPet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight, CloudRain, Database, HardDrive, Server, Zap } from "lucide-react";

interface DashboardProps {
  pets: Pet[];
  onInteractWithPet: (petId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ pets, onInteractWithPet }) => {
  const getServiceIcon = (petTypeId: string) => {
    switch (petTypeId) {
      case "compute":
        return <Zap className="w-6 h-6 text-blue-500" />;
      case "storage":
        return <HardDrive className="w-6 h-6 text-purple-500" />;
      case "database":
        return <Database className="w-6 h-6 text-green-500" />;
      case "ai":
        return <Server className="w-6 h-6 text-yellow-500" />;
      case "network":
        return <CloudRain className="w-6 h-6 text-red-500" />;
      default:
        return <CloudRain className="w-6 h-6 text-gray-500" />;
    }
  };

  if (pets.length === 0) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Your Cloud Pet Collection</CardTitle>
          <CardDescription>You don't have any cloud pets yet. Start by adopting one!</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Cloud Pet Collection</CardTitle>
          <CardDescription>Manage and interact with your virtual cloud companions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pets.map((pet) => {
              const petType = petTypes.find(t => t.id === pet.type);
              return (
                <Card key={pet.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className={`h-20 ${petType?.baseColor} opacity-70`}></div>
                  <CardContent className="p-6 -mt-10 flex flex-col items-center">
                    <CloudPet pet={pet} interactive onClick={() => onInteractWithPet(pet.id)} />
                    
                    <div className="w-full mt-8 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Happiness</span>
                        <span className="text-sm text-gray-500">{pet.happiness}%</span>
                      </div>
                      <Progress value={pet.happiness} className="h-2" />
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Experience</span>
                        <span className="text-sm text-gray-500">{pet.experience}/100</span>
                      </div>
                      <Progress value={pet.experience} className="h-2" />
                      
                      <Separator className="my-4" />
                      
                      <div className="flex items-center">
                        {getServiceIcon(pet.type)}
                        <div className="ml-2">
                          <h4 className="text-sm font-semibold">{petType?.cloudService}</h4>
                          <p className="text-xs text-gray-500">{petType?.abilities[0]}</p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-4" 
                        onClick={() => onInteractWithPet(pet.id)}
                      >
                        Interact <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Cloud Service Status</CardTitle>
          <CardDescription>Real-time metrics of your cloud infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {petTypes.map((type) => {
              const petsOfType = pets.filter(p => p.type === type.id);
              const typeCapacity = petsOfType.length > 0 
                ? petsOfType.reduce((acc, pet) => acc + pet.level, 0) * 10 
                : 0;
              
              return (
                <div key={type.id} className="flex items-center">
                  <div className="w-8">{getServiceIcon(type.id)}</div>
                  <div className="ml-2 flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{type.cloudService}</span>
                      <span className="text-sm text-gray-500">{typeCapacity}% Capacity</span>
                    </div>
                    <Progress value={typeCapacity} className="h-2 mt-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
