# Backend for SurveyPage

This is the backend server for the Survey Page built with Node.js and Nodemailer. It handles survey submissions and sends confirmation emails to participants.


# Technologies Used

- Node JS
- Nodemailer
- Mysql

## Getting Started

Follow these steps to run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Tissyashri77/qhtasks/tree/main/qh3_surveypage/qh3_surveypage_backend.git
   cd qh3_surveypage_backend
   npm install
   ```
2. **Run this command:**
   ```bash
   npm start
   ```
3. The app should be running at http://localhost:3000.
4. Open MySQL and create a table with the query
   ```bash
   CREATE TABLE `task`.`details` (
  `firstname` VARCHAR(50) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `message` VARCHAR(45) NULL);
   ```

## Snapshots
<img width="1440" alt="Screenshot 2023-11-13 at 8 46 09 AM" src="https://github.com/Tissyashri77/qhtasks/assets/94794401/ece3eb99-83de-4e0f-888c-04d46ca077d6">

<img width="1440" alt="Screenshot 2023-11-13 at 8 46 26 AM" src="https://github.com/Tissyashri77/qhtasks/assets/94794401/628ae5e9-440b-4390-924b-aa596e77ead4">




