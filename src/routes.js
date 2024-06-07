import React from "react";

// Admin Imports
// import MainDashboard from "views/admin/default";
import Marketplace from "views/user/marketplace";
import MarketplaceAdmin from "views/admin/marketplace";
import Profile from "views/user/profile";

// import DataTables from "views/admin/tables";
import History from "views/user/history";
import Wisata from "views/user/wisata";
import WisataAdmin from "views/admin/wisata";
import ProfileWisata from "views/user/profilewisata";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";
import InputUmkm from "views/admin/Inputumkm";
import InputWisata from "views/admin/inputwisata";

import EditUmkm from "views/admin/editumkm";
import EditWisata from "views/admin/editwisata";

// Icon Imports
import {
  // MdHome,
  MdOutlineShoppingCart,
  MdPerson,
  MdLandscape,
  MdMap,
  MdLock,
  MdShoppingCart,
  MdOutlineFmdGood,
} from "react-icons/md";

const routes = [
  {
    name: "Profil Desa",
    layout: "/user",
    path: "default",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
    secondary: true,
  },
  {
    name: "UMKM Desa",
    layout: "/user",
    path: "umkm",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Marketplace />,
  },
  {
    name: "Wisata Desa",
    layout: "/user",
    icon: <MdLandscape className="h-6 w-6" />,
    path: "wisata",
    component: <Wisata />,
  },
  {
    name: "Sejarah Desa",
    layout: "/user",
    path: "history",
    icon: <MdMap className="h-6 w-6" />,
    component: <History />,
  },
  {
    layout: "/user",
    path: "wisata/:id",
    component: <ProfileWisata />,
    hidden: true,
  },
  {
    name: "Sign In",
    layout: "/sign-in",
    path: "sign-in",
    hidden: true,
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },

  //admin

  {
    name: "Pendataan Wisata",
    layout: "/admin",
    path: "pendataan-wisata",
    icon: <MdOutlineFmdGood className="h-6 w-6" />,
    component: <WisataAdmin />,
    secondary: true,
  },

  {
    name: "Pendataan UMKM",
    layout: "/admin",
    path: "pendataan-umkm",
    icon: <MdShoppingCart className="h-6 w-6" />,
    component: <MarketplaceAdmin />,
    secondary: true,
  },

  {
    name: "Input UMKM",
    layout: "/admin",
    path: "pendataan-umkm/insert",
    hidden: true,
    component: <InputUmkm />,
  },

  {
    name: "Input Wisata",
    layout: "/admin",
    path: "pendataan-wisata/insert",
    hidden: true,
    component: <InputWisata />,
  },

  {
    name: "Edit UMKM",
    layout: "/admin",
    path: "pendataan-umkm/edit/:edit",
    hidden: true,
    component: <EditUmkm />,
  },

  {
    name: "Edit Wisata",
    layout: "/admin",
    path: "pendataan-wisata/edit/:edit",
    hidden: true,
    component: <EditWisata />,
  },
];
export default routes;
