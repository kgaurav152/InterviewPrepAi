import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

export default async function Protected({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return <>{children}</>;
}
