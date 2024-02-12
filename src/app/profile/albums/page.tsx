
"use client"
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import Popup from 'reactjs-popup';

interface albumsTyp {
  id: number,
  title: string,
  userId: number
}

interface albumPhotoTyp {
  albumId: number,
  id: number,
  title: string,
  url: string
}

function page() {
  const [album, setAlbum] = useState([] as albumsTyp[]);
  const [albumPhoto, setAlbumPhoto] = useState([] as albumPhotoTyp[]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums?_page=1');
      const data = await response.json();
      console.log(data);
      setAlbum(data);
    }
    getData();

  }, [])

  const albumPage = async (currentPage: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?_page=${currentPage}`);
    const data = await res.json();
    return data;
  }

  const handlePageClick = async (data: any) => {

    console.log(data);

    var currentPage = data.selected + 1;
    const albumPerPage = await albumPage(currentPage);
    setAlbum(albumPerPage);
  }
  //---------------------------------------------------------- get album photo

  const getAlbumPhoto = async (albumId: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    const data = await res.json()
    setAlbumPhoto(data);
    console.log(data);

  }

  return (
    <>
      <div className="conatiner border px-5 pb-5" style={{ position: 'relative', width: '70%', left: '15%' }}>
        <h4 className='text-center mt-2'>All Albums</h4>
        <div className="row">
          {album.map((obj: albumsTyp, index) =>
          (

            <Popup trigger={
              <div className='row col-sm-6 col-md-4 v  my-1'>
                <div className="col mx-4">
                  <div className="card mb-4 rounded-3 shadow-sm" style={{ minHeight: 225 }}>
                    <div className="card-header py-3" style={{ minHeight: 125 }}>
                      <h6 className="my-0 fw-normal capitalize" style={{ fontSize: '12px', fontWeight: 'bold', minHeight: 30 }}>Album Title: {obj.title}</h6>
                      <h6 className="my-0 fw-normal" style={{ fontSize: '12px' }}>Album ID: {obj.id}</h6>
                    </div>
                    <div className="card-body mt-2">
                      <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => { getAlbumPhoto(obj.id) }}>View Album</button>
                    </div>
                  </div>
                </div>
              </div>
            } modal nested>
              <div>
                {
                 <div className="container" style={{ maxHeight: '600px', overflowY: 'auto',backgroundColor:'white' }}>
                 <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                     {albumPhoto.map((obj: albumPhotoTyp, index: number) => (
                         <div key={index} className="col">
                             <div className="card shadow-sm mb-3">
                                 <img src={`${obj.url}`} className="card-img-top" alt="Image" style={{ height: '10rem', objectFit: 'cover' }}/>
                                 <div className="card-body"style={{ height: '6rem' }}>
                                     <h6 className="card-title">Album ID:{obj.albumId}</h6>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
             


                }
              </div>

            </Popup>
          )


          )}
        </div>
      </div>
      <div className='container' style={{ marginTop: 50 }} >
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
    </>
  )
}

export default page