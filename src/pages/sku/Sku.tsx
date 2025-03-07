import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import "./Sku.css"
import { useCallback, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { skuRowData, skuColData} from '../../mocks';
import {skuRowDataType, skuColType } from '../../types';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { generateShortId } from '../../utils/helpers';
import EditModal from '../../components/editModal/EditModal';
import { HTMLInputTypeAttribute } from 'react';
import { Table } from '../../utils/constants';

const skuFields: { key: keyof skuRowDataType; label: string; type: HTMLInputTypeAttribute}[] = [
  { key: 'label', label: 'SKU', type: 'text' },
  { key: 'price', label: 'Price', type: 'number' },
  { key: 'cost', label: 'Cost', type: 'number' }
]

const Sku = () => {
  const [rowData, setRowData] = useState<skuRowDataType[]>([...skuRowData])
  const [rowSelected, setRowSelected] = useState<skuRowDataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const actionColumn:ColDef<skuRowDataType> = {
    headerName: "",
    width:150,
    cellRenderer: (params:RowClickedEvent)=>(
      <>
        <button onClick={()=> handleDeleteRow(params.data)} className='action-btn'> <RiDeleteBin6Line /> </button>
        <button onClick={()=> handleModal(params.data)} className='action-btn'> <MdOutlineEdit /> </button>
      </>
    )
  }

  const colDefs: skuColType[] = [actionColumn ,
    ...skuColData.map(col => 
    (col.field === "price" || col.field === "cost") 
     ? {...col, valueFormatter:(params:any) => `$${params.value.toFixed(1)}`}
     :col
    )
  ]

  const closeModal = () => {
    setIsModalOpen(false)
    setRowSelected(null)
  }

  const handleModal = useCallback((row:skuRowDataType | null)=>{
    setRowSelected(row)
    setIsModalOpen(true)
  },[])
  
  const handleDeleteRow = useCallback((row:skuRowDataType)=>{
    setRowData((prev)=> prev.filter((item) => item.id !== row.id))
  },[])

  const handleSave = (updatedRow:skuRowDataType)=>{
    if(rowSelected){
      setRowData((prev)=>prev.map((item)=>(item.id === updatedRow.id ? updatedRow : item)))
    } else {
      updatedRow.id = generateShortId()
      // key-value consistancy, so i will add by default key and value that not on form
      updatedRow.class = ""
      updatedRow.department = "" 
      setRowData((prev) => [...prev, {...updatedRow}])
    }
  }

  return (
      <>
        <div className='ag-theme-alpine' style={{height:Table.height, width:Table.width}}>
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            rowHeight={Table.rowHeigth}
            headerHeight={Table.headerHeight}
            className='ag-theme-alpine'
            theme='legacy'
            />
          <button className='add-store-btn' onClick={()=> handleModal(null)}>New SKU</button>
        </div>
        {/* modal */}
        <EditModal
          isOpen={isModalOpen}
          onClose={closeModal}
          rowData={rowSelected}
          onSave={handleSave}
          fields={skuFields}
        />
      </>
    )
}

export default Sku