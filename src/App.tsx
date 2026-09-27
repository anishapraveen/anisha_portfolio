
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChillaxProject from "./pages/ChillaxProject";
import BeepProject from "./pages/BeepProject";
import StirlingProject from "./pages/StirlingProject";
import HindsightProject from "./pages/HindsightProject";
import FridgetProject from "./pages/FridgetProject";
import IAEAProject from "./pages/IAEAProject";
import RollercoasterProject from "./pages/RollercoasterProject";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chillax" element={<ChillaxProject />} />
          <Route path="/beep" element={<BeepProject />} />
          <Route path="/stirling" element={<StirlingProject />} />
          <Route path="/hindsight" element={<HindsightProject />} />
          <Route path="/fridget" element={<FridgetProject />} />
          <Route path="/iaea" element={<IAEAProject />} />
          <Route path="/rollercoaster" element={<RollercoasterProject />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
