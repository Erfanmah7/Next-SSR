import { notFound } from "next/navigation";
import React from "react";

function AlbumDetails({ album }) {
  return (
    <div>
      <h2>AlbumDetails</h2>
      <h3>
        {album.id} - {album.userId} | {album.title}
      </h3>
    </div>
  );
}

export default AlbumDetails;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;

  console.log(query);

  const ress = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumId}`
  );
  const data = await ress.json();

  if (!data.title) {
    return {
      redirect: { destination: "/albums" },
      //   notFound:true
    };
  }

  return {
    props: { album: data },
  };
}
