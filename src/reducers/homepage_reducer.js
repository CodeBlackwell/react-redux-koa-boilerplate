import { FETCH_PROFILE } from '../constants/homepage_constants'

const initialState = {
    greeting: 'Hello Everyone! Good to meet you!',
    profile: {
        name: null,
        number: null,
        hometown: null,
        favoriteFancyQuote: null,
        strongestTechnicalAttributes: null
    }
};

const actionHandlers = {
    [FETCH_PROFILE] (state, action) {
        const {
                  payload: {
                      data: profile
                  }
              }  = action;

        return Object.assign({}, state, {
            profile
        });
    }
};


// Setting up the reducer this way is an optimization for constant time lookup on action handlers
const homepageReducer = function (state = initialState, action) {
    if (actionHandlers[action.type] != null) {
        return actionHandlers[action.type] (state, action)
    }
    return state
};
export default homepageReducer
