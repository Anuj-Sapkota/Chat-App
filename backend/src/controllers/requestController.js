import requestService from "../services/requestService.js"

const sendRequest = async (req, res) => {
    try {
        
        const senderId = req.user.data._id;
        const receverId = req.params.id;
        const data = await requestService.sendrequest(senderId, receverId);
        res.status(201).json(data);

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const recieveRequest = async (req, res) => {
    try {
        const recieverId = req.user._id;
        const data = await requestService.recieveRequest(recieverId);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message)

    }
}

export default { sendRequest , recieveRequest}