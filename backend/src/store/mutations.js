export function setUser(state, data){
    state.user.data = data
}

export function setToken(state, token){
    state.user.token = token
    if(token){
        sessionStorage.setItem('TOKEN', token)
    }else{
        sessionStorage.removeItem('TOKEN')
    }

}