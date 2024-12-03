import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import MessageSection from "../components/MessageSection";
import ChatInput from "../components/ChatInput";
import UserStatus from "../components/UserStatus";

const ChatProvider = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "450px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset className="h-screen">
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background py-2 px-8 z-10">
          <div className="flex gap-2 items-center">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <UserStatus/>
          </div>
          <div className="w-fit ml-auto center">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 relative h-screen overflow-hidden">
          <MessageSection />
          <div className="md:px-8 pb-4">
            <ChatInput />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default ChatProvider
