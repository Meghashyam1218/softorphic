import axios from 'axios';


export const load = ({ params }) => {
    var details = {}
    console.log(params)
    if (params.transactionId.charAt(0)==="T") {
        console.log("calling api")
        try {
            axios.post(`https://softorphic-backend.vercel.app/api/status/${params.transactionId}/false`).then(response => {
                // window.location.href = response.data
                console.log(response.data)
                details = response.data
                return details
            });
            // console.log(res);
        } catch (err) {
            console.log(err);
        }
    }
}

