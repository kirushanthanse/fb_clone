"use client"
import React from 'react'
import coverpic from '../../../public/coverpic.jpg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



function page() {
    const router = useRouter();
   
    return (<></>
        // <div className='home'>
        // <style>{'body { background-color: rgba(199, 242, 247, 0.512); }'}</style>

        //    {/* <div className="heade_bar">
        //         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start py-2 px-5">
        //             <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
        //                 <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        //             </a>

        //             <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        //                 <li><a href="#" className="nav-link px-2 link text-white">Home</a></li>
        //                 <li><a href="#" className="nav-link px-2 link text-white">Find Friends</a></li>
        //                 <li><a href="#" className="nav-link px-2 link text-white">Notifications</a></li>
        //             </ul>

        //             <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        //                 <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        //             </form>

        //             <div className="dropdown text-end">
        //                 <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        //                     <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="mdo" width="32" height="32" className="rounded-circle" />
        //                 </a>
        //                 <ul className="dropdown-menu text-small">
        //                     <li><a className="dropdown-item" href="#">New project...</a></li>
        //                     <li><a className="dropdown-item" href="#">Settings</a></li>
        //                     <li><a className="dropdown-item" href="#">Profile</a></li>
        //                     <li><hr className="dropdown-divider" /></li>
        //                     <li><a className="dropdown-item" href="#">Sign out</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div> */}

        //     <div className=' cover_pic'>

        //         <div>
        //             <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='profile_pic' />
        //             <h3 className='profile-name'>Maaddu Ravi</h3>
        //             <h6 className='followers'>2.5k Followers</h6>
        //         </div>

        //         <div className="footer">
        //             <header className="d-flex justify-content-center py-2">
        //                 <ul className="nav nav-pills">
        //                 {/* onClick={() => router.push('/profile/posts')} */}
        //                     <li className="nav-item nav-link pointer" onClick={() => router.push('/profile/posts')}> Posts</li>
        //                     <li className="nav-item nav-link pointer"  > Albums</li>
        //                     <li className="nav-item nav-link pointer" > Photos</li>
                            
        //                 </ul>
        //             </header>
        //         </div>

        //     </div>

        // </div>
    )
}

export default page