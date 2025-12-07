\# CSC3020 Term Project - Soccer Team Stat Tracker



\## Project Overview



This project is a web-based application designed to solve the problem of manually tracking and calculating soccer player statistics. It will allow a user (like a coach or team manager) to input player data, log stats from games (goals, assists, minutes played), and view an organized dashboard of individual and team performance metrics.



Created by: Gabriel Saldanha Course: CSC3020 - Modern Technologies





\## Setup Instructions - How to Run Locally



Ensure Docker is installed and running on your system.

Build the Image: Navigate to the root directory of this project in your terminal and execute the build command. This creates the soccer-stats image using your Dockerfile. -> docker build -t soccer-stats .



Run the Container: Run the application, mapping the container's internal port 80 (Nginx) to your machine's external port 8081 to avoid port conflicts. The container will run in the background (-d). -> docker run -d -p 8081:80 --name my-soccer-app soccer-stats



Access the Application: Open your web browser and navigate to the local address. -> http://localhost:8081



Milestone 1: Early thoughts and expectations. See Confluence for details. https://my-team-sqsjegqu.atlassian.net/wiki/x/CoAB



Milestone 2: Added Docker setup. See Confluence for details. https://my-team-sqsjegqu.atlassian.net/wiki/x/AYCK



Milestone 3: Explored AI-assisted tools for project documentation and design (See Confluence for details). https://my-team-sqsjegqu.atlassian.net/wiki/x/AYAIAQ



Milestone 4: Wrapped up the whole project in a functional Team Stat Tracker.



Final Submission:



Local Address: http://localhost:8081

Confluence Page: https://my-team-sqsjegqu.atlassian.net/wiki/x/AQCxAQ

GitHub Repository: https://github.com/gabrielsaldanhacode/CSC3020-TermProject

Live Web-Version: https://gabrielsaldanhacode.github.io/CSC3020-TermProject/

Tutorial Video: https://youtu.be/-aH8PR8bGeo

