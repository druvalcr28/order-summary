import React, { useState } from 'react'
import { Button, Collapse, Card, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { applyPromoCode } from '../../actions/orderSummary'

function OrderPromoCode(props) {
    const [open, setOpen] = useState(false);
    const [code, setCode] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [applyPromoActive, setApplyPromoActive] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(code === ''){
            setErrorMsg('Please enter a Promo Code')
            return
        }
        if(code.toUpperCase() === 'DISCOUNT'){
            props.dispatch(applyPromoCode())
            setApplyPromoActive(false)
            setErrorMsg('')
            setSuccessMsg('Promo Code Applied')
        }
        else setErrorMsg('Promo Code is invalid or expired')
    }

    return (
        <Container>
            <Button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <div className = 'buttonText'>
                    Apply Promo Code
                    {open && ' -'}
                    {!open && ' +'}
                </div>
            </Button>
            <Collapse in={open}>
                <Card style={{ width: '21rem' }}>
                    <form className = 'promoCode__form' onSubmit = {handleFormSubmit}>
                        {successMsg && <p className="form__success">* {successMsg}</p>} 
                        {errorMsg && <p className="form__error">* {errorMsg}</p>} 
                        <input className="promoCode__formCode" type="text" value={code} placeholder='Promo Code' onChange = {(e) => setCode(e.target.value)} autoFocus/>
                        <Button className="promoCode__button" type="submit" disabled = {!applyPromoActive}><div>Apply</div></Button>
                    </form>
                </Card>
            </Collapse>
        </Container>
    )
}

export default connect()(OrderPromoCode)