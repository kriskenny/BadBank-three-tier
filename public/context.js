const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){

    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>  
      </div>      
    );    
}
  
function CardForm(props) {
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [amount, setAmount]     = React.useState(0);
//    const ctx = React.useContext(UserContext);  

/*     function handle(){
      const user = ctx.users.find(element => element.email === email);
      if (props.buttonName==="Deposit") {
        user.balance = parseInt(user.balance) + parseInt(amount);
        console.log(JSON.stringify(user));
      }
      if (props.buttonName==="Withdraw") {
        user.balance = parseInt(user.balance) - parseInt(amount);
        console.log(JSON.stringify(user));
      }
      if (props.buttonName==="Create Account") {
        ctx.users.push({name,email,password,balance:0});
        console.log(name,email,password,0);
      }
      
    }   */

    function handle() {
      console.log(name,email,password);
      const url = `/account/create/${name}/${email}/${password}`;
      (async () => {
          var res = await fetch(url);
          var data = await res.json();
          console.log(data);
      })();
//      props.setShow(false);
    }

    return (
      <>
      <div className="name-field" style={{display: props.showName}}>
        Name<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter name" 
          value={name} 
          onChange={e => setName(e.currentTarget.value)} /><br/>
      </div>

      <div className="email-field" style={{display: props.showEmail}}>
        Email address<br/>
        <input type="input" 
          className="form-control" 
          placeholder="Enter email" 
          value={email} 
          onChange={e => setEmail(e.currentTarget.value)}/><br/>
      </div>

      <div className="password-field" style={{display: props.showPassword}}>
        Password<br/>
        <input type="password" 
          className="form-control" 
          placeholder="Enter password" 
          value={password} 
          onChange={e => setPassword(e.currentTarget.value)}/><br/>
      </div>

      <div className="amount-field" style={{display: props.showAmount}}>
        Amount<br/>
        <input type="number" 
          className="form-control" 
          placeholder="Enter amount" 
          value={amount} 
          onChange={e => setAmount(e.currentTarget.value)}/><br/>
      </div>
      
      <div className="submit-field" style={{display: props.showButton}}>
        <button type={props.buttonType} 
          className="btn btn-light"
          onClick={handle}>{props.buttonName}</button>
      </div>
      </>
    )
}