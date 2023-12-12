import {Button} from '@mui/material'
import {useDeleteDeviceMutation} from '../../store/requsers/request.api'
import {useEffect} from 'react'

interface IDeleteProps {
  id: number
}

export default function Delete({id}: IDeleteProps) {
  const [trigger, {status}] = useDeleteDeviceMutation()

  useEffect(() => {
    console.log(status)
  }, [status])

  const deleteObj = (event: React.MouseEvent<HTMLButtonElement>) => {
    trigger(Number(event.currentTarget.id))
  }

  return (
    <Button id={id.toString()} variant="text" onClick={deleteObj}>
      Удалить
    </Button>
  )
}
