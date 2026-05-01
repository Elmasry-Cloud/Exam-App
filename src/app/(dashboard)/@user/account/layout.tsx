import AccountHeader from "@/features/user-dashboard/components/account/account-header";
import SidebarAccountContent from "@/features/user-dashboard/components/account/features/sidebar-account-content";
import { BreadcrumbBasicAccount } from "@/features/user-dashboard/components/bread-crumb";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbBasicAccount />
      <div className="p-6">
        {/* AccountPage Header */}
        <AccountHeader backHref={"/account"} />

        <main className="flex gap-6">
          <SidebarAccountContent />
          {/* <div className="fixed">side</div> */}
          <div className=" bg-white p-6 min-h-120 grow">{children}</div>
        </main>

        {/* <main className="relative grid grid-cols-[18rem_minmax(0,1fr)]">
          <SidebarAccountContent />
          <div className="text-white bg-gray-800 min-h-120">{children}</div>
        </main> */}

        {/* AccountPage Content */}
        {/* <AccountContent /> */}
      </div>
    </>
  );
}
