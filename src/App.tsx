import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './App.css';
import InitialInfo from './forms/InitialInfo';
import PasswordScreen from './forms/PasswordScreen';
import ReviewScreen from './forms/ReviewScreen';

function App() {
  const [radioValue,setRadioValue] = useState<number>(1);
  const [initialFormEnable, setInitialEnableForm] = useState<Boolean>(true);
  const [passwordFormEnable, setPasswordEnableForm] = useState<Boolean>(false);
  const [reviewFormEnable, setreviewEnableForm] = useState<Boolean>(false);
  const [sendTOReview,setReviewData] = useState<Object>({});

  // Enabling Password form
  // useEffect(()=>{
  //   setReviewData(pull_data);
  // },[])

  const pull_data = (initialInfo: object) => {
    setReviewData(initialInfo);

    if (initialInfo) {
      setRadioValue(2);
      setPasswordEnableForm(true);
      setInitialEnableForm(false);
    }

  }
  // Enabling Review form
  const pull_data1 = (passwordForm: object) => {
    if (passwordForm) {
      setRadioValue(3)
      setPasswordEnableForm(false);
      setreviewEnableForm(true);
    }

  }

  const get_resp = (finalResp: boolean) => {
    if (finalResp == true) {
      setRadioValue(1)
      setInitialEnableForm(true);
      setPasswordEnableForm(false);
      setreviewEnableForm(false);
      alert("data submited")
    }

  }


  return (
    <div className='App'>
      <div className='card border-0 h-100 bg-transparent container main-container'>
        <div className="card bg-transparent border-0 text-center">
          <h2 >Super test form</h2>

          {initialFormEnable && <p>Initial Info</p>}
          {passwordFormEnable && <p>Password Screen</p>}
          {reviewFormEnable && <p>Review Screen</p>}

        </div>

        <div className='row flex-start d-flex'>

          <div className='col-12 col-sm-6 col-md-4 bg-transparent alignLeft'>
            <div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={radioValue} id='defaultCheck1' checked={initialFormEnable == true}  />
                <label className='form-check-label'>
                  Initial info
                </label>
              </div>
            </div>
            <div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={radioValue} id='defaultCheck1' checked={passwordFormEnable == true}/>
                <label className='form-check-label'>
                  Password screen
                </label>
              </div>
            </div>
            <div>
              <div className='form-check form-check-inline'>
                <input className='form-check-input' type='checkbox' value={radioValue} id='defaultCheck1' checked={reviewFormEnable == true}/>
                <label className='form-check-label'>
                  Review
                </label>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-6 col-md-8 h-100 bg-transparent pt-4'>
            {initialFormEnable && <div className=''>
              {/* Initial Screen  */}
              <InitialInfo func={pull_data} />
            </div>}

            {passwordFormEnable && <div>
              {/* Password Screen  */}
              <PasswordScreen func={pull_data1} />
            </div>
            }
            {reviewFormEnable && <div>
              {/* Review Screen  */}
              <ReviewScreen resp={get_resp} data={sendTOReview}/>
            </div>
            }
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
