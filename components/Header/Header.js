import headerStyles from '../../styles/Header.module.css'
const Header = () => {
    const x = 5
    return (
       <div>
           <h1 className={headerStyles.title}>
               <span>EstudiosBiblicos</span>En Linea
           </h1>
           <p className={headerStyles.description}>

           </p>
           {/*  <style jsx>
                {`
                .title {
                    color: ${x > 3 ? 'blue' : 'red'} ;
                }
                `}
            </style> */}
       </div>
       
    )
}

export default Header
