import React, { useEffect, useState } from 'react'
import AdminAppBody from '../../../components/admin/AdminAppBody';
import marathi from '../../../translationData/marathi.json'
import hindi from '../../../translationData/hindi.json'
import english from '../../../translationData/english.json'

const CorporatorPermissionPage = () => {
    const [items, setItems] = useState([
        { id: 1, value: "Item 1", selected: false },
        { id: 2, value: "Item 2", selected: false },
        { id: 3, value: "Item 3", selected: false },
        { id: 4, value: "Item 4", selected: false },
        { id: 5, value: "Item 5", selected: false },
        { id: 6, value: "Item 6", selected: false },
        { id: 7, value: "Item 7", selected: false },
        { id: 8, value: "Item 8", selected: false },
        { id: 9, value: "Item 9", selected: false },
        { id: 10, value: "Item 10", selected: false },
        { id: 11, value: "Item 12", selected: false },
        { id: 12, value: "Item 13", selected: false },
        { id: 13, value: "Item 14", selected: false }
    ]);

    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        const updatedItems = items.map(item => ({ ...item, selected: true }));
        setItems(updatedItems);
        setSelectAll(true);
    };

    const handleUnselectAll = () => {
        const updatedItems = items.map(item => ({ ...item, selected: false }));
        setItems(updatedItems);
        setSelectAll(false);
    };

    const handleCheckboxChange = (itemId) => {
        const updatedItems = items.map(item =>
            item.id === itemId ? { ...item, selected: !item.selected } : item
        );
        setItems(updatedItems);
        setSelectAll(updatedItems.every(item => item.selected));
      
    };
    const [content, setContent] = useState({})
    useEffect(() => {
        let lang = localStorage.getItem('language')
        if (lang === "english") {
            setContent(english)
        } else if (lang === "hindi") {
            setContent(hindi)
        } else if (lang === "marathi") {
            setContent(marathi)
        }
    })
    console.log(items);
  return (
    <AdminAppBody
    loading={false}
    heading={"Corporator Permisson Page"}
    content={
        <div className="page-body">
            <div className="container-xl">
                <div className="row ">

                    <div className="container mt-4  ">
                        <div className="mb-3">
                            <button className="btn btn-primary me-2" onClick={handleSelectAll}>Select All</button>
                            <button className="btn btn-danger me-2" onClick={handleUnselectAll}>Unselect All</button>
                        </div>
                        <div className=''>
                        <ul className=" pt-4 card list-group ">
                            <div className='row card-body '>
                            {items.map((item) => (
                                <li key={item.id} className="list-group-item  col-lg-4  ">
                                    <div className="form-check  m-1">
                                        <input
                                            className="form-check-input "
                                            type="checkbox"
                                            checked={item.selected}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                        <label className="form-check-label">
                                            {item.value}
                                        </label>
                                       
                                    </div>
                                </li>
                            ))}
                            </div>
                        </ul>
                        </div>
                    </div>
                    <div className="box-footer text-end mt-3">
                        <button type="button" className="btn btn-primary me-2"
                            >
                            <i className="ti-save-alt" /> {content.save}
                        </button>
                        <button type="button" className="btn btn-warning ">
                            <i className="ti-trash" /> {content.cancel}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    }
/>
  )
}

export default CorporatorPermissionPage