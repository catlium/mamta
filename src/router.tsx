import { createBrowserRouter } from "react-router"

import HomePage from "./pages/home-page"
import AboutPage from "./pages/about-page"
import ProgramsPage from "./pages/programs-page"
import ContactPage from "./pages/contact-page"
import MainLayout from "./components/main-layout"
import DonatePage from "./components/donate"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        children: [
          {
            index: true,
            Component: ProgramsPage,
          },
          {
            path: ":id",
            Component: AboutPage,
          },
        ],
      },
      {
        path: "contact",
        Component: ContactPage,
      },
      {
        path: "donate",
        Component: DonatePage,
      },
    ],
  },
])
