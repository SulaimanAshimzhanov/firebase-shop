import { CgInstagram } from "react-icons/cg";
import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";
import { BsSliders } from "react-icons/bs";
import { Roads } from "../service/Path";

const HeaderTopIcons = [
    {
        id: 1,
        icon: CgInstagram
    },
    {
        id: 2,
        icon: RiWhatsappLine
    },
    {
        id: 4,
        caption: "Log in",
        route: Roads.AllPath.login
    },
    {
        id: 5,
        caption: "Sign up",
        route: Roads.AllPath.register
    }
];


const HeaderBottomList = [
    {
        id: 1,
        caption: "Home"
    },
    {
        id: 2,
        caption: "Contacts"
    },
    {
        id: 4,
        caption: "Profile",
        route: Roads.LayoutPath.profile
    },
    {
        id: 3,
        caption: "Products",
        route: Roads.LayoutPath.products
    }
];


const HeaderSignOut = [
    {
        id: 1,
        caption: "SignOut"
    }
];


const SliderList = [
    {
        id: 1,
        url: "https://39rus.org/images/drawn-bmw-bmw-logo-7.jpg"
    },
    {
        id: 2,
        url: "https://mb-bel.ru/project/phpthumb/phpthumb.php?src=.%2Fupload%2Fimg%2F2021%2F04%2F21%2F607fc50c2d79e.jpg&w=1040&f=jpg&bg=FFFFFF&q=60&hash=b8cc055b2646dced95c5c0520f2561d5"
    },
    {
        id: 3,
        url: "https://a.d-cd.net/6cae57u-960.jpg"
    },
    {
        id: 4,
        url: "https://gray-wafb-prod.cdn.arcpublishing.com/resizer/iNQNJfbVoWUhNJwlglGfUtqD5-U=/980x0/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/PXPAWHMFANEKXKSGF23ICGLH5E.jpg"
    },
    {
        id: 5,
        url: "https://hdpic.club/uploads/posts/2021-11/1636782475_32-hdpic-club-p-znak-leksus-49.png"
    }
];


const adminList = [
    {
        id: 1,
        title: "Profile",
        route: Roads.AdminPath.profile,
        icons: AiOutlineProfile
    },
    {
        id: 2,
        title: "Products",
        route: Roads.AdminPath.products,
        icons: MdOutlineProductionQuantityLimits
    },
    {
        id: 3,
        title: "Contacts",
        route: Roads.AdminPath.contacts,
        icons: RiContactsLine
    },
    {
        id: 4,
        title: "Categories",
        route: Roads.AdminPath.category,
        icons: MdOutlineCategory
    },
    {
        id: 5,
        title: "Slider",
        route: Roads.AdminPath.slider,
        icons: BsSliders
    },
];



export const LIST = {
    HeaderBottomList,
    HeaderTopIcons,
    HeaderSignOut,
    SliderList,
    adminList
};