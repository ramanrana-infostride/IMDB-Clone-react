import axios from "axios";


export const categoryMovies = async(API_URl) =>{
    try{
      let response = await axios.get(API_URl);
      return response.data;
    }
    catch(error){
            console.log(`Error while Fetching the data ${error.message}` )
            return error.response.data;
    }
}