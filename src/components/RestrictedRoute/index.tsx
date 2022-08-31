import React from 'react';
import { Navigate } from 'react-router';

export default function ProtectedRoute({ isAuthenticated, outlet }: any) {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: '/' }} />;
    }
};