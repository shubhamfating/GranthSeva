
const user = sessionStorage.getItem('udata') ? JSON.parse(atob(sessionStorage.getItem('udata'))) : {};
 
export const getUserRoles = () => {
     console.log(user)
    return user?.data?.roles;
}
export const getUserToken = () => {
    return user?.data?.token;
}

export const getUserName = () => {
    return user?.data?.name;
}

export const getUserPermissions = () => {
    return user?.data?.permissions;
} 