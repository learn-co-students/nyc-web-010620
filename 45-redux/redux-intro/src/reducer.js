
const initialState = {
    likes: 0,
    text: '',
    thangs: [],
    darkMode: false
}

export const reducer = (prevState=initialState, action) => {
    // console.log('1: ', prevState, ' 2: ', action)
    switch(action.type){
        case 'LIKE':
            return { ...prevState, likes: prevState.likes + 1 }
        case 'DISLIKE':
            return { ...prevState, likes: prevState.likes - 1 }
        case 'TOGGLE_DARK':
            return { ...prevState, darkMode: !prevState.darkMode }
        case 'CHANGE_TEXT':
            return { ...prevState, text: action.payload }
        case 'ADD_TEXT':
            return { 
                ...prevState,
                text: '',
                thangs: [prevState.text, ...prevState.thangs]
            }
        default:
            return prevState
    }
}