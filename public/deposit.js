function Deposit() {
    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            text=""
            status=""
            body={
                <CardForm
                    showName="none"
                    showPassword="none"
                    buttonType="submit"
                    buttonName="Deposit"  
                />
            }
        />
    )
}