import {Button} from '@mui/material'
import {useDeleteDeviceMutation} from '../../store/requsers/request.api'

interface IDeleteProps {
  id: number
}

export default function Delete({id}: IDeleteProps) {
  const [trigger, {status}] = useDeleteDeviceMutation()

  const deleteObj = (event: React.MouseEvent<HTMLButtonElement>) => {
    trigger(Number(event.currentTarget.id))
    console.log(status)
  }

  return (
    <Button id={id.toString()} variant="text" onClick={deleteObj}>
      Удалить
    </Button>
  )
}
