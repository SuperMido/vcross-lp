/* eslint-disable react-refresh/only-export-components */
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "@/styles/index.css";
import "@/utils/i18n.js";
import LoadingWidget from "./components/ui/LoadingWidget";

export const links = () => [
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
];

export const meta = () => [
  { title: "Vcross" },
  {
    name: "description",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

export default function Root() {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <LoadingWidget />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
