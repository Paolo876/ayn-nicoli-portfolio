import React from 'react'
import { useParams } from 'react-router'
import PageContainer from '../../components/UI/PageContainer';
import Navbar from '../../components/UI/Navbar';
import PostContent from './PostContent';

const Post = () => {
  const { id } = useParams();

  return (
    <PageContainer>
      
      {/* Navbar */}
      <Navbar/>

      {/* content */}
      <PostContent/>
    </PageContainer>

  )
}

export default Post