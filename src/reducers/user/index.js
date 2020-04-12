import { REGISTER_SUCCESS } from 'src/actions/user/type'

export default (state, {type, payload}) => {
    switch (type) {
        case REGISTER_SUCCESS:
            return state
        
        default:
            return state;
    }
}