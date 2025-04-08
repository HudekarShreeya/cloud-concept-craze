
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pet, generateRandomPet, petTypes } from "@/data/petData";
import CloudPet from "./CloudPet";
import { useToast } from "@/hooks/use-toast";

interface PetCreatorProps {
  onAdoptPet: (pet: Pet) => void;
}

const PetCreator: React.FC<PetCreatorProps> = ({ onAdoptPet }) => {
  const { toast } = useToast();
  const [petName, setPetName] = useState("");
  const [selectedType, setSelectedType] = useState(petTypes[0].id);
  const [previewPet, setPreviewPet] = useState<Pet>(generateRandomPet("Preview", petTypes[0].id));

  const regeneratePreview = () => {
    setPreviewPet(generateRandomPet(petName || "Preview", selectedType));
  };

  const handleAdopt = () => {
    if (!petName.trim()) {
      toast({
        title: "Name required",
        description: "Please give your cloud pet a name!",
        variant: "destructive"
      });
      return;
    }

    const newPet = {
      ...previewPet,
      name: petName
    };

    onAdoptPet(newPet);
    setPetName("");
    toast({
      title: "New Pet Adopted!",
      description: `${petName} has joined your cloud family!`,
      variant: "default"
    });
    regeneratePreview();
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setPreviewPet(generateRandomPet(petName || "Preview", type));
  };

  return (
    <Card className="w-full max-w-2xl shadow-lg border-2 border-primary/20">
      <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="text-2xl font-bold">Adopt a Cloud Pet</CardTitle>
        <CardDescription>Create your own virtual cloud companion</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pet-name">Name Your Pet</Label>
              <Input 
                id="pet-name" 
                placeholder="Enter a cute name..." 
                value={petName} 
                onChange={(e) => setPetName(e.target.value)} 
              />
            </div>
            
            <div className="space-y-2">
              <Label>Pet Type</Label>
              <Tabs defaultValue={petTypes[0].id} onValueChange={handleTypeChange}>
                <TabsList className="grid grid-cols-3 mb-4">
                  {petTypes.slice(0, 3).map((type) => (
                    <TabsTrigger key={type.id} value={type.id}>
                      {type.icon} {type.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsList className="grid grid-cols-2 mb-4">
                  {petTypes.slice(3, 5).map((type) => (
                    <TabsTrigger key={type.id} value={type.id}>
                      {type.icon} {type.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {petTypes.map((type) => (
                  <TabsContent key={type.id} value={type.id}>
                    <Card>
                      <CardContent className="pt-4 pb-2">
                        <h3 className="font-bold">{type.name}</h3>
                        <p className="text-sm text-gray-500">{type.description}</p>
                        <div className="mt-2 text-xs">
                          <p className="font-semibold">Based on: {type.cloudService}</p>
                          <p>{type.serviceDescription}</p>
                        </div>
                        <div className="mt-2">
                          <p className="text-xs font-semibold">Abilities:</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {type.abilities.map((ability, index) => (
                              <span key={index} className="text-xs px-2 py-1 bg-primary/10 rounded-full">
                                {ability}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button variant="outline" onClick={regeneratePreview} className="flex-1">
                Randomize
              </Button>
              <Button onClick={handleAdopt} className="flex-1">
                Adopt Pet
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-purple-50 rounded-lg">
            <div className="text-center mb-4">
              <h3 className="font-semibold">Preview</h3>
              <p className="text-sm text-gray-500">Your new cloud companion</p>
            </div>
            <div className="my-4">
              <CloudPet pet={previewPet} size="lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PetCreator;
