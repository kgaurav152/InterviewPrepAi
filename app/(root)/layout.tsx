import type { ReactNode } from "react";
import { isAuthenticated } from "@/lib/actions/auth.action";

import Navbar from "@/components/Navbar";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div className="root-layout">
      <Navbar isLoggedIn={isUserAuthenticated} />
      {children}
    </div>
  );
};

export default Layout;
