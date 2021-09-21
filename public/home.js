function Home() {
    function testHandle() {
        console.log("It works!");
    }
    
    return (
        <Card
            bgcolor="primary"
            header="Home"
            status=""
            text="Welcome to the Bank!"
            body="Here at BankBad Inc., we pride ourselves on offering the best banking services with minimal security since 2021"
            status={<button type="submit" className="btn btn-light" onClick={testHandle}>TEST</button>}
        />
    )
}