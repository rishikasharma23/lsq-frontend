import React from 'react';
import { useParams } from 'react-router-dom';

const LeadDetails = () => {
    const {id} = useParams();

  return (
    <>
    <div>LeadDetails for {id}</div>
    <div></div>
    </>
  )
}
export default LeadDetails