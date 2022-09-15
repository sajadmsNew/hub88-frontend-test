
import React, { useState, useEffect, useMemo } from 'react';
import Pagination from '../pagination/Pagination';
import  TableRow  from './TableRow';


export type TableProps={
    loading:boolean,
    loadingAll:boolean,
    data:any
}

export const Tables = (props: TableProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    let PageSize = 10;
  
    const currentTableData:any[] = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        
        if (props.data !== undefined && props.data.length !== 0) {
            if(props?.data?.length === 1){
                return props.data
            }
            return props.data?.slice(firstPageIndex, lastPageIndex);
        }
       
        return []
    }, [currentPage, props.data, PageSize]);

    return (
    
        <>
        <table>
            <thead>
                <tr>
                    <th align="left">Code</th>
                    <th align="left">Phone</th>
                    <th align="left">Name</th>
                </tr>
            </thead>
           
            <tbody>
               <TableRow loading={props.loading}   currentTableData={currentTableData}  loadingAll={props.loadingAll} />
            </tbody>
        </table>

        
        <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={props?.data?.length}
            pageSize={PageSize}
            onPageChange={(page: any) => setCurrentPage(page)}
        />
    </>
    )
}

 
  const MemorizedTable= React.memo(Tables);
  export default MemorizedTable;
