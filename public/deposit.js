function Deposit() {
    const ctx = React.useContext(UserContext); 

    function depositAmount() {
        ctx.balance.toString();
        const url = `/account/deposit/${ctx.email}/${ctx.balance}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
    }

    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            text=""
            status=""
            body={
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                />
                {<button type="submit" className="btn btn-light" onClick={depositAmount}>Deposit</button>}
                </>
            }
        />
    )
}