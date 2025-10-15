import userService from "../services/userService.js"

const searchUser = async (req, res) => {
    try {
        const name = String(req.params.name);
        const data = await userService.searchUsers(name);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export default { searchUser };    