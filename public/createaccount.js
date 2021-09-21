function CreateAccount(props){
    const ctx = React.useContext(UserContext); 

    function addUser() {
        ctx.balance = '0';
        console.log('Name: ' + ctx.name);
        console.log('Email: ' + ctx.email);
        console.log('Password: ' + ctx.password);
        console.log('Balance: ' + ctx.balance);
        const url = `/account/create/${ctx.name}/${ctx.email}/${ctx.password}/${ctx.balance}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
    }

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            text=""
            status=""
            body={
                <>
                <CardForm
                    showAmount="none"                
                />
                {<button type="submit" className="btn btn-light" onClick={addUser}>Create Account</button>}
                </>
            }
        />      
    );
}
  