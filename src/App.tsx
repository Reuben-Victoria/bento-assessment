import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookRoutes } from "./routes";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BookRoutes />
    </QueryClientProvider>
  );
}

export default App;
