import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function GoBack({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="back flex items-center justify-center bg-white px-1.5 border border-blue-600 text-blue-600 cursor-pointer"
    >
      <ChevronLeft size={24} />
    </Link>
  );
}
