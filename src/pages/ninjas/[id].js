import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const NinjaDetails = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja Details &nbsp; | &nbsp; {ninja.name}</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>{ninja.name}</h1>
        <p>
          <strong>Email:</strong>&nbsp;{ninja.email}
        </p>
        <p>
          <strong>Website:</strong>
          &nbsp;{ninja.website}
        </p>
        <p>
          <strong>Lives in:</strong>
          &nbsp;{ninja.address.city}
        </p>
      </div>
      <Link className={styles.backLink} href='/ninjas'>
        Back to listing
      </Link>
    </>
  );
};

export default NinjaDetails;
