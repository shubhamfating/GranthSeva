

export const uiRoutes = {
    login: "/login",
    notAuthrized: "/not-authrized",
    register: "/register",
    authHome: "/dashboard",
    userHome: "/",

    operator: {
        show: "/operator-list",
        add: "/add-operator",
        update: "/update-operator/:slug",
        permission: "/operators-permission",
    },

    admin: {
        corporator: {
            create: "/corporator-create-profile",
            profile: "/view-profile",
            show: "/corporater-show-table",
            permission: "/corporator-prmission-page",
            update: "/update-corporator-page/:slug"

        },
        work: {
            add: "/add-work",
            edit: "/edit-work/:slug",
            show: "/work-list",
        },

        election: {
            add: "/add-election",
            edit: "/edit-election/:slug",
            show: "/election-list",
            voting: "/election-voting/:slug",
            // voted: "/election-voted/:slug",
            voted: "/api/voter-toggles",
        },
        events: {
            create: "/add-event",
            show: "/event-list",
            edit: "/edit-event/:slug",
            view: "/view-event",
        },
        residents: {
            add: "/add-residant",
            show: "/residant-list",
            edit: "/edit-residant/:slug",
        },
        bachatgat: {
            add: "/add-saving-group",
            show: "/saving-group-list",
            member: "/saving-group-member-list",
            update: "/edit-saving-group/:slug",
            work: {
                show: "/saving-group-work-list/:slug",
                add: "/add-saving-group-work/:slug",
                update: "/edit-saving-group-work/:slug"
            }

        },

        member: {
            add: "/new-member-registration",
            updateMember: "/saving-group-update-member-form/:slug"
        },

        scheme: {
            add: "/add-scheme",
            show: "/scheme-list",
            update: "/edit-scheme/:slug",
        },

        voter: {
            add: "/add-voter",
            show: "/voter-list",
            update: "/edit-voter/:slug",
        },
        ebook: {
            add: "/add-ebook",
            show: "/ebook-list",
            update: "/edit-ebook/:slug",
        },
        category: {
            add: "/admin/categories/add",
            update: "/admin/categories/:id/edit",
            show: "/category-list",
        },
    },
    user: {
        eBooks: {
            card: "/user-show-book"
        },

        complaint: {
            add: "/add-complaint",
            show: "/complaint-list",
            update: "/edit-complaint/:slug",
            card: "/view-complaint"
        }

    },
    super_admin: {
        corporator: {
            list: "/corporator-list",
            inactiveList: "/corporator-inactive-list"
        }
    }

};









