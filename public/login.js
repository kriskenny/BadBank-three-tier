function Login() {
    const ctx = React.useContext(UserContext); 

    function loginUser() {
        console.log('Logged in!');
        ctx.user = ctx.email;
        console.log(ctx.user);
    }

    return (
        <Card
            bgcolor="secondary"
            header="Login"
            text=""
            status=""
            body={
                <>
                <CardForm
                    showName="none"
                    showAmount="none"
                    buttonType="submit"
                    buttonName="Login"            
                />                
                {<button type="submit" className="btn btn-light" onClick={loginUser}>Login</button>}
                </>
            }
        />
    )
}