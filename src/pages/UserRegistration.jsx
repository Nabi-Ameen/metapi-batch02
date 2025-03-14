import axios from "axios";
import { useEffect, useState } from "react"

const UserRegistration = () => {
    const [users, setUser] = useState();
    const [singleUser, setSingleUser] = useState(null);

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

    useEffect(() => {
        setUserForm({
            fullName: singleUser?.fullName || "",
            email: singleUser?.email || "",
            mobileNo: singleUser?.mobileNo || "",
            dob: singleUser?.dob || "",
            gender: singleUser?.gender || "Male",
            address: singleUser?.address || "",
            postalCode: singleUser?.postalCode || "",
        })
    }, [singleUser])


    const getUser = async () => {
        const reponse = await axios.get("http://localhost:3000/api/getRegisterUser");
        setUser(reponse?.data?.data)
    }


    useEffect(() => {
        getUser()
    }, [])


    const getSinglUser = async (id) => {
        const reponse = await axios.get(`http://localhost:3000/api/getsingleUser/${id}`);
        setSingleUser(reponse?.data?.data)
    }

    const createUser = (userForm) => {
        axios.post("http://localhost:3000/api/registerUser", userForm)
        getUser();
    }
    const updatUser = async (id, userForm) => {
        await axios.put(`http://localhost:3000/api/updateUser/${id}`, userForm);
        getUser()
    }

    const deltetUser = async (id) => {
        await axios.delete(`http://localhost:3000/api/deleteUser/${id}`);
        getUser();
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (singleUser) {
            const id = singleUser?.id;
            updatUser(id, userForm);
            setSingleUser(null)
        } else {
            createUser(userForm);
            getUser();
            setUserForm({
                fullName: "",
                email: "",
                mobileNo: "",
                dob: "",
                gender: "Male",
                address: "",
                postalCode: "",
            })
        }

    }

    return (
        <>
            <div className="bg-gray-300 flex items-center justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-5/12 bg-white rounded-md p-3 m-4">
                    <div className='flex flex-col'>
                        <label htmlFor="">Full Name</label>
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            className=' outline-none border-2 border-gray-300 p-2 rounded-md'
                            name='fullName'
                            value={userForm?.fullName}
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
                            value={userForm?.email}
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
                                value={userForm?.mobileNo}
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
                                value={userForm?.dob}
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
                            value={userForm?.address}
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
                            value={userForm?.postalCode}
                            onChange={handleChange}
                        />
                    </div>

                    <button type='submit' className='bg-blue-700 rounded-md px-6 py-2 text-white mt-3'>{singleUser ? "Update" : "Save"}</button>

                </form>
            </div>
            <div>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <td className="px-4 py-2 border">S.No</td>
                            <td className="px-4 py-2 border">Full Name</td>
                            <td className="px-4 py-2 border">Email</td>
                            <td className="px-4 py-2 border">mobileNo</td>
                            <td className="px-4 py-2 border">Dob</td>
                            <td className="px-4 py-2 border">gender</td>
                            <td className="px-4 py-2 border">postal</td>
                            <td className="px-4 py-2 border">address</td>
                            <td className="px-4 py-2 border">Action</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            users?.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="px-4 py-2 border">{user?.id}</td>
                                        <td className="px-4 py-2 border">{user?.fullName}</td>
                                        <td className="px-4 py-2 border">{user?.email}</td>
                                        <td className="px-4 py-2 border">{user?.mobileNo}</td>
                                        <td className="px-4 py-2 border">{user?.dob}</td>
                                        <td className="px-4 py-2 border">{user?.gender}</td>
                                        <td className="px-4 py-2 border">{user?.postalCode}</td>
                                        <td className="px-4 py-2 border">{user?.address}</td>
                                        <td className="px-4 py-2 border">
                                            <button className="bg-blue-600 text-white p-2 rounded-lg" onClick={() => getSinglUser(user?.id)}>Edit</button>
                                            <button className="bg-red-600 text-white p-2 rounded-lg" onClick={() => deltetUser(user?.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserRegistration