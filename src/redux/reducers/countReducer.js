const initailState = {
    count: 0,
};

export default (state = initailState, action)=> {
    switch (action.type){
        case 'COUNT_INCREASE':
        return{
            ...state,
            count: state.count + 1,
        };
        case 'COUNT_DECREASE':
            return{
                ...state,
                count: state.count -1,
            };
            default:
                return state;
    }
};