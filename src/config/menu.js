import { getUserRoles } from "./user"


export const getMenu = () => {
    menu = [];
    if (getUserRoles().includes('admin')) {
        menu = ['Plans', 'Corporator', 'Permissions', 'Corporations'];
    }

    if (getUserRoles().includes('admin')) {
        menu = ['Voters', 'Corporator', 'E-Learning', 'Complaints', 'Events&Functions'];
    }
    return menu;
}