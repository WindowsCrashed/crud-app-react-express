import { ActionButtons } from '../../components'
import cleanUpDataFromApi from '../clean-up-data-from-api'

export default function mapDataToTableRow(data) {    
    if (!data) return
    const mappedData = cleanUpDataFromApi(data)   
    return mappedData.map(value => [ ...Object.values(value), <ActionButtons id={value._id}/> ])
}