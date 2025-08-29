export const metadata = {
  title: "Yazı-Tura Mini App (Frog)",
  description: "Frog + Next.js ile Farcaster Mini App — Yazı/Tura",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
