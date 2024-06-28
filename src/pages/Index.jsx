import React from "react";
import Footer from "@/components/Footer"; // Import the Footer component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
          </CardContent>
        </Card>
      </div>
      <Footer /> {/* Add the Footer component */}
    </div>
  );
};

export default Index;