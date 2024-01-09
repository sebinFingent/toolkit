import { Suspense, lazy } from "react";
// components
import Loader from "../components/loader";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

// DASH
export const Drag = Loadable(lazy(() => import("../pages/dashboard/drag")));
// Drag
export const Slider = Loadable(lazy(() => import("../pages/dashboard/slider")));
// Canban
export const Canban = Loadable(lazy(() => import("../pages/dashboard/canban")));
