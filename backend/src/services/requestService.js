import requestModel from "../models/Request"
//sending a request
const sendrequest = async (senderId, reciverId) => {
    const sentRequest = await requestModel.create({
        from: senderId,
        to: reciverId,
    })
    return sentRequest;
}

//recieving all the requests that are sent to the person
// !!!!!!!!!!!!!!!!!!!!!!--------LIMIT AND PAGINATION FEATURE REMAINING------------------//
const recieveRequest = async (reciverId) => {
    const recievedRequests = await requestModel.find();
    return recievedRequests
}
export default {sendrequest, recieveRequest};