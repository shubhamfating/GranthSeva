
export const apiRoutes = {
   admin: {
      scheme: {
         add: "add-scheme",
         list: "scheme-list",
         get: "get-scheme/",
         update: "update-scheme/slug",
         delete: "delete-scheme/"
      },
      work: {
         add: "add-work",
         list: "work-list",
         get: "get-work/",
         update: "update-work/slug",
         delete: "delete-work/"

      },
      functionsevent: {
         add: "add-event",
         list: "event-list",
         get: "get-event/",
         update: "update-event/slug",
         voting: "voting/:slug",
         delete: "delete-event/"
      },
      savinggroup:{
         add: "add-saving-group",
         list: "saving-group-list",
         get: "get-saving-group/",
         update: "update-saving-group/slug",
         delete: "delete-saving-group/"
      },
      ebook:{
         add: "add-ebook",
         list: "ebook-list",
         get: "get-ebook/",
         update: "update-ebook/slug",
         delete: "delete-ebook/"
      },
      news: {
         add: "news/add",
         update: "news/update"
      },
      corporator: "corporator",

      voter: {
         add: "add-voter",
         list: "voter-list",
         get: "get-voter/:slug",
         update: "edit-voter",
      },

      // election: {
      //    add: "add-election",
      //    list: "election-list",
      //    get: "get-election/:slug",
      //    update: "edit-election",
      //    voting: "voting/:slug",
      //    delete: "delete-election/"
      // },
      election: {
         add: "add-election",
         list: "election-list",
         get: "get-election/:slug",
         update: "edit-election",
         voting: "voting/:slug",
         voted: "/api/voter-toggles",
         delete:"delete-election/"
      },
      category: {
         list: "/api/categories",
         delete: "/api/categories/:id",
         show: "categories-list"
      },

      rasidant: {
         add: "add-residant",
         list: "residant-list"
      }


   },

   user: {
      complaint: {
         add: "add-complaint",
         list: "complaint-list",
         get: "get-complaint/:slug",
         update: "edit-complaint",
         delete: "edit-delete",
      },
   },
   auth: {},

};