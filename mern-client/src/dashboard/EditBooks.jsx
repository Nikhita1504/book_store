import React, { useState } from 'react';

import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

import { useLoaderData, useParams } from 'react-router-dom'

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"

  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  }
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, category, bookPDFURL, imageURL, bookDescription
    }
    // console.log(bookObj);

    //send data to database

    fetch(`http://localhost:3000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",

      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book is Updated Sucessfully!!!")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Edit the Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" type="text" placeholder="Book name" defaultValue={bookTitle} required />
          </div>



          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" placeholder="Author name" defaultValue={authorName} required />
          </div>

        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" type="text" placeholder="Book Image URL" defaultValue={imageURL} required />
          </div>




          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select name="categoryName" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="bookDescription" />
          </div>

          <Textarea id="bookDescription" name="bookDescription" defaultValue={bookDescription} placeholder="Describe ur book..." required rows={4} className='w-full' />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="book pdf url" defaultValue={bookPDFURL} required />
        </div>
        <div>
          <div className="mb-2 block">
            {/* <Label htmlFor="password1" value="Your password" /> */}
          </div>
          {/* <TextInput id="password1" type="password" required /> */}
        </div>
        <Button type="submit">Update Book</Button>
 </form>
    </div>
  )

}

export default EditBooks
