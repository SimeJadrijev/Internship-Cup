# Vitasano Health Application

Final project for the DUMP Internship Cup

## Description

Vitasano is a web application that aims to promote health awareness by providing users with access to preventive health ```examinations```, ```educational quizzes```, and ```rewards``` for accumulating ```points```. The project was built using **React** and **Nest** frameworks in combination with **TypeScript**. The project also involved collaboration with designers, marketing and multimedia specialists.


## Installation

1. Clone the repository
```bash
git clone https://github.com/SimeJadrijev/Internship-Cup.git
 ```
2. Create the .env file in root
```bash
DATABASE_URL=postgresql://YourUsername:YourPassword@localhost:5432/vitasano
JWT_SECRET = addYourRandomString
```
3. Run the migrations 
```bash
npx prisma migrate dev --schema=./apps/backend/prisma/schema.prisma
```
```bash
npx prisma db seed
```
4. Install dependencies
```bash
npm install
```
5. Run the project
```bash
npm run dev
```

## NOTE 

Due to time constraints, the project was implemented only for the mobile version. Therefore, the application will be displayed only for screen widths between 350px and 550px
