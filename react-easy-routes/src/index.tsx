import React from "react";
export function EasyRouter({ Route, paths }: { paths: object; Route: any }) {
  return (
    <>
      {Object.entries(paths || {}).map(([key, val]: any) =>
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
    </>
  );
}

export default EasyRouter;
