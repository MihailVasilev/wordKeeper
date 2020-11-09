import Main from "../pages/Main";
import StarredWords from "../pages/StarredWords";

const routes = [
  {
    title: "Word Keeper",
    path: "/",
    component: Main,
    exact: true,
  },
  {
    title: "Starred Words",
    path: "/starredWords",
    component: StarredWords,
    exact: false,
    iconClassname: "fa fa-star",
  },
];

export default routes;
