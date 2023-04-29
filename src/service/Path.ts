

const MainPath = {
    layout: "/*",
    auth: "/accounts/*",
    admin: "/admin/*"
};

const AuthPath = {
    register: "/register",
    login: "/login"
};

const AdminPath = {
    admin: "/admin",
    profile: "/admin/profile",
    contacts: "/admin/contacts",
    category: "/admin/category",
    products: "/admin/products",
    slider: "/admin/slider"
};

const LayoutPath = {
    main: "/",
    profile: "/profile",
    products: "/products"
};

const AllPath = {
    register: "/accounts/register",
    login: "/accounts/login"
};


export const Roads = {
    AdminPath,
    MainPath,
    AuthPath,
    AllPath,
    LayoutPath
};