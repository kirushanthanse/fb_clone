"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

function Cover_page() {
    const router = useRouter();
    return (
        

        <div className="main ">
            <style>{'body { background-color: rgba(199, 242, 247, 0.512); }'}</style>
            
                <img src='https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='cover-pic' ></img>
                
        
            <div className="footer d-flex justify-content-center py-2">
                <ul className="nav nav-pills" >
                    <li className="nav-item nav-link pointer" onClick={() => router.push('/profile/posts')}> Posts</li>
                    <li className="nav-item nav-link pointer" onClick={() => router.push('/profile/albums')} > Albums</li>
                    <li className="nav-item nav-link pointer" onClick={() => router.push('/profile/photos')}> Photos</li>

                </ul>
            </div>
            <div>
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className='profile_pic' />
                    <h3 className='profile-name'>Priya Sweety</h3>
                    <h6 className='followers'>2.5k Followers</h6>
                </div>
        </div>
    

    )
}

export default Cover_page