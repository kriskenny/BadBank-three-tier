function Balance() {
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
  
    return (
        <Card
            bgcolor="info"
            header="Balance"
            text=""
            status=""
            body={
                <CardForm
                    showName="none"
                    showPassword="none"
                    showAmount="none"
                    buttonType="submit"
                    buttonName="Show Balance"                
                />
            }
        />
    )
}