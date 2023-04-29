


import React from 'react';
import { useNavigate } from "react-router-dom";
import { Roads } from '../service/Path';

export const useRedirect = () => {
    const navigate = useNavigate();

    const goToLogin = React.useCallback(() => navigate(Roads.AllPath.login), [navigate]);
    const goToMain = React.useCallback(() => navigate(Roads.LayoutPath.main), [navigate]);
    const goToProfile = React.useCallback(() => navigate(Roads.LayoutPath.profile), [navigate]);
    const goToAdmin = React.useCallback(() => navigate(Roads.AdminPath.admin), [navigate]);

  return {
    actions: {
        goToLogin,
        goToMain,
        goToProfile,
        goToAdmin
    }
  }
};

