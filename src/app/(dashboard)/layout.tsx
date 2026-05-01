import { authOptions } from "@/auth";
import { USER_ROLES } from "@/features/auth/constant/user-constant";
import { getServerSession } from "next-auth";
import { cookies, headers } from "next/headers";

export default async function DashboardLayout({
  children,
  admin,
  user,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  admin: React.ReactNode;
}>) {
  // select Rolle
  const session = await getServerSession(authOptions);
  const role = session?.user.role === USER_ROLES.ADMIN;


  return (
    <>
      {/* // grid-cols-[23rem_1fr] */}
      {/* // grid-cols-[25rem_minmax(0,1fr)] */}
      {/* // grid-cols-[23rem_1fr] */}
      {/* // grid-cols-[25rem_minmax(1fr)] */}
      {/* <main className="grid grid-cols-[22rem_1fr] min-h-screen"> */}
      {/* <DashSidebar /> */}
      <div className=" bg-gray-50">
        {/* {children} */}
        {role && role ? admin : user}
        {/* {role && !pathname.startsWith("/dashboard") ? admin : user} */}
        {/* {ad && ad ? admin : user} */}
      </div>
      {/* </main> */}
    </>
  );
}
