 export  const userColumns= [
  {
    field: "_id",
    headerName: "ID",
    width: 70
  },
  {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params)=>{
                return (
                    <div className='classwithimg'>
                      <img src={params.row.img || "/images/work.png"} alt='' />
                      {params.row.username}
                 </div>
                 )
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
      
    },
    {
      field: "phonenumber",
      headerName: "phone",
      width: 100,
      // renderCell: (params)=>{
      //   return(
      //     <div>
      //       <p>{params.row.phonenumber}</p>
      //     </div>
      //   )
      // }
    }
]
export const userRows = [
    {
        id: 1,
        username: 'snow',
        image: "/images/work.png",
        status: "active",
        email: "1snow@gmail.com",
        age: 35
    }    ,{
        id: 2,
        username: 'snows',
        image: "/images/work.png",
        status: "inactive",
        email: "2snow@gmail.com",
        age: 42
    }
    ,{
        id: 3,
        username: 'Ken',
        image: "/images/work.png",
        status: "active",
        email: "3snow@gmail.com",
        age: 22
    }    ,{
        id: 4,
        username: 'snowzz',
        image: "/images/work.png",
        status: "active",
        email: "4snow@gmail.com",
        age: 56
    }    ,{
        id: 5,
        username: 'snow',
        image: "/images/work.png",
        status: "pending",
        email: "5snow@gmail.com",
        age: 34
    }  
]

export const hotelColumns = [
  {
    field:"_id",
    headerName: "ID",
    width: 70
  },
  {
    field:"name",
    headerName: "NAME",
    width: 130
  }
  ,
  {
    field:"city",
    headerName: "CITY",
    width: 130
  }
  ,
  {
    field:"title",
    headerName: "TITLE",
    width: 130
  }
  ,
  {
    field:"photos",
    headerName: "PHOTO",
    width: 230,
    renderCell:(params)=>{
      return(
        <div className='classwithimg'>
          <img src={params.row.photos || "/images/work.png"} alt='' />
          <p style={{ fontSize: 16}}>{params.row.name}</p>
        </div>
      )
    }
  }

]

export const roomColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 70
  },
  {
    field: "title",
    headerName: "TITLE",
    width: 120
  }
  ,
  {
    field: "price",
    headerName: "PRICE",
    width: 100
  }
  ,
  {
    field: "maxPeople",
    headerName: "MAX-PEOPLE",
    width: 200
  }
  ,
  {
    field: "desc",
    headerName: "Desc",
    width: 220
  }
]