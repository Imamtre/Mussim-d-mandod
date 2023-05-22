import MainNavigation from "../components/MainNavigation.js"

function ErrorPage(){
    return(
        <div>
            <MainNavigation/>
            <main>
            <h1>Ooops...</h1>
            <p>Pagina nao encontrada</p>
            </main>
        </div>
    )
}
export default ErrorPage;