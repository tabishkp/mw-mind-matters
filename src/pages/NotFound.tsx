
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark-gradient px-6 text-center">
      <div className="mb-8">
        <Moon className="h-16 w-16 text-brand-purple mb-4" />
      </div>
      
      <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
      <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
      <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      
      <Button onClick={() => navigate('/')} className="flex items-center">
        <ArrowLeft className="mr-2" size={16} />
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
