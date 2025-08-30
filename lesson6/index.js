const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
    // EXERCISE 1
    // <>
    //     <p>This is inside root.js</p>
    //     <p>Welcome messages</p>
    //     <ul>
    //         <li>Welcome Tom from Singapore</li>
    //         <li>Welcome Jerry from USA</li>
    //     </ul>
    // </>

    // App() // normal function call

    <App /> // JSX syntax --> passing in main component within the render
)

function App() {
    return (
        <>
            {/* <Header />  app calls this component 
            <p>This is my app</p>
            <Footer /> */}
            <WelcomeMessage />
        </>
    )
}

function Header() {
    return <header>Header Content</header>
}

function Footer() {
    return <footer>Footer Content</footer>;
}

function WelcomeMessage() {
    return (
        <>
            <p>Welcome messages</p>
            <ul>
                {/* EXERCISE 2 */}
                {/* <li>Welcome Tom from Singapore</li>
                <li>Welcome Jerry from USA</li> */}
                <UserInfo name="Tom" country="Singapore"/>
                <UserInfo name="Jerry" country="USA"/>
            </ul>
        </>
    )
}

function UserInfo(props) {
    return (
        <li>Welcome {props.name} from {props.country}</li>
    )
}