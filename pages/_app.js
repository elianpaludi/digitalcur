import variables from '../styles/global.scss'

function MyApp({ Component, pageProps }) {
     return (
     <div bg={variables.asideBg}>
          <Component { ... pageProps}/> 
     </div>
     )
}

export default MyApp

// Responsive del Index
// Pagination del index
// Redirecciones del aside