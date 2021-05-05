import {useRouter} from 'next/router'
import Link from 'next/link'

function article({onearticle}) {
    /* const router = useRouter()
    const {id} = router.query */

    return (
        <>
        <h4>{onearticle.title}</h4>
        <p>{onearticle.body}</p>
        <Link href='/'>Go Back</Link>
        </>
    )
}



/* export const getServerSideProps = async(context)=>{
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const onearticle = await res.json()
    return {
        props:{
            onearticle
        }
    }

} */
export const getStaticProps = async(context)=>{
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const onearticle = await res.json()
    return {
        props:{
            onearticle
        }
    }

}

export const getStaticPaths = async()=>{
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids= articles.map(art => art.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

return{
    paths,
    fallback: false
}
}

export default article