const initialState = []

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return [
                ...state,
                {
                    ...action.payload
                }
            ]
        case 'DELETE_CITY':
            const index = state.findIndex(city => city.id === action.id);
            return [...state.slice(0, index),
            ...state.slice(index + 1)]

        default:
            return state
    }
}

export default todos