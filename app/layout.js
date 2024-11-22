import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NIC Adventure Center",
  description:
    "Watersport Rentals such as: Kayak Rentals, Stand Up Paddleboard Rentals, Whitewater Raft Rentals",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="light">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedIn>
            <Navbar />
            {children}
          </SignedIn>
          <SignedOut>
            <div className="w-full min-h-dvh flex justify-center items-center">
              <SignInButton />
            </div>
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
