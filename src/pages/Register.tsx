import { useState } from "react";
import { registerUser,UserData ,Address}  from "./api/userService";
import { redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


interface ErrorMessages {
    apierrors?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string; 
      street?: string;
      city?: string;
      state?: string;
      zipcode?: string;
      country?: string;
    
  }
  
export default function Register() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState<UserData>({
    firstname: 'krish',
    lastname: 'madala',
    email: 'krtest@gmail.com',
    password: 'testing123',
    isactive: true,
    usertype: 2,
    address: {
    street: '1701 royal palm dr',
    city: 'irving',
    state: 'TX',
    zipcode: '75023',
    country: 'USA',
    }
  });
  const [errors, setErrors] = useState<ErrorMessages>({});
  const handleChange = (e : any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
const validate = () => {
    const newErrors: ErrorMessages = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.address.street)  newErrors.street= "Street is required" ;
    if (!formData.address.city)  newErrors.city = "City is required" ;
    if (!formData.address.state)  newErrors.state = "State is required" ;
    if (!formData.address.zipcode) newErrors.zipcode = "Zip is required" ;
    if (!formData.address.country) newErrors.country = "Country is required" ;
    if (Object.keys(newErrors).length >0) {
        newErrors.apierrors = "Please fix the errors above";
        setErrors(newErrors);

    }
    
    return Object.keys(newErrors).length === 0; 
}
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    if (validate()) {
    registerUser(formData).then((response) => {
      console.log("User registered successfully:", response)
      navigate('/login',{ state: { successMessage: 'Registration successful! Please login.' }});
    }
    ).catch((error) => {
        debugger;
        const newErrors: ErrorMessages = {};
        newErrors.apierrors = error.response.data.message;
        setErrors(newErrors);
        console.error("Error registering user:", error);
        });
    }
    else {
       
    }
    // Here you can send data to server (API call)
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        {errors && Object.keys(errors).length > 0 &&
                <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
            Danger
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>{errors.apierrors}</p>
        </div>
        </div>
        }

      <h2 className="text-2xl font-bold mb-6 text-center">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* User Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">User Details</h3>
          <div className="grid grid-cols-1 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.firstname}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
             {errors.firstname && <div className="error">{errors.firstname}</div>}
             </div>
             <div>
                        <input
              type="text"
              name="lastname"
              placeholder="Full Name"
              value={formData.lastname}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
                     {errors.lastname && <div className="error">{errors.lastname}</div>}
             </div>
             <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            {errors.email && <div className="error">{errors.email}</div>}
             </div>
             <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
             </div>
            
          </div>
        </div>

        {/* Address Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address Details</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={formData.address.street}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            {errors.street && <div className="error">{errors.street}</div>}
             </div>
             <div></div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.address.city}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            {errors.city && <div className="error">{errors.city}</div>}
             </div>
             <div>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.address.state}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            {errors.firstname && <div className="error">{errors.state}</div>}
             </div>
             <div>
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.address.zipcode}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
            {errors.firstname && <div className="error">{errors.zipcode}</div>}
             </div>
            
          </div>
   

        {/* Submit */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
}
