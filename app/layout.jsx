import "../styles/global.css";
import Navigation from "./components/navigation";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
