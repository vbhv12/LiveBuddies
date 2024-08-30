export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <div className="h-full flex items-center just">
        {children}
     </div>
  );
}
