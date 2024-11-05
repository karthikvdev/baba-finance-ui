/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomePage } from "../pages/home-page";
import { UI_ENDPOINTS } from "../utils/endpoints";
import { PUBLIC_PAGES, PublicRoute } from "./public.routes";
import { PRIVATE_PAGES, PrivateRoute } from "./private.routes";
import AppLayout from "../layouts";

const AppRouter = () => {

    const userData = useSelector((state: any) => state?.user);

    return (
        <Routes>
            <Route path="/" element={<Suspense> <HomePage /></Suspense>} />
            <Route element={<PrivateRoute isAuthenticated={!!userData?.access} />}>
                <Route path={UI_ENDPOINTS.APP} element={<AppLayout />}>
                    {PRIVATE_PAGES?.map((page, index) => <Route key={index} path={page?.path} element={<Suspense>{page?.component}</Suspense>} />)}
                </Route>
            </Route>
            <Route element={<PublicRoute isAuthenticated={!!userData?.access} />} >
                {PUBLIC_PAGES?.map((page, index) => <Route key={index} path={page?.path} element={<Suspense>{page?.component}</Suspense>} />)}
            </Route>
        </Routes>
    );
};

export default AppRouter;
