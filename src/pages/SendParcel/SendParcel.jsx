import { useState } from "react";

const SendParcel = () => {
  const [type, setType] = useState("document");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">Add Parcel</h1>
      <p className="mb-6 text-gray-500">Enter your parcel details</p>

      {/* Parcel Type */}
      <div className="mb-6 flex gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="parcelType"
            checked={type === "document"}
            onChange={() => setType("document")}
          />
          Document
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="parcelType"
            checked={type === "non-document"}
            onChange={() => setType("non-document")}
          />
          Non-Document
        </label>
      </div>

      {/* Parcel Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Parcel Name"
          className="input input-bordered w-full"
        />
        <input
          type="number"
          placeholder="Parcel Weight (kg)"
          className="input input-bordered w-full"
        />
      </div>

      {/* Sender & Receiver */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Sender Details */}
        <fieldset className="border p-4 rounded-xl">
          <legend className="font-semibold px-2">Sender Details</legend>

          <div className="grid md:grid-cols-2 gap-3 mt-2">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="Sender Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Pickup Warehouse"
              className="input input-bordered w-full"
            />

            {/* Row 2 */}
            <input
              type="text"
              placeholder="Sender Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="input input-bordered w-full"
            />

            {/* Row 3 (Full width) */}
            <input
              type="text"
              placeholder="Your Region"
              className="input input-bordered w-full md:col-span-2"
            />

            {/* Row 4 (Full width) */}
            <textarea
              placeholder="Sender Instruction"
              className="textarea textarea-bordered w-full md:col-span-2"
            ></textarea>
          </div>
        </fieldset>

        {/* Receiver Details */}
        <fieldset className="border p-4 rounded-xl">
          <legend className="font-semibold px-2">Receiver Details</legend>

          <div className="grid md:grid-cols-2 gap-3 mt-2">
            {/* Row 1 */}
            <input
              type="text"
              placeholder="Receiver Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Receiver Warehouse"
              className="input input-bordered w-full"
            />

            {/* Row 2 */}
            <input
              type="text"
              placeholder="Receiver Address"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="input input-bordered w-full"
            />

            {/* Row 3 (Full width) */}
            <input
              type="text"
              placeholder="Receiver Region"
              className="input input-bordered w-full md:col-span-2"
            />

            {/* Row 4 (Full width) */}
            <textarea
              placeholder="Receiver Instruction"
              className="textarea textarea-bordered w-full md:col-span-2"
            ></textarea>
          </div>
        </fieldset>
      </div>

      {/* Button */}
      <div className="mt-8">
        <button className="btn btn-primary text-start">
          Proceed to Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SendParcel;
