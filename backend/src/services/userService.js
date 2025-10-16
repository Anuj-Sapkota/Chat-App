import userModel from "../models/User.js"
//search  user
const searchUsers = async (data) => {

    let input = String(data).trim();

    const searchedUsers = await userModel.find({
        $text: { $search: input }
    }).limit(20);

    if (searchedUsers.length > 0) {
        return searchedUsers;
    }
    //using regex
    const tokens = input.split(/\s+/).filter(Boolean);
    const searchEachToken = tokens.map(token => {
        const regex = new RegExp(`^${token}`, "i");
        return {
            $or: [
                { firstName: regex },
                { middleName: regex },
                { lastName: regex },
                { username: regex },
            ]
        }
    })

    const regexSearchedUsers = await userModel.find({$and: searchEachToken}).limit(20);
    return regexSearchedUsers;
}

export default { searchUsers };