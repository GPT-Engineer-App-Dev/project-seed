import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Welcome to Your App</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">This is a bare-bones application. Start building your amazing app here!</p>
          <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-700">Unique Button</Button>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
};

export default Index;