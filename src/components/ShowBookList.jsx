import React from 'react'
import { Grid, Typography, Divider } from '@mui/material'
import { dataTestIds, textContent } from '../common/constants'

function ShowBookList() {
  return (
    <>
      <Grid data-testid={dataTestIds.showBookList} size={{ xs: 12, md: 8 }} sx={{ border: '1px solid #ccc', bgcolor:'grey.200' }}>
        <Typography variant="h5" sx={{ p: 1, pl: 2, bgcolor:'grey.300' }}>{textContent.bookListHeaderTitle}</Typography>
        <Divider />
        <Grid container spacing={2} sx={{ p: 2 }} data-testid={dataTestIds.bookListInnerGrid}>
        </Grid>
      </Grid>
    </>
  )
}
export default ShowBookList