import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Welcome to Your App</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">This is a bare-bones application. Start building your amazing app here!</p>
          <Button variant="outline" className="mb-2">Get Started</Button>
          <Button variant="outline" className="mb-2">Dummy Button</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;