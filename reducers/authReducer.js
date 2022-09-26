
const initialState = {
  email: '',
  loading: false,
  emailError: '',
  passwordError: ''
}

export default authReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        email: action.payload,
      }
    case 'REGISTER_STARTED':
    case 'LOGIN_STARTED':
      return {
        ...state,
        loading: true
      }
    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
      return {
        ...state,
        loading: false,
        emailError: !action.payload.includes('password') ? action.payload : null,
        passwordError: action.payload.includes('password') ? action.payload : null
      }
    default:
      return state
  }
}

