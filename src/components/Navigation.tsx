import {Link} from 'react-router-dom'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import {InputBase, Paper} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import {useLazySearchDeviceQuery} from '../store/requsers/request.api'
import {useDispatch} from 'react-redux'
import {devices} from '../store/reducers/devicesReducer'

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const dispatch = useDispatch()
  const [searchDevise, setSearchDevice] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchDevice(e.target.value)
  }
  const [search, {data}] = useLazySearchDeviceQuery()

  const searchDeviseFunction = () => {
    if (searchDevise.trim().length) {
      search(searchDevise)
      setSearchDevice('')
    } else {
      search('')
    }
  }

  React.useEffect(() => {
    if (data !== undefined) {
      dispatch(devices([data]))
    }
    console.log([data])
  }, [data])

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {
            <>
              <div className="pr-[100px]">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    {
                      <Link className="text-2xl text-blue-700 font-bold" to="/">
                        Home
                      </Link>
                    }
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {
                      <Link
                        className="text-2xl text-blue-700 font-bold"
                        to="/objects"
                      >
                        Objects
                      </Link>
                    }
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    {
                      <Link
                        className="text-2xl text-blue-700 font-bold"
                        to="/users"
                      >
                        Users
                      </Link>
                    }
                  </MenuItem>
                </Menu>
              </div>
              <Paper
                component="form"
                onSubmit={e => {
                  e.preventDefault()
                  searchDeviseFunction()
                }}
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: 400
                }}
              >
                <InputBase
                  sx={{ml: 1, flex: 1}}
                  placeholder="Search Devise"
                  inputProps={{'aria-label': 'search google maps'}}
                  value={searchDevise}
                  onChange={handleChange}
                />
                <IconButton
                  type="button"
                  sx={{p: '10px'}}
                  aria-label="search"
                  onClick={searchDeviseFunction}
                >
                  <Link to="/objects">
                    <SearchIcon />
                  </Link>
                </IconButton>
              </Paper>
            </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}
