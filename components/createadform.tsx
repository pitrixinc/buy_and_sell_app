"use client";
import React from 'react';
import Alert from "@mui/material/Alert";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextField from "@mui/material/TextField";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import { currencies } from "@/lib/currencies";
import { location } from "@/lib/location";
import Image from 'next/image';
// import { PaystackButton } from "react-paystack";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { MutableRefObject, useRef, useState } from "react";
import { formValidate } from "@/lib/validations";
import { FormData } from "@/lib/types";

import { useSession } from "next-auth/react";
import { createAd } from "@/lib/uploadData";

const initialState = {
  category: "electronics",
  location: "",
  youtube: "",
  title: "",
  description: "",
  price: 0,
  marketprice: 0,
  contactNumber: null,
  negotiable: true,
  images: [],
  subcategory: "",
  type: "",
  quantity: 0,
  condition: "",
  material: "",
  warranty: true,
  delivery: true,
  specialty: "",
  dietary: "",
  color: "",
  ghana: true,
  brand: "",
  handmade: true,
  age: 0,
  gender: "",
  size: 0,
  capacity: "",
  userName: "", userImage: "", formattedDate: "", name: "",
};

interface CategoryFields {
  [key: string]: string[]; // An index signature that maps strings to arrays of strings
}

// Annotate the categoryFields object with the defined interface
const categoryFields: CategoryFields = {
  agriculture_farmAnimals: ["location", "youtube", "title", "type", "quantity" , "description", "price", "marketprice" , "contactNumber" , "name" , "negotiable", "delivery"],
  agriculture_farmMachinery: ["location", "youtube", "title", "description", "type" , "condition", "material" ,"price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  agriculture_feeds: ["location", "youtube", "title", "description", "type" , "price", "marketprice" , "contactNumber" , "name" , "negotiable", "delivery"],
  agriculture_meals: ["location", "youtube", "title", "description", "type" , "specialty" , "dietary" , "price", "marketprice" , "contactNumber" , "name" , "negotiable", "delivery"],
  baby_childCare: ["location", "youtube", "title", "description", "type" , "condition", "price", "marketprice" , "contactNumber" , "name" , "negotiable", "delivery"],
  baby_kidAccessories: ["location", "youtube", "title", "description", "type" , "color" , "condition", "price", "marketprice" , "contactNumber" , "name" , "ghana" , "negotiable", "delivery"],
  baby_kidClothing: ["location", "youtube", "title", "description", "brand" , "color" , "type" , "condition", "material" ,"price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery", "handmade"],
  baby_kidFurniture: ["location", "youtube", "title", "description", "brand" , "color" , "type" , "condition", "material" ,"price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery", "handmade"],
  baby_kidGear: ["location", "youtube", "title", "description", "color" , "type" , "condition", "age" , "gender" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  baby_kidShoe: ["location", "youtube", "title", "description", "brand" , "color" , "type" , "condition", "size" ,"price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  baby_maternity: ["location", "youtube", "title", "description", "type" , "condition" , "price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  baby_kidPlayground: ["location", "youtube", "title", "description", "brand" , "color" , "type" , "condition", "age", "gender" ,"price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  baby_kidPrams: ["location", "youtube", "title", "description", "brand" , "color" , "type" , "capacity" ,"condition", "price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  baby_kidToys: ["location", "youtube", "title", "description", "brand" , "color" , "type" , "gender" , "age" , "material" , "condition", "size" ,"price" , "marketprice", "contactNumber" , "name" , "negotiable", "warranty", "delivery"],
  // ... (add fields for other categories)
};

// Define the type for the "field" parameter
type DynamicFormFieldProps = {
  field: string;
  formData: FormData; // Make sure to import FormData type from "@/lib/types"
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

function DynamicFormField({ field, formData, setFormData }: DynamicFormFieldProps) {
  switch (field) {
    case "location":
      return (
        <TextField
          id="outlined-select-location"
          select
          label="Select Location*"
          value={formData.location}
          sx={{ width: "350px", marginTop: "15px" }}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
        >
          {location.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      );
    case "youtube":
      return (
        <TextField
          id="outlined-youtube-link"
          label="Link to Youtube Video"
          type="text"
          value={formData.youtube}
          sx={{ width: "350px", marginBottom: "15px" }}
          onChange={(e) => setFormData({ ...formData, youtube: e.target.value })}
        />
      );
      case "capacity":
      return (
        <TextField
          id="outlined-youtube-link"
          label="Capacity"
          type="text"
          value={formData.capacity}
          sx={{ width: "350px", marginBottom: "15px" }}
          onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
        />
      );
      case "gender":
      return (
        <TextField
          id="outlined-youtube-link"
          label="Gender"
          type="text"
          value={formData.gender}
          sx={{ width: "350px", marginBottom: "15px" }}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
      );
      case "age":
        return (
          <TextField
            id="outlined-youtube-link"
            label="Age"
            type="number"
            value={formData.age}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) => setFormData({ ...formData, age: Number (e.target.value) })}
          />
        );
        case "size":
          return (
            <TextField
              id="outlined-youtube-link"
              label="Size"
              type="number"
              value={formData.size}
              sx={{ width: "350px", marginBottom: "15px" }}
              onChange={(e) => setFormData({ ...formData, size: Number (e.target.value) })}
            />
          );
      case "brand":
        return (
          <TextField
            id="outlined-youtube-link"
            label="Brand"
            type="text"
            value={formData.brand}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          />
        );
      case "color":
      return (
        <TextField
          id="outlined-youtube-link"
          label="Color"
          type="text"
          value={formData.color}
          sx={{ width: "350px", marginBottom: "15px" }}
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
        />
      );
      case "specialty":
        return(
          <TextField
              id="outlined-password-input"
              label="Specialty"
              type="text"
              value={formData.specialty}
              sx={{ width: "350px", marginBottom: "15px" }}
              onChange={(e) =>
                setFormData({ ...formData, specialty: e.target.value })
              }
            />
        );
        case "dietary":
          return(
            <TextField
                id="outlined-password-input"
                label="Dietary Needs"
                type="text"
                value={formData.dietary}
                sx={{ width: "350px", marginBottom: "15px" }}
                onChange={(e) =>
                  setFormData({ ...formData, dietary: e.target.value })
                }
              />
          );
      case "title":
        return(
          <TextField
              id="outlined-password-input"
              label="Title"
              type="text"
              value={formData.title}
              sx={{ width: "350px", marginBottom: "15px" }}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
        );
        case "type":
          return(
            <TextField
                id="outlined-password-input"
                label="Type"
                type="text"
                value={formData.type}
                sx={{ width: "350px", marginBottom: "15px" }}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
              />
          );
          case "quantity":
            return(
              <TextField
                  id="outlined-password-input"
                  label="Quantity"
                  type="number"
                  value={formData.quantity}
                  sx={{ width: "350px", marginBottom: "15px" }}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: Number(e.target.value) })
                  }
                />
            );
          case "description":
            return(
              <TextField
                id="outlined-password-input"
                label="Description"
                value={formData.description}
                type="text"
                autoComplete="current-password"
                sx={{ width: "350px", marginBottom: "15px" }}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            );
          case "marketprice":
            return(
              <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Market Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Naira</InputAdornment>
              }
              label="Market Price"
              type="number"
              value={formData.marketprice}
              onChange={(e) =>
                setFormData({ ...formData, marketprice: Number(e.target.value) })
              }
            />
          </FormControl>
            );
          case "price":
            return(
              <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Selling Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Naira</InputAdornment>
              }
              label="Price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
              required
            />
          </FormControl>
            );
          case "contactNumber":
            return(
              <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Contact Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Tel</InputAdornment>
              }
              label="Contact Number"
              type="number"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contactNumber: Number(e.target.value),
                })
              }
              required
            />
          </FormControl>
            );
            case "name":
              return(
                <TextField
                  id="outlined-password-input"
                  label="Seller Name"
                  value="Your default name is selected"
                  type="text"
                  autoComplete="current-password"
                  sx={{ width: "350px", marginBottom: "15px" }}
                  disabled
                />
              );
            case "negotiable":
              return(
                <>
                <br/>
                  <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.negotiable}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          negotiable: !formData.negotiable,
                        })
                      }
                    />
                  }
                  label="Negotiable"
                />
                </>
              );
         case "condition":
          return (
            <>
            <br />
            <Select
            id="outlined-password-input"
            value={formData.condition}
            label="Condition"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, condition: e.target.value })
            }
          >
            <MenuItem value="Condition - Not Selected" disabled>Condition - Not Selected</MenuItem>
            <MenuItem value="Brand New">Brand New</MenuItem>
            <MenuItem value="For Parts or Not Working">For Parts or Not Working</MenuItem>
            <MenuItem value="Manufacturer Refurbished">Manufacturer Refurbished</MenuItem>
            <MenuItem value="Seller Refurbished">Seller Refurbished</MenuItem>
            <MenuItem value="Used">Used</MenuItem>
          </Select>
          </>
          );  
        case "material":
          return(
            <TextField
                id="outlined-password-input"
                label="Material"
                type="text"
                value={formData.material}
                sx={{ width: "350px", marginBottom: "15px" }}
                onChange={(e) =>
                  setFormData({ ...formData, material: e.target.value })
                }
              />
          ); 
          case "warranty":
            return(
              <>
              <br/>
                <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.warranty}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        warranty: !formData.warranty,
                      })
                    }
                  />
                }
                label="Warranty"
              />
              </>
            );
            case "delivery":
              return(
                <>
                <br/>
                  <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.delivery}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          delivery: !formData.delivery,
                        })
                      }
                    />
                  }
                  label="Nation wide delivery"
                />
                </>
              );
              case "ghana":
                return(
                  <>
                  <br/>
                    <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.ghana}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            delivery: !formData.ghana,
                          })
                        }
                      />
                    }
                    label="Made In Ghana"
                  />
                  </>
                );
                case "handmade":
                  return(
                    <>
                    <br/>
                      <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.handmade}
                          onChange={() =>
                            setFormData({
                              ...formData,
                              delivery: !formData.handmade,
                            })
                          }
                        />
                      }
                      label="Hand Made"
                    />
                    </>
                  );
    // ... (add cases for other fields)
    default:
      return null;
  }
}

export default function Createadform() {

  /* For PayStack
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const amount = 1000000
  */

  const [formData, setFormData] = useState<FormData>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const session: any = useSession<any | null | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
/* for paystack
  const [isPaymentEnabled, setIsPaymentEnabled] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
*/
  const filePickerRef: MutableRefObject<any | null> = useRef<any | null>(null);

  const validationResult = formValidate({ ...formData });

  /* PayStack implementation
  const handlePaymentCheckbox = () => {
    setIsPaymentEnabled(!isPaymentEnabled);
  };

  const componentProps = {
    email,

    amount,
    currency: "GHS",

    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: name,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: phone,
        },
      ],

    },

    publicKey,

    text: "Pay Now",

    onSuccess: () => {
    setPaymentSuccessful(true);
    setLoading(false);
    submitData();
    },
    onClose: () => {
      setPaymentSuccessful(false);
      setLoading(false);
    }

  }
*/

{/*
  type DynamicFormFieldProps = {
    field: string;
    formData: FormData; // Make sure to import FormData type from "@/lib/types"
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  };
  
  function DynamicFormField({ field, formData, setFormData }: DynamicFormFieldProps) {
  */}

  const handleCategoryChange = (categoryValue: string, subcategoryValue: string | undefined) => {
    setFormData({
      ...formData,
      category: categoryValue,
      subcategory: subcategoryValue || "", // If no subcategory, reset to empty
    });
  };

  const selectImg = () => {};

  const addImageToPost = (files: any) => {
    if (!files) {
      setError("No files selected");
      return;
    }
  
    if (files.length > 10) {
      setError("Please upload a maximum of 10 files");
      return;
    }
  
    let updatedGallery = [];
    for (let i = 0; i < files.length; i++) {
      const newImage = files[i];
      newImage["id"] = Math.random();
  
      if (
        !files[i].name.match(/\.(jpg|jpeg|png|gif|webp)$/) ||
        files[i].size > 5000000
      ) {
        setError("Image File not Supported, Please ReUpload");
      } else {
        setError(null);
        updatedGallery.push(newImage);
      }
    }
    setFormData({ ...formData, images: updatedGallery });
  };
  

  /* submit with payment included
  const submitData = async () => {
    // clear error field
    setError(null);
    setSuccess(null);
    const userEmail = session.data.user.email;
    const userName = session.data?.user.name;
    const userImage = session.data?.user.image;

    // Validations
    const validationResult: {
      error: boolean;
      message: string;
    } = formValidate({ ...formData });

    if (validationResult.error) {
      setError(validationResult.message);
      return;
    }
    // Start loading spinner
    if (!isPaymentEnabled || paymentSuccessful) {
    setLoading(true);

    // Get the current date
     const currentDate = new Date();
     const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;


    //Submittion
    const submittionResult = await createAd({ ...formData, userEmail, userName, userImage, formattedDate });

    if (submittionResult.error) {
      setError(submittionResult.message);
    } else {
      setLoading(false);
      setSuccess("Ad successfully created");
      setFormData(initialState);
    }
  } else {
    setError("Payment not completed or failed");
  }
};
*/

const submitData = async () => {
  // clear error field
  setError(null);
  setSuccess(null);
  const userEmail = session.data.user.email;
  const userName = session.data?.user.name;
  const userImage = session.data?.user.image;

  // Validations
  const validationResult: {
    error: boolean;
    message: string;
  } = formValidate({ ...formData });

  if (validationResult.error) {
    setError(validationResult.message);
    return;
  }
  // Start loading spinner

  setLoading(true);

  // Get the current date
   const currentDate = new Date();
   const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;


  //Submittion
  const submittionResult = await createAd({ ...formData, userEmail, userName, userImage, formattedDate });

  if (submittionResult.error) {
    setError(submittionResult.message);
    return;
  }

  setLoading(false);
  setSuccess("Ad successfully created");
  setFormData(initialState);
};

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <div className=" w-[90%] md:w-[57%] lg:w-[60%] mx-auto">
        <div className="p-3 bg-white mx-auto text-center relative rounded-md">
          Post ad
          <span
            className="absolute right-3 text-green-600 text-sm hover:cursor-pointer"
            onClick={() => setFormData(initialState)}
          >
            Clear
          </span>
        </div>

        <div className="mt-5 p-3 py-7 bg-white mx-auto text-center relative rounded-md space-y-5">
          {/* Category Dropdown */}
          <TextField
            id="outlined-select-category"
            select
            label="Category*"
            value={formData.category}
            sx={{ width: "350px" }}
            onChange={(e) =>
              handleCategoryChange(e.target.value, "") // Reset subcategory
            }
          >
            {currencies.map((mainCategory) => (
              <MenuItem key={mainCategory.value} value={mainCategory.value}>
                {mainCategory.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Subcategory Dropdown */}
          {formData.category && currencies.find(item => item.value === formData.category)?.subcategories && (
            <TextField
              id="outlined-select-subcategory"
              select
              label="Subcategory*"
              value={formData.subcategory}
              sx={{ width: "350px", marginTop: "15px" }}
              onChange={(e) => handleCategoryChange(formData.category, e.target.value)}
            >
             {currencies.find(item => item.value === formData.category)?.subcategories?.map((subcategory) => (
                <MenuItem key={subcategory.value} value={subcategory.value}>
                   {subcategory.label}
                </MenuItem>
              ))}

            </TextField>
          )}
           {/*
          <TextField
            id="outlined-select-currency"
            select
            label="Select Location*"
            value={formData.location}
            sx={{ width: "350px", marginTop: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          > 
            {location.map((option) => (
              <MenuItem key={option.name} value={option.name}>
                {option.name}
              </MenuItem>
            ))}
          </TextField>
            */}
          {/* Image */}
          <div className="text-left text-sm w-[350px] mx-auto">
            <div className="font-semibold">Add Photo</div>
            <div>
              <small className="text-[#464b4f]">
                Add at least 2 photos for this category
              </small>
              <br />
              <small className="text-[#464b4f]">
                First picture - is the title picture.
              </small>
            </div>
            <span
              className="py-2 flex space-x-3"
              onClick={() => {
                filePickerRef.current?.click();
              }}
            >
              <input
                type="file"
                hidden
                multiple
                ref={filePickerRef}
                onChange={(event) => addImageToPost(event.target.files)}
              />
              <AddBoxIcon className="my-auto hover:cursor-pointer" />

              {formData?.images.map((image: any, index: number) => (
                <span key={index}>
                  <Image
                    src={URL.createObjectURL(image)}
                    className="w-12 h-12"
                    alt="AdImage"
                    width={12} height={12}
                  />
                </span>
              ))}
            </span>
            <br />
            <small className="text-[#464b4f]">
              Supported formats are .jpg, .gif and .png, 5MB max
            </small>
          </div>

          <div className="mt-5 p-3 py-7 bg-white mx-auto text-center relative rounded-md space-y-5">
          {/* ... (existing code) */}

          {/* Render dynamic fields based on the selected category */}
{formData.category && categoryFields[formData.category]?.length > 0 ? (
  categoryFields[formData.category]?.map((field) => (
    <DynamicFormField
      key={field}
      field={field}
      formData={formData}
      setFormData={setFormData}
    />
  ))
) : (
  formData.subcategory &&
  categoryFields[`${formData.category}_${formData.subcategory}`]?.map((field) => (
    <DynamicFormField
      key={field}
      field={field}
      formData={formData}
      setFormData={setFormData}
    />
  ))
)}


          {/* ... (existing code) */}
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
        </div>

          {/* Image */}
{/*
          <TextField
            id="outlined-password-input"
            label="Link to Youtube Video"
            type="text"
            value={formData.youtube}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, youtube: e.target.value })
            }
          />
          <TextField
            id="outlined-password-input"
            label="Title"
            type="text"
            value={formData.title}
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextField
            id="outlined-password-input"
            label="Description"
            value={formData.description}
            type="text"
            autoComplete="current-password"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Market Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Naira</InputAdornment>
              }
              label="Price"
              type="number"
              value={formData.marketprice}
              onChange={(e) =>
                setFormData({ ...formData, marketprice: Number(e.target.value) })
              }
            />
          </FormControl>
          <br />

          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">Selling Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Naira</InputAdornment>
              }
              label="Price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
            />
          </FormControl>
          <br />

          <FormControl sx={{ width: "350px" }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              Contact Number
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">Tel</InputAdornment>
              }
              label="Contact Number"
              type="number"
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contactNumber: Number(e.target.value),
                })
              }
            />
          </FormControl>
          <br />
          <div className="text-left w-[350px] mx-auto">
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.negotiable}
                  onChange={() =>
                    setFormData({
                      ...formData,
                      negotiable: !formData.negotiable,
                    })
                  }
                />
              }
              label="Negotiable"
            />

            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
          </div>
            */}
                  <div className="error-list">
  {Object.entries(validationResult).map(([field, message]) => (
    <span key={field} className={`error text-sm ${message === "Validated Successfully" ? "text-green-500" : "text-red-500"}`}>
      {message}
    </span>
  ))}
</div>
 

              {/*
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isPaymentEnabled}
                          onChange={handlePaymentCheckbox}
                          disabled={validationResult.error}
                        />
                      }
                      label="Promote your ad"
                    /> <br/>
                    {isPaymentEnabled && (
                      <>
<form>

         <TextField
            id="name"
            label="Name"
            type="text"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) => setName(e.target.value)}
          />

        <TextField
            id="email"
            label="Email"
            type="text"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) => setEmail(e.target.value)}
          />

         <TextField
            id="phone"
            label="Phone"
            type="text"
            sx={{ width: "350px", marginBottom: "15px" }}
            onChange={(e) => setPhone(e.target.value)}
          />
     </form>

    <PaystackButton  {...componentProps as any} className="cursor-pointer text-center text-xs tracking-wider uppercase bg-blue-600 font-bold text-white border-none rounded-md w-[350px] h-10 mt-10" />
     </> )}

     {!isPaymentEnabled && (
          <button onClick={submitData} disabled={validationResult.error} className="btn w-[350px] btn-accent bg-green-500 text-white">
            <span
              className={`${loading ? "loading loading-spinner" : ""}`}
            ></span>
            Create Ad
          </button>
     )}
     */}
         <button onClick={submitData} disabled={validationResult.error} className="btn w-[350px] btn-accent bg-green-500 text-white" >
            <span
              className={`${loading ? "loading loading-spinner" : ""}`}
            ></span>
            Create Ad
          </button>
        </div>
      </div>
    </div>
  );
}
