export type RouteType = {
  path: string;
  element: JSX.Element;
  layout: JSX.Element | any;
};

export type RoutesType = { unknown: RouteType[]; user: RouteType[] };
