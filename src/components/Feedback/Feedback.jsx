import css from './Feedback.module.css';


export default function Feedback({values, totalFeedback, positiveFeedback}) {
    
        return (
    <div>
        <p className={css.value}>Good: {values.good} </p>
        <p className={css.value}>Neutral: {values.neutral} </p>
        <p className={css.value}>Bad: {values.bad} </p>
        <p className={css.value}>Total: {totalFeedback}</p>
        <p className={css.value}>Positive: { positiveFeedback}</p>
    </div>

)
};
