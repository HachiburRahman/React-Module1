
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Friends from './Friends'
import Posts from './Posts.jsx';

const fetchPromise=fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json());

const fetchPosts=async()=>{
   const res= await fetch("https://jsonplaceholder.typicode.com/posts");
   return res.json();
}

function App() {
  const postsPromise=fetchPosts();

  return (
    <>
     <Batsman></Batsman>
     <Suspense fallback={<p>Posts are comming...</p>}>
      <Posts postsPromise={postsPromise}></Posts>
     </Suspense>
     <Suspense fallback={<p className='card'>Friends are comming...</p>}>
      <Friends fetchPromise={fetchPromise}></Friends>
     </Suspense>

     
    </>
  )
}

export default App
