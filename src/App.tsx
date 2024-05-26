import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BookRoutes } from "./routes";
import { CartProvider } from "./context";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BookRoutes />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
