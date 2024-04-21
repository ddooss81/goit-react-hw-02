import { useState } from 'react';
import {useEffect} from 'react';
import './App.css'
import Description from '../Description/Description.jsx';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import clsx from 'clsx';

export default function App() {
 const initialFeedback = JSON.parse(localStorage.getItem('feedback')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [values, setValues] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(values));
  }, [values]);

const totalFeedback = values.good + values.neutral + values.bad;
const positiveFeedback = Math.round(((values.good +values.neutral)/ totalFeedback) * 100)+'%';

const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    });
};
  
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
       {totalFeedback > 0 ? <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification />}       

    </>
  );
};


