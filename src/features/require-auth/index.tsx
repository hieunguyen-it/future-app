import { Navigate } from "react-router-dom";
import { selectIsAuthenticated, useAppSelector } from '@store';
import { getLocalStorage, keyLocalStore } from "@helpers/utils/local-storage";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }
const RequireAuth = ({children}: Props) => {
    const token = getLocalStorage(keyLocalStore.token);

    const isAuthenticatedUser = useAppSelector(selectIsAuthenticated);

    if (!token && !isAuthenticatedUser) {
        return <Navigate to="sign-in" replace />
    }

    return children
}


export default RequireAuth;