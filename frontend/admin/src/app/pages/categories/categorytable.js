import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import { sortCaret, headerSortingClasses, } from '../../../_metronic/_helpers'
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NoRecordsFoundMessage, PleaseWaitMessage } from '../../../_metronic/_helpers'


const  Categorytable=()=> {
   
        const columns =[
            {
                dataField: "id",
                text: "ID",
                sortCaret: sortCaret,
                headerSortingClasses,
              },
            {
                dataField: "categories",
                text: "Categories",
                sortCaret: sortCaret,
                headerSortingClasses,
              },
        ]
        const { currentState } = useSelector(
            (state) => ({ currentState: state.customers }),
            shallowEqual
          );
          const { totalCount, entities, listLoading } = currentState;
          let data = []
        return (
            <BootstrapTable
                wrapperClasses="table-responsive"
                bordered={false}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                remote
                keyField="id"
                data={data}//{entities === null ? [] : entities}
                columns={columns}
                // defaultSorted={uiHelpers.defaultSorted}
                // onTableChange={getHandlerTableChange(
                //   customersUIProps.setQueryParams
                // )}
                // selectRow={getSelectRow({
                //   entities,
                //   ids: customersUIProps.ids,
                //   setIds: customersUIProps.setIds,
                // })}
                // {...paginationTableProps}
              >
                <PleaseWaitMessage entities={entities} />
                <NoRecordsFoundMessage entities={entities} />
              </BootstrapTable>
        )
    
}
export default Categorytable