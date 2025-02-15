import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleButtonClick = () => {
    toast({
      title: "Button Pressed",
      description: "You have pressed the unique button.",
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-gray-100 overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome to Your App</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">This is a bare-bones application. Start building your amazing app here!</p>
            <p className="mb-4 italic">"I'm on a whiskey diet. I've lost three days already." - Tommy Cooper</p>
            <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-700" onClick={handleButtonClick}>Unique Button</Button>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
};

export default Index;