import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import {TextField} from '@mui/material'
import {useEffect, useState} from 'react'
import {useAddDeviceMutation} from '../../store/requsers/request.api'
import {MyData} from '../Interfaces'

export default function AddDevices() {
  const [valueId, setValueId] = useState('')
  const [valueName, setValueName] = useState('')
  const [valueStatus, setValueStatus] = useState('')

  const dataParams: MyData = {
    id: +valueId,
    name: valueName,
    uniqueId: '756454897',
    status: valueStatus,
    disabled: false,
    lastUpdate: new Date().toISOString(),
    positionId: 54654465,
    groupId: 0,
    phone: 'null',
    model: 'null',
    contact: 'null',
    category: 'null',
    attributes: {}
  }

  const [addData, {status, error}] = useAddDeviceMutation()
  const [add, setAdd] = useState(false)

  useEffect(() => {
    if (error && status === 'rejected') {
      setAdd(true)
    }
  }, [status, error])

  const handleChange = async () => {
    if (valueId.length && valueName.length && valueStatus.length) {
      await addData(dataParams)
    } else {
      alert('не все данные заполнены, пожалуйста заполните данные')
    }
  }

  if (add) {
    console.log('Обновите страницу и повторите запрос')
    setAdd(false)
  }

  return (
    <>
      <TextField
        id="outlined-basic"
        label="id"
        variant="outlined"
        size="small"
        value={valueId}
        onChange={e => {
          setValueId(e.target.value)
        }}
      />
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        size="small"
        value={valueName}
        onChange={e => {
          setValueName(e.target.value)
        }}
      />
      <TextField
        id="outlined-basic"
        label="status"
        variant="outlined"
        size="small"
        value={valueStatus}
        onChange={e => {
          setValueStatus(e.target.value)
        }}
      />

      <Button variant="contained" endIcon={<SendIcon />} onClick={handleChange}>
        Add Device
      </Button>
    </>
  )
}
