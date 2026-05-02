import { USER_ROLES } from "../constant/user-constant";

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export interface IUserData {
  id: string;
  username: string;
  email: string;
  phone: string | null;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: UserRole;
  profilePhoto?: string | null;
}

export type IUser = IUserData;

// export interface IUser {
//   user: IUserData;
// }

// export interface IUser {
//   user: {
//     id: string;
//     username: string;
//     email: string;
//     phone: string | null;
//     firstName: string;
//     lastName: string;
//     emailVerified: boolean;
//     phoneVerified: boolean;
//     role: UserRole;
//   };
// }
