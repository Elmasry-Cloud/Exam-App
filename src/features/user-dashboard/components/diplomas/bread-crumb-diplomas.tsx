"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";

interface IBreadcrumbBasicDiplomas {
  text?: string;
  href?: string;
  titleExam?: string;
}

export function BreadcrumbBasicDiplomas({
  text,
  href,
  titleExam,
}: IBreadcrumbBasicDiplomas) {
  return (
    <Breadcrumb className="bg-white p-4 text-sm font-normal text-gray-400">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={"/"}>Diplomas</BreadcrumbLink>
        </BreadcrumbItem>
        {text && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={href}>{text}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{titleExam || "Exams"}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
