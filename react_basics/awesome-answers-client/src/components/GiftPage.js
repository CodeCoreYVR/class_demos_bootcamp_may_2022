import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import GiftForm from './GiftForm'

const stripePromise = loadStripe('pk_test_51LZdCRC8F8tuRxQ8R3zRiretw4DVHplXVohSh2QVGHoGGoJCgactHjMIPV4Gupwpwnw3Q07NYixW7cchEKNHwxjs00wVIopF6E')

function GiftPage(props) {
  return(
        <Elements stripe={stripePromise}>
          <GiftForm answer_id={props.match.params.id} />
        </Elements>
  )
}

export default GiftPage