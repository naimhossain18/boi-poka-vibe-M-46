import React from 'react';
import { Link } from 'react-router';

const Book = ({singleBook}) => {

    const {bookName, author,image, bookId, category, rating, yearOfPublishing ,publisher, tags

    } = singleBook;

    // console.log(singleBook)
    return (
        
           <Link to={`/bookDetails/${bookId}`}>
           <div className="card bg-base-100  shadow-sm border rounded-2xl p-4">
  <figure className='bg-slate-100 p-4 rounded-2xl'>
    <img className='w-40 h-70'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-10 justify-center'>
        {tags.map(tag => <button className='font-semibold btn'>{tag}</button>)}
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing
      }</div>
    </h2>
    <p>{publisher
    }</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
</div></Link>
        
    );
};

export default Book;