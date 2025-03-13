import { useState } from "react"

const UserRegistration = () => {

    const [userForm, setUserForm] = useState({
        fullName: "",
        email: "",
        mobileNo: "",
        dob: "",
        gender: "Male",
        address: "",
        postalCode: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userForm", userForm)
    }

    return (
        <div className="bg-gray-300 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-5/12 bg-white rounded-md p-3 m-4">
                <div className='flex flex-col'>
                    <label htmlFor="">Full Name</label>
                    <input
                        type="text"
                        placeholder='Enter Full Name'
                        className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                        name='fullName'
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Email Address</label>
                    <input
                        type="text"
                        placeholder='Enter email address'
                        className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                        name='email'
                        onChange={handleChange}
                    />
                </div>

                <div className="flex gap-2">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">Mobile Number</label>
                        <input
                            type="text"
                            placeholder='Enter mobile number'
                            className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                            name='mobileNo'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="">Birth Date</label>
                        <input
                            type="date"
                            placeholder='mm-day-year'
                            className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                            name='dob'
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <h1>Gender</h1>
                    <div className="flex items-center gap-10">
                        <div>
                            <input
                                type="radio"
                                className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                                name='gender'
                                value="Male"
                                checked={userForm.gender === "Male"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                                name='gender'
                                value="Female"
                                checked={userForm?.gender === "Female"}
                                onChange={handleChange}
                            />
                            <label htmlFor="">Female</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    <label htmlFor="">Address</label>
                    <input
                        type="text"
                        placeholder='Enter address'
                        className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                        name='address'
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col flex-1">
                    <label htmlFor="">Postal code</label>
                    <input
                        type="text"
                        placeholder='Enter postal code'
                        className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                        name='postalCode'
                        onChange={handleChange}
                    />
                </div>

                <button type='submit' className='bg-blue-700 rounded-md px-6 py-2 text-white mt-3'>Save</button>

            </form>
        </div>
    )
}

export default UserRegistration