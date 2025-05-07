import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {

    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(( book) => book.bookId === bookId)
    const {image, bookName, author}= singleBook;
    

    // console.log(  singleBook)

    const handleMarkAsRead =(id)=>{

        addToStoredDB(id)
    }
    return (
        <div className='p-4 bg-slate-200'>
           <figure className='mb-5'>
            <img className='w-40' src={image} alt="" />
           </figure>
           <h1 className='font-semibold'>{bookName}</h1>
           <p>{author}</p>
           <div>
            <button onClick={()=>handleMarkAsRead(id)} className='btn bg-amber-100 mr-4'> Mark As Read</button>
            <button className='btn bg-green-200'> Add to wishList</button>
           </div>
        </div>
    );
};

export default BookDetails;