import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    redirect: "/home/homepage",
    children: [
      {
        path: "/home/homepage",
        name: "Homepage",
        meta: { index: 0 },
        component: () => import("@/views/Homepage.vue"),
      },
      {
        path: "/personalcenter",
        name: "personalCenter",
        meta:{ index: 2 },
        component: () => import("@/views/personalCenter/personalCenter.vue"),
        redirect: "/personalcenter/personalhomepage",
        children: [
          {
            path: "/personalcenter/personalhomepage",
            name: "personalHomepage",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/personalHomepage.vue"),
          },
          {
            path: "/personalcenter/postgoods",
            name: "postGoods",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/postGoods.vue"),
          },
          {
            path: "/personalcenter/editpersonaldata",
            name: "editPersonalData",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/editPersonalData.vue"),
          },
          {
            path: "/personalcenter/purchased",
            name: "Purchased",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/Purchased.vue"),
          },
          {
            path: "/personalcenter/bidorders",
            name: "bidOrders",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/bidOrders.vue"),
          },
          {
            path: "/personalcenter/shippingaddress",
            name: "shippingAddress",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/shippingAddress.vue"),
          },
          {
            path: "/personalcenter/mycollection",
            name: "myCollection",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/myCollection.vue"),
          },
          {
            path: "/personalcenter/sold",
            name: "Sold",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/Sold.vue"),
          },
          {
            path: "/personalcenter/storemanagement",
            name: "storeManagement",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/storeManagement.vue"),
          },
          {
            path: "/personalcenter/myposting",
            name: "myPosting",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/myPosting.vue"),
          },
          {
            path: "/personalcenter/mymessage",
            name: "myMessage",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/myMessage.vue"),
          },
          {
            path: "/personalcenter/contactcustomerservice",
            name: "contactCustomerService",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/contactCustomerService.vue"),
          },
          {
            path: "/personalcenter/contactcustomerservice/safeguide",
            name: "safeGuide",
            meta: { index: 2 },
            component: () => import("@/views/personalCenter/safeGuide.vue"),
          },
        ]
      },
      {
        path: "/shoppingcentre",
        name: "shoppingCentre",
        meta: { index: 1 },
        component: () => import("@/views/shoppingCentre.vue"),
        redirect: "/shoppingcentre/shoppingcentrehomepage",
        children: [
          {
            path: "/shoppingcentre/shoppingcentrehomepage",
            name: "shoppingCentreHomepage",
            meta: { index: 1 },
            component: () => import("@/views/shoopingCentre/shoppingCentreHomepage.vue")
          },
          {
            path: "/shoppingcentre/goodsdetails/:id",
            name: "goodsDetails",
            meta: { index: 1 },
            component: () => import("@/views/shoopingCentre/goodsDetails.vue"),
            props: true
          },
        ]
      },
      {
        path: "/contactus",
        name: "contactUs",
        meta: { index: 3 },
        component: () => import("@/views/contactUs/contactUs.vue"),
        redirect: "/contactus/before",
        children: [
          {
            path: "/contactus/before",
            name: "beforeContactUs",
            meta: { index: 3 },
            component: () => import("@/views/contactUs/beforeContactUs.vue"),
          },
          {
            path: "/contactus/after",
            name: "afterContactUs",
            meta: { index: 3 },
            component: () => import("@/views/contactUs/afterContactUs.vue"),
          },
        ]
      }
    ]
  },
  {
    // 登录
    path: "/login",
    name: "login",
    component: () => import("@/views/Login/Login.vue"),
    redirect: "/passwordlogin",
    children: [
      {
        path: "/passwordlogin",
        name: "passwordLogin",
        component: () => import("@/views/Login/passwordLogin.vue"),
      },
      {
        path: "/codelogin",
        name: "codeLogin",
        component: () => import("@/views/Login/codeLogin.vue"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/Login/register.vue"),
      },
      {
        path: "/forgetpassword",
        name: "forgetPassword",
        component: () => import("@/views/Login/forgetPassword.vue"),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
