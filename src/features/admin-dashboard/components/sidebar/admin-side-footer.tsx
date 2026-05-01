import Image from "next/image";
import ProfileImg from "@/images/avatar.jpg";
import AdminSideDropdown from "./admin-side-dropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function AdminSideFooter() {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <div className="footer flex items-center justify-between h-14">
      {/* Profile Info */}
      <div className="profile-info flex items-center gap-2.5">
        {/* profile-image */}
        <div className="profile-image border border-gray-400">
          <Image
            src={ProfileImg}
            // src={user?.profilePhoto ? user?.profilePhoto : ImageAcc}
            alt="Profile-image"
            className=" object-cover object-top aspect-square"
            width={54}
            height={54}
          />
        </div>

        {/* user info */}
        <div className="info w-40 truncate">
          <h1 className="text-base font-medium text-white">
            {session?.user.firstName}
            {/* {user?.firstName} */}
            {/* {data?.user?.firstName} */}
          </h1>
          <p className="text-sm font-normal text-gray-400 truncate">
            {session?.user.email}
            {/* {user?.email} */}
            {/* {data?.user?.email} */}
          </p>
        </div>
      </div>

      {/* Profile Setting */}
      <AdminSideDropdown />
    </div>
  );
}
