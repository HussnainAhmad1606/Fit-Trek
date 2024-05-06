import { runQuery } from "@/middlewares/db";
const  handler = async(req, res) => {

try {
 
const userId = req.body.userId;
   
const response = await runQuery(`SELECT
uw.id AS workout_id,
uw.user_id,
uw.exercise_id,
uw.date_completed,
uw.duration_minutes,
uw.calories_burned,
uw.notes,
e.name AS exercise_name,
e.description AS exercise_description,
e.category AS exercise_category,
e.kcal AS exercise_kcal,
e.duration AS exercise_duration,
e.difficulty AS exercise_difficulty,
e.created_at AS exercise_created_at
FROM
UserWorkout uw
JOIN
exercises e ON uw.exercise_id = e.id
WHERE
uw.user_id = ${userId};`, []);

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