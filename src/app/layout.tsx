export const metadata = {
  title: "AvowID | Enterprise Identity with Device Trust",
  description:
    "AvowID delivers enterprise identity, authentication, and access control with device trust from DriveStrike."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
