
type ButtonPaginationProps = {
    is_active:boolean
    type:string
    value:number
}
function ButtonPagination({is_active,type='number',value  }:ButtonPaginationProps) { 
  return (
    <a href="" className={(is_active?'bg-red':'bg-gray') +" rounded-full border p-2 bg-gray w-fit hover-bg-green"}>
      <span>{type =='number'?value:'icon'}</span>
    </a>
  )
}

export default ButtonPagination
