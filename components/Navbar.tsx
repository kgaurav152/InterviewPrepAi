"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";

const Navbar = ({ isLoggedIn }: any) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
        <h2 className="text-primary-100">InterviewPrepAI</h2>
      </Link>

      {isLoggedIn && (
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          Logout
        </Button>
      )}
    </nav>
  );
};

export default Navbar;
