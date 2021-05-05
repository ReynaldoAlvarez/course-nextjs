import Head from 'next/head'
import ArticlesList from '../components/ArticleList/ArticleList'

export default function Home({articles}) {
  //console.log(articles)
  return (
    <div>
      <Head>
        <title>Cursos Biblicos OnLine</title>
        <meta name="keywords" content="cursos biblicos, estudios biblicos, eventos biblicos, misiones, apoyo a misioneros, maestria en teologia, teologia biblica cristiana, bautisas, salvacion, Jesús, cruz, Cristo, nuevo Testamento"/>
      </Head>
      <ArticlesList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async()=>{
const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=6`)
const articles = await res.json()
  return {
    props:{
      articles
    }
  }
    
  
}
