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

export default function ObjectsPage() {
  interface Result {
    id: number
    name: string
    lastUpdate: string
    status: string
    positionId: string
    uniqueId: string
  }
  const {isLoading, isError, data} = useSearchDevicesQuery('', {
    refetchOnFocus: true
  })
  if (isLoading) return <CircularProgress />
  if (isError) {
    return (
      <div className="text-red-700 text-center text-7xl">
        ERROR...PLEASE RENEW THE PAGE{' '}
      </div>
    )
  }

  console.log(data)

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
            {data?.map((data: Result, index: number) => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddDevices />
    </>
  )
}
