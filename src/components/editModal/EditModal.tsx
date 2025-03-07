import React, { useEffect, useState } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import "./EditModal.css";

interface EditModalProps<T> {
    isOpen: boolean;
    onClose: () => void;
    rowData: T | null;
    onSave: (updatedData:T) => void;
    fields: {key: keyof T; label:string; type:HTMLInputTypeAttribute}[]
}

const EditModal = <T extends Record<string,any>>({
    isOpen, 
    onClose, 
    rowData, 
    onSave,
    fields
}: EditModalProps<T>) => {
    const [formData, setFormData] = useState<T | null>(null)
    
    useEffect(()=>{
      setFormData(rowData || ({} as T))
    },[rowData])

    if(!isOpen || !formData) return null
    
    const handleSave = ()=> {
        onSave(formData)
        setFormData({} as T)
        onClose()
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value, type} = e.target;

        setFormData((prev)=>({
            ...prev!,
            [name]: type === 'number' ? (value === "" ? 0 : parseFloat(value))  : value
        }))
    }

    return (
        <div className='modal-screen'>
            <div className='modal-content'>
                <h2>Edit Store</h2>
                {
                    fields.map(({key, label, type})=>(
                        <input
                            key={key as string}
                            type={type}
                            name={key as string}
                            value={formData[key]}
                            onChange={handleChange}
                            placeholder={label}
                            required
                        />
                    ))
                }
                <div className='modal-actions'>
                    <button className='save-btn' onClick={handleSave}>Save</button>
                    <button className='cancel-btn' onClick={onClose}>Cancel</button>
                </div>

            </div>
        </div>
    )
} 

export default EditModal