import api from "./api";

const getAllUsers = async(name) => {
    
    const data = await api.get(`/api/user/${name}`);
    return data
}

export {getAllUsers}