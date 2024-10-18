export type RouteType = {
  path: string;
  element: JSX.Element;
};

export type RoutesType = { unknown: RouteType[]; user: RouteType[] };
