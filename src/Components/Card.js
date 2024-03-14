import React, {useState} from 'react';
import Modal from './Modal';
const Card = ({book}) => {

    const[show, setShow]=useState(false)
    const[bookItem, setBookItem]= useState();
    
    return (
        <>
            {
                book.map((item) => {
                    let thumbnails = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                    if(thumbnails!= undefined && amount!= undefined){
                        return (
                            <>
                                <div className='card' onClick={()=>{setShow(true);setBookItem(item)}}>
                                    <img src={thumbnails} alt="" />
                                    <div className='bottom'>
                                        <h3 className='title'>{item.volumeInfo.title}</h3>
                                        <p className='amount'>&#8377;{amount}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={item} onClose={()=>setShow(false)}/>
                            </>
                        )
     

                    }
                })
            }
        </>
    )
}
export default Card;