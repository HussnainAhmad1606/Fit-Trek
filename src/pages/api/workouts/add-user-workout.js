import { runQuery } from "@/middlewares/db";

const  handler = async(req, res) => {

try {
    let userId = req.body.userId;
    let exerciseId = req.body.exerciseId;
    let duration = req.body.duration;
    let calories = req.body.calories;
    let notes = req.body.notes;
   
    console.log(userId, exerciseId, duration, calories, notes)

    console.log(`INSERT INTO userworkout (user_id, exercise_id, duration_minutes, calories_burned, notes) values (${userId}, ${exerciseId}, ${duration}, ${calories}, '${notes}')`)
   
const response = await runQuery(`INSERT INTO userworkout (user_id, exercise_id, duration_minutes, calories_burned, notes) values (${userId}, ${exerciseId}, ${duration}, ${calories}, '${notes}')`, []);

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