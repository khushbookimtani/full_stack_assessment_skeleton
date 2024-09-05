-- Create the 'user' table with UUID as the primary key
CREATE TABLE `user` (
  `id` CHAR(36) PRIMARY KEY,
  `username` VARCHAR(100) NOT NULL UNIQUE,
  `email` VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create the 'home' table with UUID as the primary key
CREATE TABLE `home` (
  `id` CHAR(36) PRIMARY KEY,
  `street_address` VARCHAR(255) NOT NULL,
  `state` VARCHAR(50) NOT NULL,
  `zip` VARCHAR(10) NOT NULL,
  `sqft` FLOAT DEFAULT NULL,
  `beds` INT DEFAULT NULL,
  `baths` INT DEFAULT NULL,
  `list_price` FLOAT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Create the 'user_home_mapping' table to establish a many-to-many relationship
CREATE TABLE `user_home_mapping` (
  `id` CHAR(36) PRIMARY KEY,
  `user_id` CHAR(36),
  `home_id` CHAR(36),
  FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`home_id`) REFERENCES `home`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Populate the 'user' table from 'user_home' table
INSERT INTO `user` (`id`, `username`, `email`)
SELECT UUID(), `username`, `email`
FROM (SELECT DISTINCT `username`, `email` FROM `user_home`) as distinct_users;

-- Populate the 'home' table
INSERT INTO `home` (`id`, `street_address`, `state`, `zip`, `sqft`, `beds`, `baths`, `list_price`)
SELECT UUID(), `street_address`, `state`, `zip`, `sqft`, `beds`, `baths`, `list_price`
FROM `user_home`;

-- Populate the 'user_home_mapping' table from 'user_home'
INSERT INTO user_home_mapping (id, user_id, home_id)
SELECT 
  UUID() AS id, 
  u.id AS user_id, 
  h.id AS home_id
FROM 
  user_home uh
JOIN 
  user u ON uh.username = u.username AND uh.email = u.email
JOIN 
  home h ON uh.street_address = h.street_address AND uh.state = h.state AND uh.zip = h.zip;

