import userModel from "../models/User.js"
//search  user
const searchUsers = async (data) => {
    const searchedUsers = await userModel.find({
        $or: [{ username: { $regex: data, $options: 'i' } },
        { firstName: { $regex: data, $options: 'i' } },
        { middleName: { $regex: data, $options: 'i' } },
        { lastName: { $regex: data, $options: 'i' } }
        ]
    });

    //fullname search???
    if (searchedUsers.length === 0) {
        throw new Error("User doesn't exist");
    }
    return searchedUsers;
}

export default { searchUsers };