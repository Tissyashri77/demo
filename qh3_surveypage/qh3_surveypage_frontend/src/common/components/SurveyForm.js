// SurveyForm.jsx
import React, { useCallback, useState, useEffect } from "react";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { FlatLight } from "survey-core/themes/flat-light";
import axios from "axios";

const surveyJson = {
  pages: [
    {
      name: "PersonalDetails",
      elements: [
        {
          type: "text",
          name: "firstName",
          title: "Enter your first name:",
        },
        {
          type: "text",
          name: "lastName",
          title: "Enter your last name:",
        },
        {
          type: "text",
          name: "email",
          title: "Enter your email:",
        },
        {
          type: "text",
          name: "message",
          title: "Enter your message:",
        },
      ],
    },
  ],
};

function SurveyForm() {
  const [formdata, setFormdata] = useState();
  const survey = new Model(surveyJson);
  survey.applyTheme(FlatLight);

  const alertResults = useCallback((sender, options) => {
    // const results = JSON.stringify(sender.data);

    // console.log(results);

    axios.post('http://localhost:3000/send', sender.data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  survey.onComplete.add(alertResults);


  return (
    <div>
        <Survey model={survey}/>
    </div>
  );
}

export default SurveyForm;
