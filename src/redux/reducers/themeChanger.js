const themeManagement = (state=0, action) => {
    switch(action.type){
        case "CHANGE_THEME":
            return action.payload
        case "CHANGE_WHITE":
            return "theme_white"
        default:
            return state
    }
}

export default themeManagement