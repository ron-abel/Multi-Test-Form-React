import React, { useEffect, useState } from 'react'; 
import '../App.css'; 
 
export default function PasswordScreen(props: any) {
    interface passwordFields {
        password: string, 
        repeatPassword: string,
    }; 
    const [pass, setPass] = useState<passwordFields>({ password: "", repeatPassword: "" });
    const [enablePassword, setEnablePassword] = useState<boolean>(false);
    useEffect(() => {
        if (pass.password != '' && pass.repeatPassword != '') {

            if (pass.password === pass.repeatPassword) {
                setEnablePassword(true);
            }
            else {
                setEnablePassword(false);
            }

        }
    }, [pass.password, pass.repeatPassword]);

    function gotoReview() {
        props.func(pass);
    }

    return (
        <div className='card border-0 form p-3'>
            <form action=''>
                <div className='form-group pb-4'>
                    <label className='alignLeft'>Password</label>
                    <input type='password' id='disabledTextInput' className='form-control border-0 form-control-sm rounded-0' placeholder='Input password' value={pass.password} onChange={event => { setPass({ ...pass, password: event.target.value }) }} />
                </div>

                <div className='form-group pb-4'>
                    <label className='alignLeft'>Repeat Password</label>
                    <input type='password' className='form-control border-0 rounded-0 form-control-sm' placeholder='Repeat password' value={pass.repeatPassword} onChange={event => { setPass({ ...pass, repeatPassword: event.target.value }) }} />
                </div>


                <div className='form-group pb-3'>
                    <button onClick={gotoReview} type="button" className={!enablePassword === true ? 'btn w-100 btn-lg' : 'btn w-100 bg-white text-black btn-lg'} disabled={!enablePassword}>Continue</button>
                </div>

            </form>
        </div>
    );

}

