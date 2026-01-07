import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ProjectKeg from "@/pages/ProjectKeg";
import ProjectBloxs from "@/pages/ProjectBloxs";
import ProjectBloxsSite from "@/pages/ProjectBloxsSite";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projeto/keg-inteligente" component={ProjectKeg} />
      <Route path="/projeto/bloxs" component={ProjectBloxs} />
      <Route path="/projeto/bloxs-site" component={ProjectBloxsSite} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
