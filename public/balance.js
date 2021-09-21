function Balance() {
    const ctx = React.useContext(UserContext); 
    const [data, setData] = React.useState('');

    function fetchAccount() {
        fetch(`/account/balance/${ctx.email}`)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                setData('$' + data[0].balance);
        });
    }
  
    return (
        <Card
            bgcolor="info"
            header="Balance"
            text={data}
            status=""
            body={
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                    showAmount="none"
                    buttonType="submit"
                    buttonName="Show Balance"                
                />
                {<button type="submit" className="btn btn-light" onClick={fetchAccount}>See Balance</button>}
                </>
            }
        />
    )
}