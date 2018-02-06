
const addressToString = (a) => {
    return a.buildingNumber + ' ' + a.street + ' ' + a.suburb + ' ' + a.state + ' ' + a.postcode
}

const homes = async (req, res, next) => {
    try {

        if (req.body.payload) {
            let properties = []

            req.body.payload.forEach(h => {
                if (h.type === 'htv' && h.workflow === 'completed') {
                    properties.push({
                        concataddress: addressToString(h.address),
                        type: h.type,
                        workflow: h.workflow
                    })
                }
            })
            return res.json({ response: properties })
        }

        return res.status(400).json({
            error: 'Could not decode request: JSON parsing failed'
        })
    }
    catch (e) {
        console.log('Request Error => ', e)
        return res.status(400).json({
            error: 'Could not decode request: JSON parsing failed'
        })
    }
}

export const MainController = { homes }
