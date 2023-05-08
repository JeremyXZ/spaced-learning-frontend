# Spaced Learning App

The app aims to help students revise what they have learned in spaced repetition, namely in next day, 7th, 16th and 35th day after their initial learning session. In this way, students can effectively retain information for longer periods and improve their learning efficiently. Tech stack for this app: react, postgrdsql database, firebase authentication, css styled components, restful API, node.cron and react-toastify.

# 6 Major features:

## Latest update: starting from 1st May, we had to pay for the usage of the modle "text"-davinci-003G" - a GPT3 variant, which was used to carry out task 2, 3, 4 as shown below. So the AI functions in this app won't work as I don't pay for the AI services. So just to show how those tasks can be done, I took some screenshots of the sampled tasks stored in my database and list them here, immediately after these features.

1. Automatically schedule 4 time slots (next day, 7th, 16th, 35th day after the current date ) for the material in the Content box to recur after a user fills out all the info and click "Save data". The material can be key concepts, notes and exercises etc.
2. Automatically generate questions: When a user write or copy and paste some texts into the Content box and select "Create Questions" from the AI option menu.
3. Automatically generate a piece of essay/article: when a user gives instructions in the Content box and select "Write an Essay" from the AI option menu.
4. Automatically generate a summary: when a user write or copy and paste some texts into the Content box and select "Write a Summary" from the AI option menu.
5. Set a time for a specific revision task by using the timer at the top. When the time is up, a reminder will pop up.
6. Display tasks whose scheduled day matches the current date when a user clicks "Show Revision". The total number of tasks to be revised on the current date is shown at the top right of the page. In Revision Zone, initially only questions will appear and an answer to a question will appear only when the corresponding question is clicked.

# Sreeenshots of AI tasks done by this App:

![Generating Questions from texts provided](https://github.com/JeremyXZ/spaced-learning-frontend/blob/493fc72bac67d06d1fab088e9bb32e75333b187d/src/images/AI_generate_questions.png)
![Summarising a text given](https://github.com/JeremyXZ/spaced-learning-frontend/blob/493fc72bac67d06d1fab088e9bb32e75333b187d/src/images/AI_summary_task.png)
![Writing an essay based on instructions given](https://github.com/JeremyXZ/spaced-learning-frontend/blob/493fc72bac67d06d1fab088e9bb32e75333b187d/src/images/AI_essay_writing.png)

# Initial planning:

## Basic steps to implement the schedule:

1. On the frontend, two panels are displayed: Learn and Revise.

2. In “Learn” area, users are asked to fill in these field: subject, task/topic, word-count, resources/notes, difficulty level. In the task field, students can paste a chunk of texts they want to memorise and Open Ai will generate a list of questions and placed in front of the text. When the scheduled day arrives, the questions will be displayed in the "Revise" area and students can write down their answers beneath those questions. When they click "Get Answer", the chunk of text will appear

3. After completing all the fields, they click ”Save Task” button and all the info input by the users will be saved to the database through Axios.

4. In addition to saving/updating data to the database, the next revision date will be scheduled by node.cron and added to the same database through Axio as well.

5. On the backend, set up a database table “tasks” with 8 columns: id, subject, date, task, word-count, difficulty, resources and rev_day

6. Set up connection to elephantsql database using "pg" (pool)

7. Set up helper functions that query the database

8. Set up router and sub-routers to responds to Axios api calls from the frontend

![Wireframe for App UI](https://github.com/JeremyXZ/spaced-learning-frontend/blob/main/src/images/learning-app%20wireframe.png)

## Components:

App

- Header
- Learning
- Revision
