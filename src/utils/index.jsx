export const logOut= () => {
    localStorage.clear()
    location.href = './login'
}