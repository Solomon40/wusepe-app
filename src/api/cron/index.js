import { useState } from "react";
import api from "..";



const mailList = useState([]);

const getEmails = async () => {
    try {
        const usersResponse = await api.get('/users');
        const users = usersResponse.data;
        users.forEach(user => mailList.push(user.email))
    } catch (error) {
        console.log(error);
    }
}
getEmails();

//TODO 
//finish Send and Schedule functionality

const nodemailer = require('nodemailer');

//email message options
const mailOptions = {
    from: "contact.wusepe@gmail.com",
    to: mailList,
    message: "Email from Wusepe: A Test Message!",
    text: "James Bond is a spy and earns 68934576232. Become a spy today"
};

//email transport configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "contact.wusepe@gmail.com",
        pass: "marcsparo"
    }
});

//send email
const handleSendEmail = () => {
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log("Email Send Error: " + error);
        }else{
            console.log("Email Send Successful: " + info)
        }
    });
};