import React, { lazy, Suspense, useEffect, useState } from "react";
import Store from "./apis/Store";
import Home1 from "./components/Home1";
import ErrorBoundary from "./Error Boundary/ErrorBoundary";

let Card = lazy(() => import("./components/Card")); // promise

const App = () => {
  let [shoulLoad, setShouldLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShouldLoad(true);
    }, 5000);
  }, []);
  return (
    <ErrorBoundary>
      <Store>
        <Home1 />
        <Suspense fallback={<h1>Loadingdskjhdskjhkjdshkjdshdkj...........</h1>}>
          <Card />
        </Suspense>
      </Store>
    </ErrorBoundary>
  );
};

export default App;
