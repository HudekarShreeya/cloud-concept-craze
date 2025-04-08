
import React from "react";
import { Pet, petTypes } from "../data/petData";
import { cn } from "@/lib/utils";

interface CloudPetProps {
  pet: Pet;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onClick?: () => void;
}

const CloudPet: React.FC<CloudPetProps> = ({ 
  pet, 
  size = "md", 
  interactive = false,
  onClick 
}) => {
  const petType = petTypes.find(type => type.id === pet.type);
  
  if (!petType) return null;
  
  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-48 h-48"
  };
  
  const renderEyes = () => {
    switch (pet.customizations.eyeStyle) {
      case "happy":
        return (
          <div className="eyes flex justify-center space-x-4">
            <div className="eye w-3 h-0.5 bg-gray-800 rounded-full"></div>
            <div className="eye w-3 h-0.5 bg-gray-800 rounded-full"></div>
          </div>
        );
      case "round":
        return (
          <div className="eyes flex justify-center space-x-4">
            <div className="eye w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="eye w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        );
      case "sleepy":
        return (
          <div className="eyes flex justify-center space-x-4">
            <div className="eye w-2 h-1 bg-gray-800 rounded-full"></div>
            <div className="eye w-2 h-1 bg-gray-800 rounded-full"></div>
          </div>
        );
      case "wink":
        return (
          <div className="eyes flex justify-center space-x-4">
            <div className="eye w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="eye w-3 h-0.5 bg-gray-800 rounded-full"></div>
          </div>
        );
      default:
        return (
          <div className="eyes flex justify-center space-x-4">
            <div className="eye w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="eye w-2 h-2 bg-gray-800 rounded-full"></div>
          </div>
        );
    }
  };
  
  const renderMouth = () => {
    switch (pet.customizations.mouthStyle) {
      case "smile":
        return <div className="mouth w-6 h-2 mt-2 border-b-2 border-gray-800 rounded-full"></div>;
      case "open":
        return <div className="mouth w-4 h-4 mt-1 bg-gray-700 rounded-full opacity-70"></div>;
      case "surprised":
        return <div className="mouth w-3 h-3 mt-1 bg-gray-700 rounded-full"></div>;
      case "smirk":
        return (
          <div className="mouth w-6 h-2 mt-2 border-b-2 border-gray-800 rounded-full transform -rotate-12 translate-x-1"></div>
        );
      default:
        return <div className="mouth w-6 h-2 mt-2 border-b-2 border-gray-800 rounded-full"></div>;
    }
  };
  
  const renderAccessory = () => {
    switch (pet.customizations.accessory) {
      case "bow":
        return (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
              <div className="w-4 h-1 bg-pink-600 rounded-full"></div>
            </div>
          </div>
        );
      case "glasses":
        return (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-2 flex items-center justify-center">
              <div className="w-3 h-3 border border-gray-800 rounded-full"></div>
              <div className="w-2 h-0.5 bg-gray-800"></div>
              <div className="w-3 h-3 border border-gray-800 rounded-full"></div>
            </div>
          </div>
        );
      case "hat":
        return (
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <div className="w-10 h-5 bg-blue-500 rounded-t-lg"></div>
            <div className="w-14 h-1 bg-blue-600 rounded-full -mt-0.5"></div>
          </div>
        );
      default:
        return null;
    }
  };
  
  const renderPattern = () => {
    switch (pet.customizations.pattern) {
      case "dots":
        return (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-60"></div>
          </>
        );
      case "stripes":
        return (
          <>
            <div className="absolute top-1/4 left-1/4 right-1/4 h-1.5 bg-white rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-1/4 right-1/4 h-1.5 bg-white rounded-full opacity-30"></div>
            <div className="absolute top-3/4 left-1/4 right-1/4 h-1.5 bg-white rounded-full opacity-30"></div>
          </>
        );
      case "stars":
        return (
          <>
            <div className="absolute top-1/4 left-1/4 text-white opacity-60 text-xs">★</div>
            <div className="absolute top-1/2 left-2/3 text-white opacity-60 text-xs">★</div>
            <div className="absolute top-2/3 left-1/3 text-white opacity-60 text-xs">★</div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={cn(
        "relative flex flex-col items-center justify-center rounded-full shadow-lg",
        sizeClasses[size],
        petType.baseColor,
        "transition-all duration-300",
        interactive ? "cursor-pointer hover:scale-110" : "",
        "float"
      )}
      onClick={onClick}
    >
      {renderPattern()}
      {renderAccessory()}
      
      <div className="flex flex-col items-center justify-center h-full z-10">
        {renderEyes()}
        {renderMouth()}
      </div>
      
      <div className="absolute bottom-0 w-full text-center">
        <span className="text-xs font-bold">{petType.icon}</span>
      </div>
      
      {size !== "sm" && (
        <div className="absolute -bottom-6 text-center">
          <span className="text-sm font-bold">{pet.name}</span>
          <div className="text-xs text-gray-600">Lvl {pet.level}</div>
        </div>
      )}
    </div>
  );
};

export default CloudPet;
