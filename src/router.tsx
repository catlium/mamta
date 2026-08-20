import { createBrowserRouter } from "react-router"

import HomePage from "./pages/home-page"
import AboutPage from "./pages/about-page"
import ProgramsPage from "./pages/programs-page"
import ContactPage from "./pages/contact-page"
import MainLayout from "./components/main-layout"
import DonatePage from "./pages/donate-page"
import SingleProgramPage from "./pages/single-program-page"
import NotFoundPage from "./pages/not-found-page"
import ErrorPage from "./pages/error-page"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
            Component: SingleProgramPage,
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
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
])
