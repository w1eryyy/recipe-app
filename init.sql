CREATE TABLE IF NOT EXISTS recipes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255) DEFAULT 'UNKNOWN',
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS comments(
  id SERIAL PRIMARY KEY,
  recipe_id INTEGER NOT NULL,
  author VARCHAR(255) DEFAULT 'UNKNOWN',
  content VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE
);

INSERT INTO recipes (title, author, content) VALUES 
    ('Паста Карбонара', 'Алексей', 'Классический итальянский рецепт пасты с беконом и яйцом'),
    ('Борщ', 'Мария', 'Традиционный украинский суп со свеклой'),
    ('Панкейки', 'John', 'Воздушные американские блинчики');

-- Добавляем комментарии
INSERT INTO comments (recipe_id, author, content) VALUES 
    (1, 'Анна', 'Отличный рецепт! Добавьте больше пармезана'),
    (1, 'Петр', 'Вкусно, но слишком жирно'),
    (2, 'Елена', 'Самый вкусный борщ, который я пробовала!');