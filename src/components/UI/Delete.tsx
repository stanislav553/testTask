import {Button} from '@mui/material'
import {useDeleteDeviceMutation} from '../../store/requsers/request.api'
import {IDeleteProps} from '../Interfaces'
import {useEffect, useState} from 'react'

export default function Delete({id}: IDeleteProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [trigger, {error, status}] = useDeleteDeviceMutation()

  const deleteObj = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await trigger(Number(event.currentTarget.id))
  }

  useEffect(() => {
    if (!!error && status === 'rejected') setIsOpen(true)
  }, [error, status])

  if (isOpen) {
    console.log(
      'Ошибка удаления данных...Смотреть в консоль для более точной информации'
    )
    setIsOpen(false)
  }
  return (
    <>
      <Button id={id.toString()} variant="text" onClick={deleteObj}>
        Удалить
      </Button>
    </>
  )
}
