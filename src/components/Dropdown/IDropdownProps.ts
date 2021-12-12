import { ReactNode } from "react";

export interface IDropdownProps {
    id: string;

    options: ReactNode[];

    placeholderText: ReactNode;
}
