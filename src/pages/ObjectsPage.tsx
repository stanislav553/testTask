import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import {useSearchDevicesQuery} from '../store/requsers/request.api'
import Delete from '../components/UI/Delete'
import AddDevices from '../components/UI/AddDevices'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {devices} from '../store/reducers/devicesReducer'
import {useDispatch} from 'react-redux'
import {Result} from '../components/Interfaces'

export default function ObjectsPage() {
  const dispatch = useDispatch()
  const {isLoading, data, error} = useSearchDevicesQuery('')
  const devicesSelector = useSelector(
    (state: typeof data) => state.devicesReducer.devices
  )

  useEffect(() => {
    if (data) {
      dispatch(devices(data))
    }
  }, [data])

  if (isLoading) return <CircularProgress />
  if (error) {
    return (
      <div className="text-red-700 text-center text-7xl">
        ERROR...PLEASE RENEW THE PAGE{' '}
      </div>
    )
  }

  return (
    <>
      <TableContainer component={Paper} className="mb-[100px]">
        <Table sx={{minWidth: 650}} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell className="text-blue-600 text-2xl">id</TableCell>
              <TableCell align="center">name</TableCell>
              <TableCell align="center">lastUpdate</TableCell>
              <TableCell align="center">status</TableCell>
              <TableCell align="center">positionId</TableCell>
              <TableCell align="center">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {devicesSelector?.map((data: Result, index: number) => {
              if (data.id) {
                return (
                  <TableRow key={data.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.id}</TableCell>
                    <TableCell align="center">{data.name}</TableCell>
                    <TableCell align="center">{data.lastUpdate}</TableCell>
                    <TableCell align="center">{data.status}</TableCell>
                    <TableCell align="center">{data.positionId}</TableCell>
                    <TableCell align="center">
                      <Delete id={data.id} />
                    </TableCell>
                  </TableRow>
                )
              } else {
                return ''
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddDevices />
    </>
  )
}
