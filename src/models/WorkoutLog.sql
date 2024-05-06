CREATE TABLE WorkoutLog (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    exercise_name VARCHAR(255),
    date_completed DATE,
    duration_minutes INT,
    calories_burned INT,
    log_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );



DELIMITER //

CREATE TRIGGER after_insert_UserWorkout
AFTER INSERT ON UserWorkout
FOR EACH ROW
BEGIN
  DECLARE exercise_name VARCHAR(255);

  -- Retrieve the exercise name associated with the new workout
  SELECT name INTO exercise_name FROM exercises WHERE id = NEW.exercise_id;

  -- Insert a new log entry into WorkoutLog
  INSERT INTO WorkoutLog (user_id, exercise_name, date_completed, duration_minutes, calories_burned)
  VALUES (NEW.user_id, exercise_name, NEW.date_completed, NEW.duration_minutes, NEW.calories_burned);
END //

DELIMITER ;