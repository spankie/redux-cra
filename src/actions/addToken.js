export const addToken = (payload) => dispatch => {
 dispatch({
  type: 'ADD_TOKEN',
  payload
 })
}