// All components in this file will be included in all child components
// Since this is in the root of the pages directory it will be included in every page on the server (also applied to CSS imports)
import "../styles/globals.css";
import "leaflet/dist/leaflet.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
