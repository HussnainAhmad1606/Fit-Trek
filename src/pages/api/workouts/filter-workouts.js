import { runQuery } from "@/middlewares/db";
const  handler = async(req, res) => {

try {
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let userId = req.body.userId;
  

   
const response = await runQuery(`SELECT uw.id, uw.user_id, e.name AS exercise_name, e.category as category, uw.date_completed, uw.duration_minutes, uw.calories_burned
FROM UserWorkout uw
JOIN exercises e ON uw.exercise_id = e.id
WHERE uw.user_id = ${userId}
  AND uw.date_completed BETWEEN '${startDate}' AND '${endDate}';`, []);

var type = "";
if (response.length==0) {
    type = "error"
}
else {
    type= "success"
    
    return res.status(200).json({type:type, response: response})
    
}


return res.status(200).json({type:type, response: response})

        


}

catch (error) {
    
    console.log(error);
    
    return res.status(200).json({response: error, type: "error"})

}

}


export default handler;