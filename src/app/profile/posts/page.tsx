"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

interface pType {
    id: number,
    title: string,
    body: string
}

interface cmtType {
    id: number,
    name: string,
    email: string,
    body: string
}

function page() {

    const [posts, setPosts] = useState([] as pType[]);

    const [comment, setComment] = useState([] as cmtType[])

// print 1st 10 posts
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10');
            const resposeData = await response.json();
            console.log(resposeData);
            setPosts(resposeData);

        }
        getData();
    }, [])

  // get comment by id
        const getCmtData = async (id:number) => {
            const cmtResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const cmtResponseData = await cmtResponse.json();
            //console.log(cmtResponseData);
            setComment(cmtResponseData);
        }
       
      

//get post by page number
    const pagePost = async (currentPage: number) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`);
        const data = await res.json();
        console.log("Data is"+data);
        
        return data;
    };

    //pagination click function
    const handlePageClick = async (data: any) => {
        console.log("data.selected"+data.selected);

        var currentPage = data.selected + 1;
        //console.log("current page is:" + currentPage);
        const commentsFormServer = await pagePost(currentPage);

        setPosts(commentsFormServer);
        console.log("commentsFormServer"+commentsFormServer);
        
    
    };

    // get post id by clicking div  and pass id para to getCmtData function
   




    return (
        <div>
            <div className='container border px-5 pb-5' style={{position:'relative', width:'70%'}}>
            <h4 className='text-center mt-2'>All Posts</h4>
                {posts.map((obj: pType, index) => (
                   
                    <Popup trigger={
                        <div className=' pointer row border rounded overflow-hidden mt-2 shadow-sm'  >
                            <h2 className='capitalize' onClick={() => {getCmtData(obj.id)}}>{obj.title}</h2>
                            <p className='capitalize'>{obj.body}</p>
                         
                        </div>
                    } modal>
                        <div>
                            {comment.map((cmt: cmtType, index) => (
                                <div className='px-1 py-1 my-1 border rounded'>
                                    <h6> Name: {cmt.name}</h6>
                                    <h6> Email: {cmt.email}</h6>
                                    <p> Comments: {cmt.body}</p>
                                </div>
                            ))}

                        </div>
                    </Popup>
                   
                ))}
            </div>
            
            <div className='container' style={{marginTop:50}} >
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel="..."
                    pageCount={10}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}

                    //for styling
                    containerClassName='pagination justify-content-center'
                    pageClassName='page-item'
                    pageLinkClassName='page-link'
                    previousClassName='page-item'
                    previousLinkClassName='page-link'
                    nextClassName='page-item'
                    nextLinkClassName='page-link'
                    breakClassName='page-item'
                    breakLinkClassName='page-link'
                    activeClassName='active'

                />
            </div>
        </div>
    )
}

export default page