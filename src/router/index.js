import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloView from "../views/HelloView.vue";
import PostView from "../views/PostView.vue";
import NotFoundView from "../views/NotFound.vue";
import CommentComp from "../components/CommentComp.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
      // short for LeftSidebar: LeftSidebar
      NotFoundView,
      // they match the `name` attribute on `<router-view>`
      //RightSidebar,
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/hello/:helloParam*", // /hello/ 하위에 0개 이상의 depth 경로를 다 처리해줌.
    name: "hello",
    component: HelloView,
  },
  {
    path: "/post",
    name: "post",
    component: PostView,
  },
  {
    path: "/post/:id(\\d+)", //id가 파라미터, 반드시 숫자 형식(정규표현식. \d 앞에 \를 하나 더 붙여서 자바스크립트가 인식할 수 있게 함.) (/post/1532211)
    name: "detailPost",
    component: PostView,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/comments is matched
        name: "comments",
        path: "comments",
        component: CommentComp,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id is matched
        path: "",
        component: CommentComp,
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /comments is matched
        // '/' 를 붙일 경우 중첩하지 않고 루트 경로부터 요청할 수 있음. /comments를 요청하면 ParentComponent까지 다 나옴. (위 경로들과 결과가 같음)
        path: "/comments",
        component: CommentComp,
      },
    ],
  },
  {
    path: "/post/:userName", //userName 파라미터. 숫자 형식이 아닐 때 (/post/dhlee)
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
