function Albums({ data }) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  return {
    props: { data },
  };
}
