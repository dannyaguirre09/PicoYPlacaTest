import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";
import 'react-toastify/dist/ReactToastify.css';
import { validatePicoYPlaca, validateMorning, validateAfternoon } from '../Utils/Validations'

export default function Main() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    var [plate, setPlate] = useState('');
    var [date, setDate] = useState('');
    var [time, setTime] = useState('');
    var [result, setResult] = useState('');


    const onSubmit = (data, e) => {
        e.preventDefault();
        setResult('')
        if (!validatePicoYPlaca(plate, date)) {
            if (!validateMorning(time)) {
                setResult('The vehicle cannot circulate after 7:00 a.m. until 9:30 a.m.')
            }
            else if (!validateAfternoon(time)) {
                setResult('The vehicle cannot circulate after 16:00. until 19:30.')
            }
            else {
                setResult('The vehicle can circulate during these hours.')
            }
        }
        else {
            setResult('The vehicle can circulate without restrictions today')
        }

    }

    return (
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <InputMask
                                placeholder='Enter plate'
                                className='form-control'
                                type='text'
                                name='plate'
                                mask="aaa-9999"
                                minLength="7"
                                {...register('plate',
                                    {
                                        required: { value: true, message: 'Plate is required' }
                                    })}
                                value={plate}
                                onChange={e => setPlate(e.target.value)}
                            />

                            <div className='col-md-12'>
                                {
                                    errors.plate &&
                                    <span className='text-danger text-small d-block mb-2'>
                                        {errors.plate.message}
                                    </span>
                                }
                            </div>

                        </div>

                        <div className='form-group pt-3'>
                            <input
                                placeholder='Enter a date'
                                className='form-control'
                                type='date'
                                name='date'
                                {...register('date',
                                    {
                                        required: { value: true, message: 'Date is required' }
                                    })}
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />

                            <div className='col-md-12'>
                                {
                                    errors.date &&
                                    <span className='text-danger text-small d-block mb-2'>
                                        {errors.date.message}
                                    </span>
                                }
                            </div>
                        </div>

                        <div className='form-group pt-3'>
                            <input
                                placeholder='Enter a time'
                                className='form-control'
                                type='time'
                                name='time'
                                {...register('time',
                                    {
                                        required: { value: true, message: 'Time is required' }
                                    })}
                                value={time}
                                onChange={e => setTime(e.target.value)}
                            />

                            <div className='col-md-12'>
                                {
                                    errors.time &&
                                    <span className='text-danger text-small d-block mb-2'>
                                        {errors.time.message}
                                    </span>
                                }
                            </div>

                        </div>


                        <div className='form-group pt-2'>
                            <button type='submit' className='btn btn-primary' >Acept </button>
                        </div>
                    </form>
                </div>
                <div className='col-md-6'>
                    <div className="card bg-light mb-3" >
                        <div className="card-header">Result</div>
                        <div className="card-body">
                            <h5 className="card-title">{plate} </h5>
                            <p className="card-text">{result}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
