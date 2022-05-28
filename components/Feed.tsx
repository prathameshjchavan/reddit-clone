import React from 'react'
import { GET_ALL_POSTS } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import Post from './Post'

function Feed() {
  const { data, error } = useQuery(GET_ALL_POSTS)

  const posts: Post[] = data?.getPostList

  return (
    <div className="mt-4 space-y-4">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Feed