import { useState } from "react";
import api from "..";

const Handler = () => {
  
    const mailList = useState([]);

    const getEmails = async () => {
        try {
            const usersResponse = await api.get('/users');
            const users = usersResponse.data;
            users.forEach(user=>mailList.push(user.email))
            console.log(mailList);
        } catch (error) {
            console.log(error);
        }
    }
  getEmails();
    return (
        <h1>What's Up World!</h1>
    );
}

export default Handler;