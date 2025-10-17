import requestModel from "../models/Request.js"
//sending a request
const sendrequest = async (senderId, reciverId) => {
    const requestExists = await requestModel.find({
        sender: senderId,
        reciever: reciverId,
    });

    if(requestExists) {
        throw new Error("Request already sent.")
    }

    const sentRequest = await requestModel.create({
        sender: senderId,
        reciever: reciverId,
        status: "Pending"
    })
    return sentRequest;
}

//recieving all the requests that are sent to the person
// !!!!!!!!!!!!!!!!!!!!!!--------LIMIT AND PAGINATION FEATURE REMAINING------------------//
const recieveRequest = async (recieverId) => {
    const recievedRequests = await requestModel.find({ reciever: recieverId });
    console.log("recieved REq", recievedRequest);

    if(recievedRequests.length == 0){
        return "No Requests Recieved"
    }
    
    return recievedRequests
}
export default { sendrequest, recieveRequest };