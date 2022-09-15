import React  from "react";

  const  TableRow = (props:any)=>{


    if (props.loadingAll || props.loading) {
        return <tr className='card'>
                <td >
                    <div className="card-skeleton title"></div>
                </td>
                <td >
                        <div className="card-skeleton title "></div>
                </td>
                <td >
                    <div className="card-skeleton title "></div>
                </td>
            </tr>;
    }

    return (
        <>
        {/* {console.log('last page',props)} */}
        {props.currentTableData.map((country: any ,key:any) => {
            return (
                <tr key={key}>
                    <td align="left">
                        <div>{country.code}</div>
                        
                        </td>
                    <td align="left">
                        <div>{country.phone}</div>
                        
                        </td>
                    <td align="left">
                        <div>{country.name}</div>
                        </td>
                </tr>
            )
        })}
    </>
    )
}
const MemorizedTableRow= React.memo(TableRow);
export default MemorizedTableRow;