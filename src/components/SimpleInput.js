import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetName();
    resetEmail();
  }

  const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';


  return <form onSubmit={formSubmissionHandler}>
    <div className={nameInputClasses}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        value={enteredName}
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
      />
      {nameHasError && <p className="error-text">Name must not be empty.</p>}
    </div>
    <div className={emailInputClasses}>
      <label htmlFor="email">Your Email</label>
      <input
        type="email"
        id="email"
        value={enteredEmail}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      {emailHasError && <p className="error-text">Please enter valid email.</p>}
    </div>
    <div className="form-actions">
      <button disabled={!formIsValid}>Submit</button>
    </div>
  </form>
}


export default SimpleInput