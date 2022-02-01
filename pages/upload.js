import React from 'react';

export default function upload() {
  return (
    <div className="h-screen bg-green-600">
      <div className="flex justify-center flex-col  items-center h-screen">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="form-label inline-block mb-2 text-green-200 text-xl capitalize"
          >
            Default file input example
          </label>
          <input
            className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
     focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
            type="file"
            id="formFile"
          />
        </div>
        <div className="mb-3 w-96">
          <input
            className="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
      focus:border-blue-600 focus:outline-none mb-2"
            type="text"
            id="formCaption"
            placeholder="caption"
          />
        </div>
        <div className="mb-3 w-96">
          <input
            className="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
      focus:border-blue-600 focus:outline-none mb-2"
            type="text"
            id="formCaption"
            placeholder="video url"
          />
        </div>
        <div className="mb-3 w-96">
          <input
            className="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
      focus:border-blue-600 focus:outline-none mb-2"
            type="text"
            id="formDescription"
            placeholder="Description"
          />
        </div>
        <div className="mb-3 w-96">
          <input
            className="
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
      focus:border-green-800  focus:outline-none mb-2"
            type="text"
            id="formTags"
            placeholder="tags"
          />
        </div>
        <button className="bg-green-700 px-5 py-3  shadow-sm font-medium tracking-wider  text-green-100 rounded-full hover:shadow-2xl hover:bg-green-800">
          Submit
        </button>
      </div>
    </div>
  );
}
