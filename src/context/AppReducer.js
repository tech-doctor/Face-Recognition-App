export  default (state, action) => {
    switch (action.type) { 
        case 'TOGGLE_THEME':
            return {
                ...state,
                lightMode: !state.lightMode
            }
       default : 
         return state;
    }
}