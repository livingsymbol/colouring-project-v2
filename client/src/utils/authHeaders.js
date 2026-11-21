// Adds the signed-in admin's login token to requests that change the website,
// so the server can check that only an admin saves pages or uploads files.
export const authHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
});
