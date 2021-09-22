function NavBar(){
    const ctx = React.useContext(UserContext); 
    const [logged, setLogged]     = React.useState('');
    const [show, setShow]     = React.useState(true);

    function login() {
      console.log('Logged in!');
      setLogged(ctx.email);
      ctx.user = ctx.email;
      console.log(ctx.user);
      setShow(false);
    }

    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Bad Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
{/*             <li className="nav-item">
              <a className="nav-link" href="#/login/">Login</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>          
          </ul>
          <span className="navbar-text">
            {logged}
          </span>
        </div>
      </nav>

      <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Log in to account</h4>
          <span className="text-muted">
            <br/>
            <>
            {show ? 
            <>
            <CardForm setShow={setShow} showName="none" showAmount="none"/>
            {<button type="submit" className="btn btn-light" onClick={login}>Login</button>}
            </>
            : 
            <LoggedIn setShow={setShow} setLogged={setLogged}/>}
            </>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      </div>
    </>
  
    );
}

function LoggedIn(props) {
  return (
      <>    
      <h5>You are logged in!</h5><br/>
      <button type="submit" 
          className="btn btn-light" 
          onClick={() => {props.setShow(true); props.setLogged('')}}>Logout</button>
      </>
  )
}