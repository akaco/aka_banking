import MobileNavBar from "@/components/MobileNavBar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn: User = {
    firstName: 'Amirreza',
    lastName: 'Ya',
    email: 'a@b.com',
    $id: '1',
    address1: '123 Main St',
    city: 'Melbourne',
    dateOfBirth: '1980-01-01',
    dwollaCustomerId: '1',
    dwollaCustomerUrl: '1',
    postalCode: '3000',
    ssn: '123-45-6789',
    state: 'VIC',
    userId: '1'
  };
  return (

    <main className="flex h-screen w-full font-inter">
      <Sidebar
        user={loggedIn}
      />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg"
            alt="AKA Bank Logo"
            width={30}
            height={30}
          />
          <div>
            <MobileNavBar
              user={loggedIn} />
          </div>
        </div>
        {children}
      </div>

    </main>

  );
}
