function CreateAccount(props){
    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            text=""
            status=""
            body={
                <CardForm
                    showAmount="none"
                    buttonType="submit"
                    buttonName="Create Account"
                />
            }
        />      
    );
}
  