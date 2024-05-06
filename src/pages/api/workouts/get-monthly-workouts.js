import { runQuery } from "@/middlewares/db";

const  handler = async(req, res) => {

try {
    let year = req.body.year;
    let month = req.body.month;
  
  
const response = await runQuery(`SELECT *
FROM UserWorkout
WHERE YEAR(date_completed) = ${year}
  AND MONTH(date_completed) = ${month};`, []);

var error = "";
if (response.length == 0) {
    error = "error"    
}
else {
    error = "success"
}

return res.status(200).json({type: error, response: response})

}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({data: error})

}

}


export default handler;