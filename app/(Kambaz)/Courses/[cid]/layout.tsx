import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  params: { cid: string };
};

export default function Layout({ children, params }: LayoutProps) {
  const { cid } = params;

  return (
    <div>
      <h2>Course: {cid}</h2>
      <div>{children}</div>
    </div>
  );
}