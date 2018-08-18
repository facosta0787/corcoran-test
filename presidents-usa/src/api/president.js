import axios from 'axios'
const BASE_URL = 'https://presidentsapi.azurewebsites.net/api/presidents'

class president {

  fetchall = async (sort = '') => {
    const urlRequest = sort === '' ? BASE_URL : `${BASE_URL}/${sort}`
    try {
      const response = await axios.get(urlRequest,{
        headers: {
          'Content-Type':'application/json; charset=utf8'
        },
        responseType: 'json',
        responseEncodign: 'utf8',
      })
      return response
    } catch (err) {
      console.log(err)
    }
  }

}

export default president
