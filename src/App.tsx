
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./contexts/UserContext";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/onboarding/Onboarding";
import AgeGender from "./pages/onboarding/AgeGender";
import Goals from "./pages/onboarding/Goals";
import Lifestyle from "./pages/onboarding/Lifestyle";
import SleepPractices from "./pages/onboarding/SleepPractices";
import DataInsights from "./pages/onboarding/DataInsights";
import Home from "./pages/main/Home";
import Sleep from "./pages/main/Sleep";
import Energy from "./pages/main/Energy";
import Tools from "./pages/main/Tools";
import Progress from "./pages/main/Progress";
import Learn from "./pages/main/Learn";
import ToolDetails from "./pages/main/ToolDetails";
import MeditationPlayer from "./pages/main/MeditationPlayer";
import ArticleView from "./pages/main/ArticleView";

const queryClient = new QueryClient();

const App = () => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(() => {
    return localStorage.getItem("onboarding-completed") === "true";
  });

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={hasCompletedOnboarding ? <Home /> : <Index />} />
              
              {/* Onboarding Flow */}
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/onboarding/age-gender" element={<AgeGender setHasCompletedOnboarding={setHasCompletedOnboarding} />} />
              <Route path="/onboarding/goals" element={<Goals setHasCompletedOnboarding={setHasCompletedOnboarding} />} />
              <Route path="/onboarding/lifestyle" element={<Lifestyle setHasCompletedOnboarding={setHasCompletedOnboarding} />} />
              <Route path="/onboarding/sleep-practices" element={<SleepPractices setHasCompletedOnboarding={setHasCompletedOnboarding} />} />
              <Route path="/onboarding/data" element={<DataInsights setHasCompletedOnboarding={setHasCompletedOnboarding} />} />

              {/* Main App Routes */}
              <Route path="/sleep" element={<Sleep />} />
              <Route path="/energy" element={<Energy />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/learn" element={<Learn />} />
              
              {/* Feature Detail Routes */}
              <Route path="/tools/:toolId" element={<ToolDetails />} />
              <Route path="/meditation/:id" element={<MeditationPlayer />} />
              <Route path="/learn/:articleId" element={<ArticleView />} />

              {/* Catch all for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
