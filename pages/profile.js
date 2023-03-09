import NextLink from 'next/Link';
import React, { useEffect, useState } from "react"
//import { makeStorageClient } from './webs'


async function storeFiles (file) {
  const files = []
  files.push(file)
  alert(files)
  const client = makeStorageClient()
  const cid = await client.put(files)
  console.log('stored files with cid:', cid)
  return cid
}

const Upload = () => {
  const [image, setImage] = useState(null);
  
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      return alert("Please select a file to upload");
    }
    
    await storeFiles(image)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleChange} required={true} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload