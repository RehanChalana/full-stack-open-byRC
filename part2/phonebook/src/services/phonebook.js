import axios from "axios";

const url = 'http://localhost:3001/persons'

const findAll = () => {
    return axios.get(url).then((response) => response.data)
}

const create = (newObject) => {
    return axios.post(url, newObject).then((response) => response.data)
}

const deleteDb = (id) => {
    return axios.delete(`${url}/${id}`).then((response) => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${url}/${id}`, newObject).then((response) => response.data)
}

export default {findAll, create, deleteDb, update}