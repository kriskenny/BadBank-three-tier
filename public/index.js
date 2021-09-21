function Spa() {
    return (
        <HashRouter>
        <div>
            {/*get our navbar from navbar.js*/}
            <NavBar/> 
            {/*add our shared context*/}
            <UserContext.Provider value={{name:'',email:'',password:'',balance:'0'}}>
            
            <div className="container" style={{padding: "20px"}}>
                <Route path="/" exact component={Home} />
                <Route path="/CreateAccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                {/* <Route path="/transactions/" component={Transactions} /> */}
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
            </div>
            </UserContext.Provider>
        </div>
        </HashRouter>
    ); 
}
  
// render our single page application (SPA) at HTML "root"
ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
);
  