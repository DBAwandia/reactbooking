import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './Users.css'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import {userColumns,userRows} from './DataTables'
// import useFetch from './useFetch'
import {Link} from 'react-router-dom'
function Users() {
  // const [data, setData] = useState(userRows)
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  //useFetch
  const [list, setList] = useState([])
  const [lists, setLists] = useState([])

  // const {data, loading,error} = useFetch(`http://localhost:5000/userr/${path}`)
  
  
  //useFetch
  const obj =`http://localhost:5000/userr/${path}`
  const fetchData = async(obj) =>{
    try{
      const res = await axios.get(obj)
      setList(res.data)
    }catch(err){}

  }
  fetchData(obj)
  //item id
  const idss = list?.map(itemss=>itemss._id)

  useEffect(()=>{
    setLists(list)
  },[list])
  const handleDelete = async(uid)=>{
    // const id = list?.map(items=>items._id)
    try{
      await axios.delete(`http://localhost:5000/userr/${path}/${uid}`)
      setLists(lists.filter((item=> item._id !== uid)))

    }catch(err){}
  }
  console.log(lists)
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params)=>{
        return(
          <div className='cellAction'>
            <Link style={{textDecoration: "none"}}  to ={`{/${path}/${params.row._id}}`} >
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton' onClick ={()=>handleDelete(params.row._id)}>Delete</div>

          </div>
        )
      }
    }
  ]
  return (
    <div className='users'>
      <Navbar/>
      <div className='userContainer'>
       <div className='userrContainer'>
          <Sidebar />
        </div>
          <div style={{ height: 540,padding: 25, width: '100%' }} className='usersrContainer'>
            <div style={{border: "1px solid gray", padding: "15px"}}>
            
            <Link style={{textDecoration: "none"}}  to ={`/${path}/new`}>
              <p>Add new user</p>
            </Link>
            </div>
            <DataGrid
              rows={lists}
              columns={userColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
              checkboxSelection
              className='dataGrid'
              getRowId={(row)=> row._id}
            />
        </div>
      </div>
    </div>
  )
}

export default Users