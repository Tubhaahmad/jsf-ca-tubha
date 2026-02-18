import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product/123">Product 123</Link>
        <Link to="/checkout-success">Checkout success</Link>
      </header>
      <Outlet />
    </>
  );
}
