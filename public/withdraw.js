function Withdraw() {
    return (
        <Card
            bgcolor="success"
            header="Withdraw"
            text=""
            status=""
            body={
                <CardForm
                    showName="none"
                    showPassword="none"
                    buttonType="submit"
                    buttonName="Submit"      
                />
            }
        />
    )
}