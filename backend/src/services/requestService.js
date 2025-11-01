import requestModel from "../models/Request.js"
//sending a request
const sendrequest = async (senderId, recieverId) => {
    const requestExists = await requestModel.find({
        sender: senderId,
        reciever: recieverId,
    });
console.log("requsts exists", requestExists)
    if(requestExists.length!==0) {
        throw new Error("Request already sent.")
    }

    const sentRequest = await requestModel.create({
        sender: senderId,
        reciever: recieverId,
        status: "Pending"
    })
    return sentRequest;
}

//recieving all the requests that are sent to the person
// !!!!!!!!!!!!!!!!!!!!!!--------LIMIT AND PAGINATION FEATURE REMAINING------------------//
const recieveRequest = async (recieverId) => {
    const recievedRequests = await requestModel.find({ reciever: recieverId}).populate('sender', "firstName middleName lastName profilePicture.url").lean();
    console.log("recieverId: ", recieverId)
    console.log("recieved req", recievedRequests);

    if(recievedRequests.length == 0){
        return "No Requests Recieved"
    }
    
    return recievedRequests
}
export default { sendrequest, recieveRequest };