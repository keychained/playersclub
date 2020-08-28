import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";


const nhlReducer = (oldState = [], action) => {
  // Object.freeze(oldState); // dont need this if we are using array default state
  let newState = oldState.slice(); //preserves oldState by making a copy we manipulate
  switch (action.type) { 
    case RECEIVE_ONE:
      if (action.sport.headers["x-final-url"].split("/")[3] === "nhl") { 
        newState.push({
          home: action.sport.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE 
          away: action.sport.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
          scores: [action.sport.home.points, action.sport.away.points] }) // ARRAY OF POINTS, separate from home and away to normalize the object keys across all sports JSON

        return newState;
      } else {
        return oldState;
      }
    case RECEIVE_ALL:
      if (action.sports.headers["x-final-url"].split("/")[3] === "nhl") {        //FINAL STATE LOOKS LIKE [ {home,away, [scores]}, {home, away, [scores]}, {home, away, [scores]} ]

        action.sports.games.forEach(game => (
          newState.push({
            home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
            away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
            scores: [game.home.points, game.away.points], // ARRAY OF POINTS
        })))

        return newState; 
      } else {
        return oldState;
      }
    case CLEAR_ALL:
      return [];

    default:
      return oldState;
  }
};

export default nhlReducer;