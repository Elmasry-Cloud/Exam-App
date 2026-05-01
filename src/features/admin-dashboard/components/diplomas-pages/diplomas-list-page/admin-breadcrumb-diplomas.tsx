import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";

interface IBreadCrumbProps {
  title?: string;
  titleQue?: string;
  titleEdit?: string;
  defaultTitle?: string;
  href?: string;
}

export function AdminBreadcrumbDiplomas({
  title,
  defaultTitle,
  titleEdit,
  href,
  titleQue,
}: IBreadCrumbProps) {
  return (
    <Breadcrumb className="bg-white p-4 text-sm font-normal text-gray-400">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={href}>{defaultTitle}</BreadcrumbLink>
        </BreadcrumbItem>
        {title && (
          <>
            <BreadcrumbSeparator />
            {titleEdit && titleEdit !== "Questions" && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{titleEdit}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}

            {titleEdit && titleEdit === "Questions" && (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink className="truncate max-w-[18ch]" href={href}>
                    {title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={href}>{titleEdit}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{titleQue}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}

            {!titleEdit && (
              <BreadcrumbItem>
                <BreadcrumbPage>{title}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
