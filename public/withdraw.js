function Withdraw() {
    const ctx = React.useContext(UserContext); 

    function withdrawAmount() {
        ctx.balance.toString();
        const url = `/account/withdraw/${ctx.email}/${ctx.balance}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();
    }

    return (
        <Card
            bgcolor="success"
            header="Withdraw"
            text=""
            status=""
            body={
                <>
                <CardForm
                    showName="none"
                    showPassword="none"
                />
                {<button type="submit" className="btn btn-light" onClick={withdrawAmount}>Withdraw</button>}
                </>
            }
        />
    )
}