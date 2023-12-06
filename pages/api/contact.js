import { MongoClient } from "mongodb";
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {email, name, message} = req.body;
        if (!email || !email.includes('@') || !name || !name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({message: 'Invalid Input'});
        }
        const newMessage = {
            email,
            name,
            message
        };
        let client,result;
        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.ue32tcy.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
        try {
            client = await MongoClient.connect(connectionString);
        } catch (error) {
            res.status(500).json({message: 'Couldnt Connect to Database'})
        }
        const db = client.db();
        try {
            result = await db.collection('message').insertOne(newMessage);
            newMessage.id = result.insertedId;         
        } catch (error) {
            client.close();
            res.ststus(500).json({message: 'Successfully stored message.', message: newMessage});
        }
        client.close();
        console.log(newMessage);
        res.status(201).json({message: 'Successfully stored message!', newMessage: newMessage})
    }
}