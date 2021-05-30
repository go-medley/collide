import React, { Suspense } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BaseLayout from "./layout";
import Loader from "./components/loader";

const HomePage = React.lazy(() => import("./pages/home"));
const EditorPage = React.lazy(() => import("./pages/editor"));

const App = () => {
    return (
        <Router>
            <BaseLayout>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route path="/:id">
                            <EditorPage />
                        </Route>
                    </Switch>
                </Suspense>
            </BaseLayout>
        </Router>
    );
};

export default App;
