CREATE TABLE exercises (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  equipment VARCHAR(100),
  category VARCHAR(20),
  instructions TEXT,
  kcal INT, 
  duration INT, 
  difficulty ENUM('beginner', 'intermediate', 'advanced'), 
  attachment VARCHAR(200), 
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  
  updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO exercises (id, name, description, equipment, category, instructions, kcal, duration, difficulty, attachment) 
VALUES 
(1, 'Squats', 'Stand with your feet shoulder-width apart and squat down', 'bodyweight', 'legs', 'Stand with your feet shoulder-width apart and squat down', 100, 25, 'beginner', 'https://example.com/squats.jpg'),
(2, 'Bicep Curls', 'Hold a dumbbell in each hand and curl your arms up', 'dumbbells', 'arms', 'Hold a dumbbell in each hand and curl your arms up', 80, 20, 'beginner', 'https://example.com/bicepcurls.jpg'),
(3, 'Tricep Dips', 'Sit on the edge of a bench and lower your body by bending your elbows', 'bench', 'arms', 'Sit on the edge of a bench and lower your body by bending your elbows', 90, 20, 'beginner', 'https://example.com/tricepdips.jpg'),
(4, 'Lunges', 'Stand with your feet together and take a big step forward with one foot', 'bodyweight', 'legs', 'Stand with your feet together and take a big step forward with one foot', 110, 25, 'intermediate', 'https://example.com/lunges.jpg'),
(5, 'Push-ups', 'Start in a plank position and lower your body until your chest almost touches the ground', 'bodyweight', 'chest', 'Start in a plank position and lower your body until your chest almost touches the ground', 90, 20, 'beginner', 'https://example.com/pushups.jpg'),
(6, 'Deadlifts', 'Hold a barbell with your feet shoulder-width apart and lift it up', 'barbell', 'legs', 'Hold a barbell with your feet shoulder-width apart and lift it up', 140, 30, 'intermediate', 'https://example.com/deadlifts.jpg'),
(7, 'Calf Raises', 'Stand on a step and raise up onto your toes', 'bodyweight', 'legs', 'Stand on a step and raise up onto your toes', 70, 20, 'beginner', 'https://example.com/calfraises.jpg'),
(8, 'Shoulder Press', 'Hold a dumbbell in each hand and press them straight up over your head', 'dumbbells', 'shoulders', 'Hold a dumbbell in each hand and press them straight up over your head', 120, 25, 'intermediate', 'https://example.com/shoulderpress.jpg');