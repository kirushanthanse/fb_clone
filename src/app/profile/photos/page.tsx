"use client"
import React, { useEffect, useState } from 'react'
interface photoType {
    title: string,
    url: string,
    thumbnailUrl: string
}

function page() {
    const [photo, setPhoto] = useState([] as photoType[]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_page=1');
            const data = await response.json();
            console.log(data);

            setPhoto(data);
        }
        getData();
    }, [])


    return (
        <div className='conatiner border px-5 pb-5' style={{position:'relative', width:'70%',left: '15%'}}>
            <h4 className='text-center mt-2'>All Photos</h4>
            <div className="row m-2">
                {photo.map((obj: photoType, index) => {
                    return (

                        <div key={index} className="col-sm-6 col-md-4 v my-1">
                            <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                <div className="card w-100" style={{ width: '18rem',height:'22rem' }}>
                                    <img src={`${obj.url}`} className="card-img-top" alt="Image" />
                                    <div className="card-body">
                                        <h6 className="card-title">{obj.title}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>



                    )
                }

                )

                }
            </div>
        </div>
    )
}

export default page