import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import "./Store.css"
import { AgGridReact } from 'ag-grid-react';
import { useCallback, useState } from 'react';
import { storeRowData, storeColData } from '../../mocks';
import { storeRowDataType, storeColType } from '../../types';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { MdOutlineEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import EditModal from '../../components/editModal/EditModal';
import { generateShortId } from '../../utils/helpers';
import { Table } from '../../utils/constants';

const storeFields: { key: keyof storeRowDataType; label: string; type: string }[] = [
  { key: "label", label: "Store", type: "text" },
  { key: "city", label: "City", type: "text" },
  { key: "state", label: "State", type: "text" },
]

const Store = () => {
  const [rowData, setRowData] = useState<storeRowDataType[]>([...storeRowData])
  const [rowSelected, setRowSelected] = useState<storeRowDataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const actionColumn:ColDef<storeRowDataType> = {
    headerName: "",
    width:150,
    cellRenderer: (params:RowClickedEvent)=>(
      <>
        <button onClick={()=> handleDeleteRow(params.data)} className='action-btn'> <RiDeleteBin6Line /> </button>
        <button onClick={()=> handleModal(params.data)} className='action-btn'> <MdOutlineEdit /> </button>
      </>
    )
  }

  const colDefs: storeColType[] = [actionColumn ,...storeColData]

  const closeModal = () => {
    setIsModalOpen(false)
    setRowSelected(null)
  }

  const handleModal = useCallback((row:storeRowDataType | null)=>{
    setRowSelected(row)
    setIsModalOpen(true)
  },[])
  
  const handleDeleteRow = useCallback((row:storeRowDataType)=>{
    setRowData((prev)=> prev.filter((item) => item.id !== row.id))
  },[])

  const handleSave = (updatedRow:storeRowDataType)=>{
    if(rowSelected){
      setRowData((prev)=>prev.map((item)=>(item.id === updatedRow.id ? updatedRow : item)))
    } else {
      updatedRow.id = generateShortId()
      const lastItem = rowData[rowData.length -1] ??  updatedRow
      setRowData((prev) => [...prev, {...updatedRow, seqNo: lastItem.seqNo + 1}])
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
        <button className='add-store-btn' onClick={()=> handleModal(null)}>New Store</button>
      </div>
      {/* modal */}
      <EditModal
        isOpen={isModalOpen}
        onClose={closeModal}
        rowData={rowSelected}
        onSave={handleSave}
        fields={storeFields}
      />
    </>
  )
}

export default Store