import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Individual Therapy",
        path: "/error",
        newTab: false,
      },
      {
        id: 42,
        title: "Couples Counselling",
        path: "/error",
        newTab: false,
      },
      {
        id: 43,
        title: "Family Therapy",
        path: "/error",
        newTab: false,
      },
      {
        id: 44,
        title: "Child and Adolescent Therapy",
        path: "/error",
        newTab: false,
      },
      {
        id: 45,
        title: "Group Therapy",
        path: "/error",
        newTab: false,
      },
      {
        id: 46,
        title: "Psychological Assessments",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Who We Treat",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
