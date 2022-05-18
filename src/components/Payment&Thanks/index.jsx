import { useState } from "react"
import PaymentModal from "./Payment"
import ThanksModal from "./Thanks"

const PaymentThanksModal = () => {

    const [isPayed, setIsPayed] = useState(false)

    return (
      <>
        {isPayed === false ? <PaymentModal setIsPayed={setIsPayed} /> : <ThanksModal />}
      </>

    )
}
export default PaymentThanksModal