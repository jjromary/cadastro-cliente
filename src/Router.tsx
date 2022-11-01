import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Components/Home";
import { DefaultLayout } from "./Pages/layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

