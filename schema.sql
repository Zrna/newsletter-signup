CREATE DATABASE newsletter_subscribers;

CREATE TABLE if not exists users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    terms_accepted INT(1) NOT NULL DEFAULT '0'
)