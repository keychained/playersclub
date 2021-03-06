// import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from '../actions/sport_actions';
import { combineReducers } from "redux";
import nhl from './nhl_reducer';
import nba from './nba_reducer';
import mlb from './mlb_reducer';


// export default function SportsReducer (oldState = {}, action) {
//   Object.freeze(oldState) 
  
//   switch (action.type) {
    
//     case RECEIVE_ONE:
//       return Object.assign({}, oldState, { [action.sport.id]: action.sport });
    
//     case RECEIVE_ALL: 
//       return action.sports;
    
//     case CLEAR_ALL: 
//       return {};

//     default:
//       return oldState;
//   }
// }

const SportsReducer = combineReducers({
  mlb,
  nba,
  nhl,
});

export default SportsReducer;
