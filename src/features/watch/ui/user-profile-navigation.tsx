import Image from "next/image";
import _ from "lodash";
import Link from "next/link";
import { UserImage } from "./video-component";
import { useUserQuery } from "@/entities/users";
import { SignOutButton } from "@/features/auth";
import useUserProfileNavigation from "../model/use-user-profile-navigation";

export function UserProfileNavigation({
  image,
  className = "",
}: {
  image: string;
  className?: string;
}) {
  const { data: user } = useUserQuery();
  const userProfileNavigation = useUserProfileNavigation()
  return (
    <div className="dropdown dropdown-end hidden laptop:flex">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <Image
            src={image || "/profile.jpg"}
            alt="User image"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-16 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li className="flex py-4 border-b">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span>
                {user?.firstName} {user?.lastName}
              </span>
              <span>{user?.email}</span>
            </div>
            <UserImage image={""} />
          </div>
        </li>

        {_.map(userProfileNavigation, (nav) => {
          return (
            <li
              key={`${nav.name}-${nav.path}`}
              className={`${(nav.name === "Settings" || nav.name === "Help") && "flex laptop:hidden"} `}
            >
              <Link
                href={nav.path || "/"}
                className={`${nav.lineAbove ? "border-t border-gray-200" : ""} block px-4 py-2 text-sm text-gray-700`}
              >
                <div className="flex items-center ">
                  {nav.icon("h-4 w-4 stroke-gray-700")}
                  <div className="pl-2">{nav.name}</div>
                </div>
              </Link>
            </li>
          );
        })}
        <div className="py-4 w-full">
          <SignOutButton className="w-full" />
        </div>
      </ul>
    </div>
  );
}
