import React, { Suspense,  } from 'react';
import Book from './Book';


const Books = ({data}) => {
//    const [allBooks, setAllBooks] = useState([]);
   
    //    useEffect (()=>{
    //        fetch('bookData.json')
    //        .then(res => res.json())
    //        .then ( data => {
    //            setAllBooks(data)
    //        })
    //    }, [])
//    console.log(data)
       
       return (
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto my-20'>
               
               
               <Suspense fallback={<span>Loading................</span>}>
               {
                data.map((singleBook) =><Book singleBook={singleBook} key={singleBook.bookId}> </Book>
                  
                )
               }

               </Suspense>
           </div>
       );
};

export default Books;