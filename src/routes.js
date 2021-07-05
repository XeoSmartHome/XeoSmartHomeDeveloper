export const Routes = {
    // presentation
    Home: {
        path: '/'
    },

    // account
    SignIn: {
        path: '/sign-in'
    },
    SignOut: {
        path: '/sign-out'
    },
    SignUp: {
        path: '/sign-up'
    },
    ForgotPassword: {
        path: '/forgot-password'
    },
    ResetPassword: {
        path: '/reset-password'
    },
    MyAccount: {
        path: '/my-account'
    },

    // dashboard
    Dashboard: {
        path: '/dashboard'
    },
    DeviceType: {
        path: '/device-type/:deviceTypeId',
        deviceTypeId: ':deviceTypeId'
    },
    CreateDeviceType: {
        path: '/create-device-type'
    }
}
/*
export const OldRoutes = {
    // pages
    Presentation: {path: "/"},
    DashboardOverview: {path: "/old_dashboard/overview"},
    Transactions: {path: "/transactions"},
    Settings: {path: "/settings"},
    Upgrade: {path: "/upgrade"},
    BootstrapTables: {path: "/tables/bootstrap-tables"},
    Billing: {path: "/examples/billing"},
    Invoice: {path: "/examples/invoice"},
    Signin: {path: "/examples/sign-in"},
    Signup: {path: "/examples/sign-up"},
    ForgotPassword: {path: "/examples/forgot-password"},
    ResetPassword: {path: "/examples/reset-password"},
    Lock: {path: "/examples/lock"},
    NotFound: {path: "/examples/404"},
    ServerError: {path: "/examples/500"},

    // docs
    DocsOverview: {path: "/documentation/overview"},
    DocsDownload: {path: "/documentation/download"},
    DocsQuickStart: {path: "/documentation/quick-start"},
    DocsLicense: {path: "/documentation/license"},
    DocsFolderStructure: {path: "/documentation/folder-structure"},
    DocsBuild: {path: "/documentation/build-tools"},
    DocsChangelog: {path: "/documentation/changelog"},

    // components
    Accordions: {path: "/components/accordions"},
    Alerts: {path: "/components/alerts"},
    Badges: {path: "/components/badges"},
    Widgets: {path: "/widgets"},
    Breadcrumbs: {path: "/components/breadcrumbs"},
    Buttons: {path: "/components/buttons"},
    Forms: {path: "/components/forms"},
    Modals: {path: "/components/modals"},
    Navs: {path: "/components/navs"},
    Navbars: {path: "/components/navbars"},
    Pagination: {path: "/components/pagination"},
    Popovers: {path: "/components/popovers"},
    Progress: {path: "/components/progress"},
    Tables: {path: "/components/tables"},
    Tabs: {path: "/components/tabs"},
    Tooltips: {path: "/components/tooltips"},
    Toasts: {path: "/components/toasts"},
    WidgetsComponent: {path: "/components/widgets"}
};*/