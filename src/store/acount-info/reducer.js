// acountInfoReducer
export default function acountInfoReducer (state, action) {
  switch (action.type) {
    case "UPDATE_AVATAR":
      return {
        ...state,
      }
    case "UPDATE_USERNAME":
      return {
        ...state,
      }
    default:
      return {
        ...state,
      };
  }
}