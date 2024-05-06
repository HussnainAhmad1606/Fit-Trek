CREATE TABLE UserWorkout (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  exercise_id INT,
  date_completed DATE NOT NULL,
  duration_minutes INT,
  calories_burned INT,
  notes TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (exercise_id) REFERENCES exercises(id)
)