import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccessPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

// QueryClientProvider is used to provide the QueryClient to the entire app, allowing us to use React Query for data fetching and caching. //
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="checkout-success" element={<CheckoutSuccessPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
