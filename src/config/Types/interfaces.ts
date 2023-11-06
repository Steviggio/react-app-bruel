import { ReactNode } from "react"

export interface ModalRendererProps {
  children: string | JSX.Element | JSX.Element[]
}

export interface LayoutProps {
  children: ReactNode;
}
