"use client";
import { cn } from "@/shared/lib/utils/tailwind-cn";
import { BookOpenCheck, GraduationCap, Logs, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSideBody() {
  const pathname = usePathname();

  // Route Regex
  const diplomasRoutes =
    /^\/dashboard(\/|\/add-diploma|\/edit-diploma\/[^/]+|\/view-diploma\/[^/]+)?$/;
  const examRoutes =
    /^\/dashboard\/(exam-list|edit-exam\/[^/]+|add-exam|view-exam\/[^/]+|questions-view|questions-edit-add|questions-add-bulk|add-questions|edit-questions\/[^/]+|view-questions\/[^/]+)/;

  return (
    <div className="side-body grow">
      {/* Item */}
      {/* active: bg-gray-700 border border-gray-400 */}
      <Link
        href={`/dashboard`}
        className={cn(
          `item p-4 flex items-center gap-2.5 cursor-pointer `,
          diplomasRoutes.test(pathname) && `bg-gray-700 border border-gray-400`,
        )}
      >
        <GraduationCap size={24} strokeWidth={1.25} />
        <h2 className="text-base font-normal">Diplomas</h2>
      </Link>

      {/* Item */}
      <Link
        href={`/dashboard/exam-list`}
        className={cn(
          `item p-4 flex items-center gap-2.5 cursor-pointer `,
          examRoutes.test(pathname) && `bg-gray-700 border border-gray-400`,
        )}
      >
        <BookOpenCheck size={24} strokeWidth={1.25} />
        <h2 className="text-base font-normal">Exams</h2>
      </Link>

      {/* Item */}
      <div className="item p-4 flex items-center gap-2.5 cursor-pointer">
        <UserRound size={24} strokeWidth={1.25} />
        <h2 className="text-base font-normal">Account Settings</h2>
      </div>

      {/* Item */}
      <div className="item p-4 flex items-center gap-2.5 cursor-pointer">
        <Logs size={24} strokeWidth={1.25} />
        <h2 className="text-base font-normal">Audit Log</h2>
      </div>
    </div>
  );
}
