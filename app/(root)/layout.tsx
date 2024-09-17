import SideBar from "@/components/SideBar";
import MobileNav from "@/components/ui/MobileNav";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={fistname:'Niyaz',lastname:"Nabi"}
  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={13} height={13} alt='mbile'/>
           <MobileNav user={loggedIn}/> 
          </div>
        {children}
        </div>
        
    </main>
  );
}
