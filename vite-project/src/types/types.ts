import type { ReactElement } from "react";

export type IRoute = {
    path: string;
    element: ReactElement;
    linkText?: string;
    visually: boolean;
}