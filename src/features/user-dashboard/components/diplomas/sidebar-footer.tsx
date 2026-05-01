import ImageAcc from "@/Images/avatar.jpg";

import { getServerSession } from "next-auth";
import ProfileSettings from "./profile-settings";
import { authOptions } from "@/auth";
import Image from "next/image";
import { IUser } from "@/features/auth/types/user";

export interface IUserData {
  data?: IUser;
}

export default async function SidebarFooter() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <div className="footer flex items-center justify-between h-14">
      {/* Profile Info */}
      <div className="profile-info flex items-center gap-2.5">
        <div className="profile-image border border-blue-600">
          <Image
            src={user?.profilePhoto ? user?.profilePhoto : ImageAcc}
            alt="Profile-image"
            className=" object-cover object-top aspect-square"
            width={56}
            height={56}
          />
        </div>
        <div className="info w-40 truncate">
          <h1 className="text-base font-medium text-blue-600">
            {/* Firstname */}
            {user?.firstName}
            {/* {data?.user?.firstName} */}
          </h1>
          <p className="text-sm font-normal text-gray-500 truncate">
            {/* useremail@example.com */}
            {user?.email}
            {/* {data?.user?.email} */}
          </p>
        </div>
      </div>
      {/* Profile Setting */}
      <ProfileSettings />
    </div>
  );
}
