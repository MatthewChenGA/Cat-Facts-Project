import axios from 'axios';

export const getCatFacts = async () => {
  const response = await axios.get("https://flynn-cors.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
  return response.data.text
}

// export const getOtherFacts = async () => {
//   const response = await axios.get("https://flynn-cors.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=horse,snail,dog&amount=1")
//   return response.data.text
// }