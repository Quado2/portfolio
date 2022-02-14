const themeManagement = (state='Navy-Dim', action) => {
    switch(action.type){
        case "CHANGE_THEME":
            return action.payload
        default:
            return state
    }
}

export default themeManagement