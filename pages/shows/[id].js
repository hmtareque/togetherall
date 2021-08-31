import { ShowInfo } from '../../components/ShowInfo.js'


export default function Show({ show }) {
 

  return (
    <>
   <ShowInfo show={show} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${context.params.id}?embed=cast`
  );
  const show = await res.json();

  if (!show) {
    return {
      notFound: true,
    };
  }

  return {
    props: { show },
  };
};
