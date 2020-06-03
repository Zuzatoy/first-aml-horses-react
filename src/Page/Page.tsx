import React, { FC, ReactNode } from "react";

import "./Page.css";

type PageProps = {
  header: ReactNode;
};

export const Page: FC<PageProps> = ({ children, header }) => (
  <article className="Page">
    <Header>{header}</Header>
    {children}
  </article>
);

const Header: FC = ({ children, ...props }) => (
  <h1 className="Header" {...props}>
    {children}
  </h1>
);
