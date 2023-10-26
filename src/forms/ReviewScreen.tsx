import React, { useEffect, useState } from 'react';
import '../App.css';

export default function ReviewScreen(props:any) {
    const [submited,setSubmited] = useState<Boolean>(false)

    function checkData(){
        if(props.data.username && props.data.email && props.data.country){
            
            setSubmited(true);
            props.resp(submited);
        }
    }
    return (
        <div className='card border-0 form  p-3'>
            <form action=''>
                <div className='form-group row '>
                    <label className='col-6 col-form-label alignLeft'>Username</label>
                    <div className='col-6 form-input '>
                        <input type='text'  className='form-control-plaintext form-review text-white border-0 form-control-sm rounded-0' readOnly placeholder={props.data.username} />
                    </div>
                </div>
                <div className='form-group row '>
                    <label className='col-6 col-form-label alignLeft'>Email</label>
                    <div className='col-6 form-input '>
                        <input type='text'  className='form-control-plaintext form-review text-white border-0 form-control-sm rounded-0' readOnly placeholder={props.data.email} />
                    </div>
                </div>
                <div className='form-group row pb-4'>
                    <label className='col-6 col-form-label alignLeft'>Country</label>
                    <div className='col-6 form-input '>
                        <input type='text'  className='form-control-plaintext form-review text-white border-0 form-control-sm rounded-0' readOnly placeholder={props.data.country} />
                    </div>
                </div>

               
                
                <div className='form-group pb-3'>
                    <button type="button" onClick={checkData} className="btn bg-white text-black w-100 btn-lg">Complete</button>
                </div>

            </form>
        </div>
    );
}

