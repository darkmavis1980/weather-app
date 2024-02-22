import { Routes, Route, Outlet, Link } from "react-router-dom";

const Layout = () => (
  <main className="container">
    <Outlet />
  </main>
);

export default Layout;
