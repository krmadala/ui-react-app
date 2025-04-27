import { Grid, GridColumn } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../api/userService';

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 5 };

export default function UserSearch() {
    const [page, setPage] = useState<PageState>(initialDataState);
    const [pageSizeValue, setPageSizeValue] = useState<number | string | undefined>(5);
    const [data, setData] = useState([]);
    useEffect(() => {
        getAllUsers().then((response) => {

            setData(response); 
        }).catch((error) => {

            console.error('Error fetching users:', error);
        });
    }, []);
  return (
   
    <div>
      <h1>KendoReact Grid Example</h1>
      <br/>
      <p>This is a simple example of using KendoReact Grid to display user data.</p>
    <Grid data={data}
    total={data.length}
    pageable={{
        buttonCount: 4,
        pageSizes: [5, 10, 15, 'All'],
        pageSizeValue: pageSizeValue
    }}
    >
         <GridColumn field="_id" />
         <GridColumn field="email" />
    </Grid>
    </div>
      );
  }