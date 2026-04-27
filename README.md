# Selenium Testing + Flask Login App (Dockerized)This project demonstrates automated UI testing using Selenium for a Flask-based login application running inside a Docker container.---# 📁 Project Setup## 1. Clone Repository```bashgit clone <your-repo-url>cd <project-folder>

2. Install Node Dependencies (for Selenium tests)
npm init -ynpm install selenium-webdriver

3. Install Python Dependencies (Flask app)
pip install flask

🐳 Docker Commands
4. Build Docker Image
docker build -t login-app .

5. Run Flask App in Container
docker run -p 5000:5000 login-app

🌐 Run Application
Open browser:
http://localhost:5000

🧪 Selenium Test Execution (Node.js)
6. Run Test Script
node test.js

📌 Test Cases Covered


Page Load Verification


Empty Input Validation


Invalid Login Validation


Valid Login & Redirect Test



🔧 Git Commands
7. Initialize Git
git init

8. Add files
git add .

9. Commit changes
git commit -m "Initial commit - Selenium Flask Login App"

10. Push to GitHub
git branch -M maingit remote add origin <repo-url>git push -u origin main

🚫 Important (.gitignore)
Make sure to ignore:
node_modules/__pycache__/.env

✅ Output Expectation


Flask app runs on Docker ✔


Selenium executes UI tests ✔


All test cases pass ✔


Logs show PASS/FAIL results ✔



🎯 Tech Stack


Flask (Backend)


HTML (Frontend)


Selenium WebDriver (Testing)


Node.js (Test Runner)


Docker (Containerization)


---If you want, I can also make:✔ Viva questions + answers (very important for this experiment)  ✔ OR a **1-page handwritten exam cheat sheet version**  ✔ OR GitHub-ready folder ZIP structure