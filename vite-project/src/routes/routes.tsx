import ErrorPathPage from "../pages/ErrorPathPage";
import Main from "../pages/Main";

import type { IRoute } from "../types/types";

export const routes:IRoute[] = [
    { path: "/", element: <Main />, linkText: "main", visually: true },
    { path: "*", element: <ErrorPathPage />, visually: false }
]