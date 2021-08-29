function Login() {
    return (
        <Card
            bgcolor="secondary"
            header="Login"
            text=""
            status=""
            body={
                <CardForm
                    showName="none"
                    showAmount="none"
                    buttonType="submit"
                    buttonName="Login"            
                />
            }
        />
    )
}