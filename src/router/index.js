import Vue from "vue";
import VueRouter from "vue-router";
import Register from "@/views/Authentication/Register.vue";
import Login from "@/views/Authentication/Login.vue";
import VerifyOtp from "@/views/Authentication/VerifyOTP/VerifyOtp.vue";
import About from "@/views/About";
import AdminLogin from "@/views/Admin/Authentication/Login.vue";
import CompanyLogin from "@/views/Company/Authentication/Login.vue";
import PageNotFound from "@/views/PageNotFound";

Vue.use(VueRouter);

const routes = [
  // ! ************************************************************** Admin Routes ****************************************************** */
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin/Admin.vue"),
    meta: {
      authOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Dashboard",
    },
  },
  {
    path: "/add",
    name: "Add",
    component: () => import("@/views/Admin/Add.vue"),
    meta: {
      authOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Add User or Government",
    },
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/Admin/Lists/Users.vue"),
    meta: {
      authOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Users List",
    },
  },
  {
    path: "/companies",
    name: "Companies",
    component: () => import("@/views/Admin/Lists/Companies.vue"),
    meta: {
      authOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Companies List",
    },
  },
  {
    path: "/screenings",
    name: "Screenings",
    component: () => import("@/views/Admin/Screenings.vue"),
    meta: {
      authOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Screenings List",
    },
  },
  {
    path: "/reports",
    name: "Reports",
    component: () => import("@/views/Admin/Reports.vue"),
    meta: {
      authOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Reports List",
    },
  },

  // {
  //   path: "/admin/add",
  //   name: "Add",
  //   component: () => import("@/views/Admin/Admin.vue"),
  //   meta: {
  //     authOnly: true,
  //     adminAuth: true,
  //     hideHeaderFooter: true,
  //     title: "HAP ID Number | Admin Dashboard",
  //   },
  // },
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: {
      guestOnly: true,
      adminAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Admin Login",
    },
  },

  // ? ************************************************************** company Routes ****************************************************** */
  {
    path: "/company",
    name: "CompanyLogin",
    component: CompanyLogin,
    meta: {
      guestOnly: true,
      // companyAuth: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Company Login",
    },
  },
  {
    path: "/company/dashboard",
    name: "Company",
    // component: () => import("@/views/Company/Index.vue"),
    component: () => import("@/views/ManageRequests.vue"),
    meta: {
      authOnly: true,
      // companyAuth: true,
      title: "HAP ID Number | Company Index",
    },
  },
  {
    path: "/company/index",
    name: "CompanyIndex",
    component: () => import("@/views/Company/Index.vue"),
    // component: () => import("@/views/ManageRequests.vue"),
    meta: {
      authOnly: true,
      // companyAuth: true,
      title: "HAP ID Number | Company Index",
    },
  },

  // ************************************************************** Users Routes ****************************************************** */
  {
    path: "/",
    name: "Index",
    component: () => import("@/components/Index.vue"),
    meta: { guestOnly: true, title: "HAP ID Number" },
  },

  {
    path: "/index",
    name: "Dashboard",
    component: () => import("@/components/Index.vue"),
    meta: { authOnly: true, title: "HAP ID Number | User Dashboard" },
  },
  {
    path: "/user/dashboard",
    name: "SupplyChainDashboard",
    component: () => import("@/views/Forms/SupplyChain"),
    meta: { authOnly: true, title: "HAP ID Number | User Dashboard" },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // meta: { guestOnly: true },
  },
  // ************************************************************** Authentication Routes ****************************************************** */
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
    meta: { title: "HAP ID Number | 404" },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      guestOnly: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Register",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guestOnly: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Login",
    },
  },
  {
    path: "/verify_otp",
    name: "VerifyOtp",
    component: VerifyOtp,
    props: true,
    meta: {
      guestOnly: true,
      hideHeaderFooter: true,
      title: "HAP ID Number | Verify Otp",
    },
  },
  {
    path: "/search-hap-id",
    name: "SearchLook",
    component: () => import("@/views/Forms/SearchLook"),
    props: true,
    meta: { title: "HAP ID Number | Search Look" },
  },
  {
    path: "/govt-hap-id",
    name: "GovHapId",
    component: () => import("@/views/Government/GovHapId"),
    meta: { title: "HAP ID Number | Government Hap Id" },
  },
  {
    path: "/request",
    name: "Request",
    component: () => import("@/views/Forms/Request"),
    meta: { title: "HAP ID Number | Request" },
  },
  {
    path: "/requesting",
    name: "ThankRequesting",
    component: () => import("@/views/ThankRequesting"),
    meta: { hideHeaderFooter: true, title: "HAP ID Number | Thank Requesting" },
  },
  {
    path: "/information",
    name: "CompanyInformation",
    component: () => import("@/views/CompanyInformation"),
    meta: { title: "HAP ID Number | Company Information" },
  },
  {
    path: "/information/:companyId",
    name: "QRCompanyInformation",
    component: () => import("@/views/CompanyInformation"),
    meta: { title: "HAP ID Number | Company Information" },
  },
  {
    path: "/scan_information",
    name: "ScannedInfo",
    component: () => import("@/views/Company/ScannedInfo"),
    meta: { title: "HAP ID Number | Company Information" },
  },
  {
    path: "/scan_qr/:companyId/:userType",
    name: "ScanQRCompanyInformation",
    component: () => import("@/views/Company/ScanQrCompanyInfo"),
    meta: { title: "HAP ID Number | Company Information" },
  },
  {
    path: "/supplychain",
    name: "SupplyChain",
    component: () => import("@/views/Forms/SupplyChain"),
    meta: { title: "HAP ID Number | Supply Chain" },
  },
  {
    path: "/request-meeting",
    name: "GovernmentMeeting",
    component: () => import("@/views/GovernmentMeeting"),
    meta: { title: "HAP ID Number | Government Meeting" },
  },
  {
    path: "/terms-conditions",
    name: "TermsCond",
    component: () => import("@/views/TermsCond"),
    meta: { title: "HAP ID Number | Terms & Conditions" },
  },
  {
    path: "/manage-requests",
    name: "ManageRequests",
    component: () => import("@/views/ManageRequests"),
    meta: { title: "HAP ID Number | Manage Requests" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

const isLoggedIn = () => {
  return JSON.parse(localStorage.getItem("userInfo"));
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authOnly)) {
    if (!isLoggedIn() && !to.meta.adminAuth) {
      next({
        path: "/",
      });
    } else {
      if (!isLoggedIn() && to.meta.adminAuth) {
        next({
          path: "/admin/login",
        });
      } else if (!isLoggedIn() && to.meta.adminAuth) {
        next({
          path: "/admin",
        });
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guestOnly)) {
    if (isLoggedIn() && isLoggedIn().is_admin == "0") {
      next({
        path: `/${isLoggedIn().userType}/dashboard`,
      });
    } else if (isLoggedIn() && isLoggedIn().is_admin == "1") {
      next({
        path: "/admin",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
