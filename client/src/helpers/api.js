import axios from "axios";

const backend = 'https://vocab-server-j1o5.onrender.com/vocabs/'

export const ViewAllVocabs = async () => {
    try{
        let response = await axios.get(backend)
        return response.data
    } catch (err) {
        console.error(err)
    }
}

export const DeleteVocab = async (id) => {
    try {
        let response = await axios.delete(backend + id)
        return response.data
    } catch (err){
        console.error(err)
    }
}

export const DeleteAllVocabs = async () => {
    try {
        let response = await axios.delete(backend)
        return response.data
    } catch(err){
        console.error(err)
    }
}

export const ViewVocab = async (id) => {
    try{
        let response = await axios.get(backend + id)
        return response.data
    } catch(err){
        console.error(err)
    }
}

export const AddVocab = async (word) => {
    try{
        let response = await axios.post(backend, word)
        return response.data
    } catch (err){
        console.error(err)
    }
}

export const EditVocab = async (id, word) => {
    try{
        let response = await axios.put(backend + id, word)
        return response.data
    } catch (err){
        console.error(err)
    }
}

export const searchVocab = async (word) => {
    try{
        const response = await axios.get(backend, {
            params: {query: word},
        });
        console.log(response.data);
    }catch(err) {
        console.error(err)
    }
}
