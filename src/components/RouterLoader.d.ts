import React, { Component } from 'react';

interface IRouters {
  path: string;
  component: React.ReactNode;
  redirect?: string;
}

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onlyRouters: boolean;
  routers: Array<IRouters>;
  routerType?: 'HashRouter' | 'BrowserRouter' | 'MemoryRouter' | 'Router';
  history?: object;
}

export default class extends Component<IProps> {}
