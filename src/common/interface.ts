export interface ILayoutProps {
  closePanel: () => void;
  toggleSideBar: (val: boolean) => void;
}

export interface ISideComponentProps {
  layoutProps: ILayoutProps;
}

export type SideComponentType = (props: ISideComponentProps) => JSX.Element;

export interface IRouteItem {
  path: string;
  exact: boolean;
  component: JSX.Element;
}
