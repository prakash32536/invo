import React, {forwardRef, useImperativeHandle} from 'react';
import DataGrid, {
    Column,
    HeaderFilter,
    FilterPanel,
    FilterRow,
    Pager,
    Paging,
} from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';
import { useNavigate } from 'react-router-dom';
import './style.css'

//

import { db } from '../../Firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react';

const allowedPageSizes = [5, 10];

const Exp = (props, ref) => {
    //call the data from direbase 
    const [data, setData] = useState([])
    const extra = async () => {
        console.log("hello")
        const invoiceRef = collection(db, "invoice")
        let updatedData = []
        const snapshot = await getDocs(invoiceRef)
        snapshot.docs.forEach((doc) => {
            updatedData.push({ ...doc.data(), id: doc.id })
        })
        setData(updatedData)
    }

    useImperativeHandle(ref,() => ({
        extra
    }))
    useEffect(() => {
        extra()
    }, [])

    // navigate
    const navigate = useNavigate()

    function handleRoute(e) {
        const rowData = e.data;
        navigate(`/details/${rowData.id}`,{ state: { item: rowData }});
      }

    return (
        <DataGrid
            dataSource={data}
            keyExpr="id"
            focusedRowEnabled={true}
            showBorders={true}
            onRowDblClick={handleRoute}
            className='all_invoice'
        >
            <HeaderFilter visible={true} />
            <FilterPanel visible={true} />
            <FilterRow visible={true} />
            <Pager
                allowedPageSizes={allowedPageSizes}
                showPageSizeSelector={true}
                showNavigationButtons={true}
            />
            <Paging defaultPageSize={5} />
            <Column dataField="client_name" />
            <Column dataField="item_name" />
            <Column dataField="price" />
            <Column dataField="Qty" />
            <Column dataField="total" />
        </DataGrid>
    );
}


export default forwardRef(Exp);
