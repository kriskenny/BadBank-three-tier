function Login() {
    const ctx = React.useContext(UserContext); 

    function loginUser() {
        console.log('No login functionality at this time');
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