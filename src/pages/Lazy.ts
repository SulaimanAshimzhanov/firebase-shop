import React from "react";

//Auth

const Register = React.lazy(() => import("../apps/auth/register/Register"));
const Login = React.lazy(() => import("../apps/auth/login/Login"));


export const AuthPages = {
    Register,
    Login
};


//Layout


const Main = React.lazy(() => import("../apps/layout/main/Main"));
const Profile = React.lazy(() => import("../apps/layout/profile/Profile"));
const Products = React.lazy(() => import("../apps/layout/products/Products"));


export const LayoutPages = {
    Main,
    Profile,
    Products
};


//Admin


const AdminProfile = React.lazy(() => import("../apps/admin/profile/Profile"));


export const AdminPages = {
    AdminProfile
}

