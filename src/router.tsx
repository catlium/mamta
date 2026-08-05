import { createBrowserRouter } from "react-router";

import App from "./app";

import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ProgramsPage from "./pages/programs-page";
import ContactPage from "./pages/contact-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "programs",
        Component: ProgramsPage,
      },
      {
        path: "contact",
        Component: ContactPage,
      },
    ],
  },
]);