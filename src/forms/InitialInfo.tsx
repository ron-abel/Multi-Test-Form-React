import React, { useEffect } from 'react';
import '../App.css';
import { useState } from 'react';

export default function InitialInfo(props: any) {
    interface infoInitial {
        username: string,
        email: string,
        country: string,
    };

    const [info, setInfo] = useState<infoInitial>({ username: "", email: "", country: "" });
    const [isValidEmail, setIsValidEmail] = useState(false);


    const [enable, setEnable] = useState<boolean>(true);



    useEffect(() => {
        setIsValidEmail(isValidEmailFormat(info.email));

        if (info.username && isValidEmail && info.country) {
            if(isValidEmail == true){
                setEnable(true)
            }
        }
        else {
            setEnable(false);
        }
    }, [info.username, isValidEmail, info.country, info.email]);

    function gotoPassword() {
        props.func(info);
    }

    const isValidEmailFormat = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(email);
    }




    return (
        <div className='card border-0 form p-3'>
            <form >
                <div className='col-12 pb-4'>
                    <label className='alignLeft'>Username</label>
                    <input type='text' className='form-control border-0 form-control-sm rounded-0' placeholder='Input username' value={info.username} onChange={event => setInfo({ ...info, username: event.target.value })} />
                </div>

                <div  className={!isValidEmail ? 'col-12 pb-0':'col-12 pb-4'}>
                    <label className='alignLeft'>Email</label>
                    <input type='email' className='form-control border-0 rounded-0 form-control-sm' placeholder='Input email' value={info.email} onChange={event => setInfo({ ...info, email: event.target.value })} />
                    {!isValidEmail && <p style={{ color: 'red' }}>Invalid email format</p>}
                </div>

                <div className='col-12 pb-4'>
                    <label className='alignLeft'>Country</label>
                    <select className='border-0 form-control form-control-sm rounded-0' title='Select Country' value={info.country} onChange={event => setInfo({ ...info, country: event.target.value })}>
                        <option value="" disabled>Select Country</option>
                        <option value="Spain">Spain</option>
                        <option value="Germany">Germany</option>
                        <option value="USA">USA</option>
                    </select>
                </div>

                <div className='form-group pb-3'>
                    <button onClick={gotoPassword} type="button" className={!enable === true ? 'btn w-100 btn-lg' : 'btn w-100 bg-white text-black btn-lg'} disabled={!enable}>Continue</button>
                </div>

            </form>
        </div>
    );
}

