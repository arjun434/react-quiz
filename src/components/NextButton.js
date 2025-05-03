export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;
  const handleClick = (action) => {
    console.log(`inside handleClick ${action}`);
    dispatch({ type: action });
  };

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => handleClick("nextQuestion")}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={() => handleClick("finished")}>
        Finish
      </button>
    );
}
