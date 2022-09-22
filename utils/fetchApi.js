import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    // destructiure data from response
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'e4d6614e50msh1637d21ad36a938p176632jsn7692a3dfa5e4',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}