import axios from 'axios'

const API_URL_SIGNIN = 'http://localhost:8080/api/auth/signin'
const API_URL_SIGNUP = 'http://localhost:8080/api/auth/signup'

class AuthService {
  login (user) {
    return axios
      .post(API_URL_SIGNIN, {
        // username: user.username,
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (user) {
    return axios.post(API_URL_SIGNUP, {
      //  username: user.username,
      email: user.email,
      password: user.password
    }).then(response => {
      if (response.data) {
        console.log(response.data)
      }

      return response.data
    })
  }
}

export default new AuthService()
