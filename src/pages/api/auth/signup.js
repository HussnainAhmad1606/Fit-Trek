import { runQuery } from "@/middlewares/db";

const  handler = async(req, res) => {

try {
    let username = req.body.username;
    let email = req.body.email;
    let avatar = req.body.avatar;
    let password = req.body.password;
    console.log(username, email, password, avatar)

    console.log(`INSERT INTO users values ('${username}', '${email}', '${password}', '${avatar}')`)
   
const response = await runQuery(`INSERT INTO users (username, email, password, avatar) values ('${username}', '${email}', '${password}', '${avatar}')`, []);

const data = JSON.stringify(response);

return res.status(200).json({data: data})

}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({data: error})

}

}


export default handler;