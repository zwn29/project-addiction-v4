import {
  collection,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import NavbarRE from '../components/NavbarRE';
import Results from '../components/Results';
import { db } from '../firebase';
// import { jsonEval } from '@firebase/util';

export default function Home({ stylesheet }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, []);

  return (
    <div>
      <Head>
        <title>wild-fantacies</title>
        <meta name="description" content="wild-fantacies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavbarRE />
        <Nav />
        {/* <VideoResults posts={posts} /> */}
        {/* <Results queryObj={queryObj} /> */}
        <Results posts={posts} />
        {/* <Results queryData={queryData} /> */}
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
