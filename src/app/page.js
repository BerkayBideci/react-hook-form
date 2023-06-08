'use client'
import { useForm } from "react-hook-form";
import { useState } from "react"

export default function ReactForm() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = data => setSubmittedData(data);

  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center gap-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col px-5 w-full lg:w-3/4 xl:w-1/3">

        <div className="my-2">
          <input {...register("firstName", { required: true, pattern: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/ })}
            placeholder="First Name"
            className="bg-emerald-100 font-bold border-2 rounded-lg px-2 w-full"
            aria-invalid={errors.firstName ? "true" : "false"} />
          {errors.firstName?.type === 'required' && <p role="alert" className="text-end text-red-600 italic font-bold">First name is required</p>}
          {errors.firstName?.type === 'pattern' && <p role="alert" className="text-end text-red-600 italic font-bold">First name is invalid</p>}
        </div>

        <div className="my-2">
          <input {...register("lastName", { required: true, pattern: /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/ })}
            placeholder="Last Name"
            className="bg-emerald-100 font-bold border-2 rounded-lg px-2 w-full"
            aria-invalid={errors.lastName ? "true" : "false"} />
          {errors.lastName?.type === 'required' && <p role="alert" className="text-end text-red-600 italic font-bold">Last name is required</p>}
          {errors.lastName?.type === 'pattern' && <p role="alert" className="text-end text-red-600 italic font-bold">Last name is invalid</p>}
        </div>

        <div className="my-2">
          <input {...register("age", { required: true })}
            type="number"
            placeholder="Age"
            className="bg-emerald-100 font-bold border-2 rounded-lg px-2 w-full"
            aria-invalid={errors.age ? "true" : "false"} />
          {errors.age?.type === 'required' && <p role="alert" className="text-end text-red-600 italic font-bold">Age is required</p>}
        </div>

        <div className="my-2">
          <input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
            placeholder="Email"
            className="bg-emerald-100 font-bold border-2 rounded-lg px-2 w-full"
            aria-invalid={errors.email ? "true" : "false"} />
          {errors.email?.type === 'required' && <p role="alert" className="text-end text-red-600 italic font-bold">Email is required</p>}
          {errors.email?.type === 'pattern' && <p role="alert" className="text-end text-red-600 italic font-bold">Email is invalid</p>}
        </div>

        <div className="my-2">
          <textarea {...register("address", { required: true })}
            placeholder="Address"
            className="bg-emerald-100 font-bold border-2 rounded-lg px-2 w-full min-h-[2em]"
            aria-invalid={errors.address ? "true" : "false"} />
          {errors.address?.type === 'required' && <p role="alert" className="text-end text-red-600 italic font-bold">Address is required</p>}
        </div>

        <div className="my-2">
          <input {...register("phone", {
            required: true, pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          })}
            type="number"
            placeholder="Phone"
            className="bg-emerald-100 font-bold border-2 rounded-lg px-2 w-full"
            aria-invalid={errors.phone ? "true" : "false"} />
          {errors.phone?.type === 'required' && <p role="alert" className="text-end text-red-600 italic font-bold">Phone is required</p>}
          {errors.phone?.type === 'pattern' && <p role="alert" className="text-end text-red-600 italic font-bold">Phone is invalid</p>}
        </div>

        <div className="my-2 flex flex-col">
          <label className="text-center text-emerald-100 font-bold" htmlFor="checkbox">I accept the <a href="#" className="text-emerald-500 italic">Terms & Conditions</a></label>
          <input {...register("checkbox", { required: true })} type="checkbox" aria-invalid={errors.phone ? "true" : "false"} name="checkbox" className="accent-emerald-600" />
          {errors.checkbox?.type === 'required' && <p role="alert" className="text-center text-red-600 italic font-bold">You must accept the Terms & Conditions to proceed.</p>}
        </div>

        <input type="submit" className="bg-emerald-700 h-10 text-emerald-100 font-bold rounded-lg" />
      </form>
      <section className="flex flex-col break-all px-5 w-full lg:w-3/4 xl:w-1/3">
        {submittedData && (
          <div className="text-start text-emerald-100 font-bold border-2 rounded-lg border-emerald-100 border-dashed px-5 py-2">
            <h3 className="text-center text-2xl my-2">Submitted Data</h3>
            <p><span className="text-emerald-500">First Name:</span> {submittedData.firstName}</p>
            <p><span className="text-emerald-500">Last Name:</span> {submittedData.lastName}</p>
            <p><span className="text-emerald-500">Age:</span> {submittedData.age}</p>
            <p><span className="text-emerald-500">Email:</span> {submittedData.email}</p>
            <p><span className="text-emerald-500">Address:</span> {submittedData.address}</p>
            <p><span className="text-emerald-500">Phone:</span> {submittedData.phone}</p>
            <p><span className="text-emerald-500">Terms & Conditions:</span> {submittedData.checkbox && "Accepted"}</p>
          </div>
        )}
      </section>
    </div>
  );
}