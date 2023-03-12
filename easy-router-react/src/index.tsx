import React from "react";
import { Routes, Route } from "react-router-dom";

export function EasyRouter({ routes }: { routes: object }) {
  return (
    <Routes>
      {Object.entries(routes || {}).map(([key, val]: any) =>
        val?.element ? (
          <Route key={key} path={key} element={val?.element}>
            {Object.entries(val?.sub_pages || {}).map(([key, val]: any) => (
              <Route key={key} path={key === "/" ? "" : key} element={val} />
            ))}
          </Route>
        ) : (
          <Route key={key} path={key} element={val} />
        )
      )}
    </Routes>
  );
}

export default EasyRouter;
