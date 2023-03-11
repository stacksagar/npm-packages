export default function ReactEasyRoutes({ Routes, Route, paths }) {
  return (
    <Routes>
      {Object.entries(paths || {}).map(([key, val]) =>
        val?.element ? (
          <Route key={key} path={key} element={val?.element}>
            {Object.entries(val?.sub_pages || {}).map(([key, val]) => (
              <Route key={key} path={key === "root" ? "" : key} element={val} />
            ))}
          </Route>
        ) : (
          <Route key={key} path={key} element={val} />
        )
      )}
    </Routes>
  );
}
