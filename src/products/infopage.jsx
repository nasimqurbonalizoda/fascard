import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProductById } from '../reducers/product'

const Infopage = () => {

    const { id } = useParams()

  const dataByid = useSelector((state)=>state.ProductSlice2.product)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProductById(id))
  },[dispatch])

  return (
    <div>
      <p>{dataByid?.productName}</p>
      <p>{dataByid?.description}</p>
      <p>{dataByid?.quantity}</p>
      <p>{dataByid?.price}</p>
      <p>{dataByid?.hasDiscount}</p>
      <p>{dataByid?.discountPrice}</p>
      <p>{dataByid?.subCategoryId}</p>
      {dataByid?.images?.map((elem)=>{
        return (
            <img key={elem.id} src={`http://37.27.29.18:8002/images/${elem.images}`} style={{color:"200px",height:"200px"}} alt="" />
        )
      })}

      <button  className='cursor-pointer bg-amber-600 text-amber-50 px-5 rounded-2xl' onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Infopage
