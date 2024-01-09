import { useRoutes, Navigate } from "react-router-dom";
import { Drag, Slider, Canban } from "./elements";
// layout
import Layout from "../components/layout";

export default function Router() {
  return useRoutes([
    // Dashboard
    {
      element: <Layout withHeader={false} />,
      children: [
        { element: <Navigate to="drag" replace />, index: true },
        { path: "drag", element: <Drag /> },
        { path: "slider", element: <Slider /> },
        { path: "canban", element: <Canban /> },
      ],
    },
  ]);
}
