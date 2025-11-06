import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/hooks/use-cart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CheckoutInfo from "./pages/CheckoutInfo";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
       
          <Routes>
            <Route path="/" element={<Index />} />
           <Route path="/checkout" element={<CheckoutInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
       
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
