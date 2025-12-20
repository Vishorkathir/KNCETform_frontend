import React from "react";
import { useState } from "react";
import logo from "../assets/kongunadulogo.png"
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {

  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();


  const degree = [
    { id: 1, department: "AD(Artificial and Data Science Engineering)" },
    { id: 2, department: "BME(Bio-Medical Engineering)" },
    { id: 3, department: "CSE(Computer Science and Engineering)" },
    { id: 4, department: "CIVIL(Civil Engineering)" },
    { id: 5, department: "ECE(Electronics and Communication Engineering )" },
    { id: 6, department: "EEE(Electrical and Electronics Engineering)" },
    { id: 7, department: "IT(Information Technology)" },
    { id: 8, department: "MECH(Mechanical Engineering)" },
  ]

  const Address = [
    { label: "Address Line 1 (Door no, Village Name / Street Name)", name: "address1", placeholder: "Enter Door no, Village Name / Street Name", full: true },
    { label: "Address Line 2 (Panchayat / Town)", name: "address2", placeholder: "Enter Panchayat / Town", full: true },
    { label: "Taluk", name: "taluk", placeholder: "Enter Taluk" },
    { label: "District", name: "district", placeholder: "Enter District" },
    { label: "State", name: "state", placeholder: "Enter State" },
    { label: "Pin Code", name: "pincode", placeholder: "Enter Pin Code" },
    { label: "Contact No. (Father)", name: "fatherContact", placeholder: "Enter Contact No. (Father)" },
    { label: "Contact No. (Mother)", name: "motherContact", placeholder: "Enter Contact No. (Mother)" },
    { label: "Contact No. (Student)", name: "studentContact", placeholder: "Enter Contact No. (Student)", full: true },
  ];
  const Community = [
    { id: 1, community: "OC" },
    { id: 2, community: "BC" },
    { id: 3, community: "BCM" },
    { id: 4, community: "MBC" },
    { id: 5, community: "SC" },
    { id: 6, community: "SCA" },
    { id: 7, community: "SCE" },
    { id: 8, community: "ST" }
  ]

  const options = [
    'HSC Academic',
    'HSC Vocational',
    'CBSE',
    'Diploma',
    'Dropout'
  ];


  const handleNavigate = () => {
    if (formData.lastStudies === 'Diploma') {
      navigate("/diplomaInfo");
    }
    else {
      navigate("/SSLCInfo");
    }
  }


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };




  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };


  return (
    <>
      {/* top */}
      <div className="py-1 ml-10 flex flex-row font-bold ">
        <img src={logo} className="w-10  " />
        <h1 className="py-5  px-3 text-2xl mt-3 ">
          Kongunadu college of Engineering and Technology
        </h1>

      </div>


      <div className=" flex flex-col item-center    ">
        {/* Header */}
        <div className="max-w-8xl w-full  px-40 py-20">


          <div className="mb-10 text-center">

            <h1 className=" text-4xl  font-bold text-gray-800">
              Kongunadu College of Engineering & Technology
            </h1>
            <h2 className="text-4xl text-gray-800 font-normal ">Atonomous</h2>

            <p className=" text-lg text-gray-700">
              AICTE-New Delhi, Affiliation: Anna University, Chennai, Accreditations: NAAC & NBA,
              Address: Namakkal - Trichy Main Road, Thottiapatti (Po), Thottiam Taluk, Trichy Dt. 621 215
            </p>
          </div>

          {/* Section: Personal Information */}
          <h2 className=" text-3xl font-semibold text-gray-800">
            Personal Information
          </h2>

          <form className="mt-4  space-y-6">
            {/* Degree & Quota */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <label className="block text-lg font-medium text-gray-700">Degree</label>
                <select className=" mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                  {
                    degree.map((dept, index) => (
                      <option className="" key={index}>{dept.department}</option>
                    ))}
                </select>
              </div>


              <div className="grid ">
                <label className="block text-lg font-medium text-gray-700">Quota</label>

                <div className="flex items-center space-x-6 text-xl mt-5 border border-gray-200 rounded-xl p-2" >

                  <label className="flex items-center space-x-2">
                    <input type="radio" name="quota" className="text-blue-600" required />
                    <span>Management Quota</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="quota" className="text-blue-600" />
                    <span>Government Quota</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Admission Type */}
            <div className="grid w-120">
              <label className=" block text-lg font-medium text-gray-700">Admission Type</label>
              <div className="flex space-x-6 border border-gray-200 rounded-xl p-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="entry" className="text-blue-600" />
                  <span>I Year</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="entry" className="text-blue-600" />
                  <span>Lateral Entry</span>
                </label>
              </div>
            </div>

            {/* Name & Gender */}
            <div>
              <label className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-120 p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required
              />
            </div>
            <div>
            <label className="block text-lg font-medium text-gray-700">Date of Birth</label>
                              <input type="date" placeholder="Date of Birth" className="input  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
</div>
            <div className="grid w-120 ">
              <label className=" block text-lg font-medium text-gray-700">Gender</label>
              <div className="flex space-x-6 border border-gray-200 rounded-xl p-2">
                <label className="flex items-center space-x-2" >
                  <input type="radio" name="gender" className="text-blue-600" required />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" className="text-blue-600" />
                  <span>Female</span>
                </label>
              </div>
            </div>

            {/* Parents Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid">
                <label className="block text-lg font-medium text-gray-700">Father/Guardian's Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-120 p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>


              <div className="grid">
                <label className="block text-lg font-medium text-gray-700">Father/Guardian's Occupation</label>
                <input
                  type="text"
                  placeholder=" Occupation"
                  className="w-120 p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Community & Caste */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid">
                <label className=" text-lg font-medium text-gray-700">Community</label>
                <select className="w-120 p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required>
                  {
                    Community.map((community, index) => (
                      <option key={index}>{community.community}</option>
                    ))
                  }

                </select>
              </div>
              <div className="grid">
                <label className=" text-lg font-medium text-gray-700">Caste</label>
                <input
                  type="text"
                  placeholder="Enter Caste"
                  className="w-120 p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required
                />
              </div>
            </div>

            {/* Family Income & First Graduate */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid">
                <label className="block text-lg font-medium text-gray-700">Family Income</label>
                <input
                  type="text"
                  placeholder="Enter Family Income"
                  className="w-120 p-3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="grid ">
                <div>
                  <span className="text-sm font-medium text-gray-700  ">Are you First Graduate?</span>
                </div>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="firstGrad" className="text-blue-600" required />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="firstGrad" className="text-blue-600" />
                    <span>No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Passport Photo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passport Photo
              </label>

              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {photo ? (
                  <img
                    src={photo}
                    alt="Uploaded Preview"
                    className="mx-auto h-40 w-40 object-cover rounded-md"
                  />
                ) : (
                  <p className="text-gray-500 text-sm mb-2">
                    Click below to upload your passport-size photo
                  </p>
                )}

                {/* Hidden file input */}
                <input
                  type="file"
                  accept="image/*"
                  id="photoUpload"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  required
                />

                {/* Custom button for upload */}
                <label
                  htmlFor="photoUpload"
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block mt-2"
                >
                  {photo ? "Change Photo ?" : "Upload Photo"}
                </label>
              </div>
            </div>


            {/* Communication Address */}

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <h1 className="mb-1 font-medium text-lg text-gray-700" >Communication Address</h1>
              </div>
              {Address.map((field, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${field.full ? "md:col-span-2" : ""}`}
                >

                  <label className="mb-1 font-medium text-sm text-gray-700 ">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className="  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              ))}
            </div>



            {/* Educational Background */}

            <h2 className="mb-1 font-medium text-lg text-gray-700">Educational Background</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-5 border border-gray-200 p-5">
              <div className="grid">
              <div className="grid">
                <label className="mb-1 font-medium text-sm text-gray-700 ">SSLC Mark</label>
                <input type="text" placeholder="SSLC Mark" className="input  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="grid">
                <label className="mb-1 font-medium text-sm text-gray-700 ">Name & Place of School</label>
                <input type="text" placeholder="Name & Place of School" className="input  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>
              </div>

                  <div className=" grid w-120" >
                <label className=" font-medium text-sm text-gray-700">Last Studies</label>
                <select
                  name="lastStudies"
                  onChange={handleChange}

                  className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled >Select an option</option>
                  {options.map((option, index) => (
                    <option key={index} value={option} >{option}</option>
                  ))}
                </select>
              </div>
              {formData.lastStudies === 'Dropout' && (
                // Dropout info
                <div>

                  <input type="text" placeholder="Name & Place of College" className="input  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <input type="text" placeholder="Reg. No" className="input  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <input type="text" placeholder="Medium of Study" className="input  px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                  <input type="text" placeholder="Year of Passing" className=" px-3 py-2 mt-1 w-120 p-3 border-gray-200 text-lg text-gray-800 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />

                </div>
              )}

              

              <div className="flex space-x-6 items-center">
                <span className="text-sm font-medium text-gray-700">
                  Studied 6th–12th in Govt School?
                </span>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="govtSchool" className="text-blue-600" />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="govtSchool" className="text-blue-600" />
                  <span>No</span>
                </label>
              </div>
            </div>



            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleNavigate}
              >
                Save and Continue
              </button>

            </div>
          </form>
        </div>
      </div>
    </>

  );
};


export default PersonalInfo;
