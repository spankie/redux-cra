export default (state = {}, action) => {
  switch (action.type) {
   case 'ADD_TOKEN':
    return {
     token: action.payload
    }
   default:
    return state
  }
 }